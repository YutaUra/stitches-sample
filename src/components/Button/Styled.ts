import { styled } from '~/configs/stitches.config'

export const StyledButton = styled('button', {
  backgroundColor: 'white',

  borderRadius: 999,

  borderWidth: 1,

  color: '$text-base',
  variants: {
    color: {
      gray: {
        '&:hover': {
          backgroundColor: 'lightgray',
        },
        backgroundColor: 'gainsboro',
      },
      violet: {
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
        backgroundColor: 'blueviolet',
        color: 'white',
      },
    },
    size: {
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
      small: {
        fontSize: '13px',
        height: '25px',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
    },
  },
})
