import { memo, ReactNode, ComponentProps } from 'react'
import { StyledFlex } from './Styled'

export type FlexProps = {
  children: ReactNode
} & ComponentProps<typeof StyledFlex>

export const Flex = memo<FlexProps>((props) => {
  return <StyledFlex {...props} />
})
