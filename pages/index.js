import { useAuth } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { Button, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>Current User: {auth.user ? auth.user.email : 'None'}</Text>
        {auth.user ? (
          <Button onClick={() => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  )
}
