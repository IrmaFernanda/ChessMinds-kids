import { ElectronAPI } from '@electron-toolkit/preload'
import { GetOptions } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getOptions: GetOptions
    }
  }
}
