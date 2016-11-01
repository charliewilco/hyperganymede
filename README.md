# Hyperganymede

[Ganymede](https://github.com/charlespeters/ganymede) colors for [Hyper.app](https://github.com/charlespeters/ganymede).


## Installation

Add `'hyperganymede'` under plugins in your configuration file (preferably toward the end of the list). An example:

```js
module.exports = {
  config: {
    fontSize: 14,
    fontFamily: 'SFMono-Medium',
    cursorShape: 'BEAM',
    cursorColor: 'rgba(255, 255, 255, .25)',
    foregroundColor: '#fff',
    backgroundColor: 'rgba(9, 55, 80, 0.88)',
    borderColor: '#333',
    css: ``,
    bell: false,
    termCSS: ``,
    padding: '12px 14px',
    colors: [
      ...
    ]
  },
  plugins: [
    'hypercwd',
    'hyperlinks',
    'hyperterm-tabs',
    'hyperterm-blink',
    'hyperterm-tab-icons',
    'hyperterm-title',
    'hyperterm-paste'
    'hyperganymede'
  ]
}
```
