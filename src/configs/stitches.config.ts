import { createStitches } from '@stitches/react'

type Size = number

const sizeToRm = (value: Size) => `${value * 0.25}rm` as const

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = createStitches({
  media: {
    bp0: '(min-width: 0)',
    bp1: '(min-width: 480px)',
  },
  theme: {
    colors: {
      'text-base': '#333333',
    },
    space: {
      1: '1rem',
      2: '2rem',
    },
  },
  utils: {
    p: (value: Size) => ({ padding: sizeToRm(value) }),
    px: (value: Size) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Size) => ({
      paddingBottom: sizeToRm(value),
      paddingTop: sizeToRm(value),
    }),
  },
})
