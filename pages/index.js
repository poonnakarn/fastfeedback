import Head from 'next/head'
import { Flex, Button } from '@chakra-ui/react'
import { parseCookies } from 'nookies'

import { LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'

export default function Home() {
  const { signinWithGithub, currentUser } = useAuth()
  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
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
          <Button size='sm' as='a' href='/dashboard'>
            View Dashboard
          </Button>
        ) : (
          // <Button onClick={() => auth.signout()}>Sign Out</Button>
          <Button size='sm' onClick={() => signinWithGithub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </>
  )
}

// redirect if logged in
export async function getServerSideProps(context) {
  const cookies = parseCookies(context)

  if (cookies['fast-feedback-auth'] === 'true') {
    context.res.writeHead(303, { Location: '/dashboard' })
    context.res.end()
  }

  return { props: {} }
}
