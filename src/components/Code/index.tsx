import { ComponentProps, memo } from 'react'
import { StyledCode } from './Styled'

export type CodeProps = {
  children: string
} & ComponentProps<typeof StyledCode>

export const Code = memo<CodeProps>(({ children, ...props }) => {
  return (
    <StyledCode {...props}>
      {children
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map((line) => (
          <p key={line}>{line}</p>
        ))}
    </StyledCode>
  )
})
