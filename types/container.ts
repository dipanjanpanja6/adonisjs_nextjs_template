import { NextServer } from 'next/dist/server/next.js'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    nextjs: NextServer
  }
}
