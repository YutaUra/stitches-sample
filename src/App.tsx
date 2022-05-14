import 'modern-css-reset/dist/reset.css'
import { Button } from '~/components/Button'
import { Code } from './components/Code'
import { Flex } from './components/Flex'

export const App = () => {
  return (
    <Flex direction="col">
      <Flex css={{ paddingBlock: '$1', paddingInline: '$2' }} items="center">
        <Code css={{ flex: 1 }}>
          {`
            <Button color="gray" size="small">
              ボタン
            </Button>
          `}
        </Code>

        <Button color="gray" css={{ flex: 1 }} size="small">
          ボタン
        </Button>
      </Flex>

      <Flex css={{ paddingBlock: '$1', paddingInline: '$2' }} items="center">
        <Code css={{ flex: 1 }}>
          {`
            <Button color="violet" size="small">
              ボタン
            </Button>
          `}
        </Code>

        <Button color="violet" css={{ flex: 1 }} size="small">
          ボタン
        </Button>
      </Flex>

      <Flex css={{ paddingBlock: '$1', paddingInline: '$2' }} items="center">
        <Code css={{ flex: 1 }}>
          {`
            <Button color="gray" size="large">
              ボタン
            </Button>
          `}
        </Code>

        <Button color="gray" css={{ flex: 1 }} size="large">
          ボタン
        </Button>
      </Flex>
    </Flex>
  )
}
