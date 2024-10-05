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
console.log(Next)

const handler = Next.getRequestHandler()

router.get('/', async () => ({ hello: 'world' }))

router.any('*', async ({ request, response }) => {
  const parsedUrl = parse(request.url(true), true)
  await handler(request.request, response.response, parsedUrl)
})
