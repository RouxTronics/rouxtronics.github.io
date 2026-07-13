import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins"
 
// Must be placed before loadQuartzConfig()
ExternalPlugin.BasesPage({
  defaultViewType: "table",
  customViews: {
    myView: ({ entries, view, basesData, total, locale }) => {
      // return JSX
    },
  },
})
