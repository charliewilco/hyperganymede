import { uiGroups, ansiGroups } from 'ganymede'
import chroma from 'chroma-js'

exports.decorateConfig = config => Object.assign({}, config, {
  cursorColor: uiGroups.userCurrentState,
  foregroundColor: uiGroups.foreground,
  backgroundColor: chroma(uiGroups.background).alpha(0.5),
  borderColor: uiGroups.background,
  colors: {
    black: ansiGroups.normal.black,
    red: ansiGroups.normal.red,
    green: ansiGroups.normal.green,
    yellow: ansiGroups.normal.yellow,
    blue: ansiGroups.normal.blue,
    magenta: ansiGroups.normal.magenta,
    cyan: ansiGroups.normal.cyan,
    white: ansiGroups.normal.white,
    lightBlack: ansiGroups.bright.black,
    lightRed: ansiGroups.bright.red,
    lightGreen: ansiGroups.bright.green,
    lightYellow: ansiGroups.bright.yellow,
    lightBlue: ansiGroups.bright.blue,
    lightMagenta: ansiGroups.bright.magenta,
    lightCyan: ansiGroups.bright.cyan,
    lightWhite: ansiGroups.bright.white
  },
  termCSS: `
    ${config.termCSS},
    .cursor-node { opacity: 0.8 !important; }
    x-screen a { color: ${ansiGroups.bright.magenta}; }
  `,
  css: `
    ${config.css},
    .tab_first {
      margin-left: 0 !important;
    }
    .tab_tab {
      background-color: ${uiGroups.gray3};
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
    }
    .tab_tab.tab_active {
      background-color: ${uiGroups.background} !important;
      border-bottom-color: ${ansiGroups.bright.yellow};
    }
    .tab_tab.tab_active::before {
      border: none !important;
    }
    .tab_text {
      border: none !important;
      color: ${uiGroups.background} !important;
    }
    .tabs_title,
    .tab_textActive {
      color: ${uiGroups.userCurrentState} !important;
    }
    .tabs_title,
    .tab_textInner {
      font-size: 14px;
      font-weight: bold;
    }
    .splitpane_divider {
      background: ${uiGroups.gray2} !important;
      border-color: ${uiGroups.background} !important;
    }
  `
})

exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')
