import { Flex, Button } from '@chakra-ui/react'
import { LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'

export default function Home() {
  const { signinWithGithub, currentUser } = useAuth()
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      minW="300px"
      h="100vh"
    >
      <LogoIcon boxSize={16} />
      {currentUser ? (
        <EmptyState />
      ) : (
        // <Button onClick={() => auth.signout()}>Sign Out</Button>
        <Button mt={48} size="sm" onClick={() => signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  )
}
