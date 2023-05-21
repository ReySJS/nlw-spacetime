import 'dotenv/config'

import { resolve } from 'node:path'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import staticPath from '@fastify/static'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(multipart)

app.register(staticPath, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: ['http://localhost:3000'],
})

app.register(jwt, {
  secret: 'mySuperSecretKey',
})

app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => console.log('HTTP server is running!'))
