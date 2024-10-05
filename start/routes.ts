/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { parse } from 'url'

const Next = await app.container.make('nextjs')
const handler = Next.getRequestHandler()

router
  .group(() => {
    router.get('/', async () => ({ hello: 'world' }))
  })
  .prefix('/api')

router.any('*', async ({ request, response }) => {
  const parsedUrl = parse(request.url(true), true)
  await handler(request.request, response.response, parsedUrl)
})
