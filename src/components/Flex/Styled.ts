import { styled } from '~/configs/stitches.config'

export const StyledFlex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      col: { flexDirection: 'column' },
      row: { flexDirection: 'row' },
    },
    items: {
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
    },
  },
})
