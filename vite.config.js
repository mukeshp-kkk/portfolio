import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmails } from './lib/contact-email.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'portfolio-contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Allow', 'POST')
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
              if (body.length > 100_000) req.destroy()
            })
            req.on('end', async () => {
              try {
                const payload = JSON.parse(body || '{}')
                const { name, email, subject, message } = payload

                if (!name?.trim() || !email?.trim() || !message?.trim()) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Please complete your name, email, and message.' }))
                  return
                }

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Please enter a valid email address.' }))
                  return
                }

                await sendContactEmails({
                  name: name.trim(),
                  email: email.trim(),
                  subject: subject?.trim() || 'New portfolio inquiry',
                  message: message.trim(),
                }, env)

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ ok: true, message: 'Thanks! Your message has been sent.' }))
              } catch (error) {
                console.error('Contact form error:', error)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Your message could not be sent right now. Please try again.' }))
              }
            })
          })
        },
      },
    ],
  }
})
