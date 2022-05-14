import { ComponentProps, memo, ReactNode } from 'react'
import { StyledButton } from './Styled'

export type ButtonProps = {
  children: ReactNode
} & ComponentProps<typeof StyledButton>

export const Button = memo<ButtonProps>((props) => {
  return <StyledButton {...props} />
})
