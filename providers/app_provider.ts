import type { ApplicationService } from '@adonisjs/core/types'
import next from 'next'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton('nextjs', () => {
      const dev = this.app.inDev
      const dir = this.app.viewsPath()
      // logger.info(`Next js loading from : ${dir}`)

      const Next = next({ dev, dir, conf: { output: 'standalone' } })
      console.log(Next)

      return Next
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    if (this.app.getEnvironment() === 'web') {
      const Next = await this.app.container.make('nextjs')
      await Next.prepare()
    }
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
