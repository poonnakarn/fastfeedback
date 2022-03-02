import { Flex, Button } from '@chakra-ui/react'
import { LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'

export default function Home() {
  const { signinWithGithub, currentUser } = useAuth()
  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      minW='300px'
      h='100vh'
    >
      <LogoIcon boxSize={16} />
      {currentUser ? (
        <Button size='sm' onClick={() => {}}>
          View Dashboard
        </Button>
      ) : (
        // <Button onClick={() => auth.signout()}>Sign Out</Button>
        <Button size='sm' onClick={() => signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  )
}
