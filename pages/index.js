import Head from 'next/head'
import { Flex, Button, Text, Link, VStack } from '@chakra-ui/react'
import { parseCookies } from 'nookies'

import { GitHubIcon, GoogleIcon, LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'

export default function Home() {
  const { signinWithGithub, signInWithGoogle, currentUser } = useAuth()
  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Flex
        as='main'
        direction='column'
        maxW='700px'
        margin='0 auto'
        h='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <LogoIcon boxSize={16} />
        <Text mb={4} fontSize='lg' p={6}>
          <Text as='span' fontWeight='bold' display='inline'>
            Fast Feedback
          </Text>
          {' was built as part of '}
          <Link
            href='https://react2025.com'
            isExternal
            textDecoration='underline'
          >
            React 2025
          </Link>
          {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
        </Text>
        {currentUser ? (
          <Button
            size='sm'
            as='a'
            href='/dashboard'
            size='lg'
            backgroundColor='white'
            color='gray.900'
            variant='outline'
            fontWeight='medium'
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)',
            }}
          >
            View Dashboard
          </Button>
        ) : (
          // <Button onClick={() => auth.signout()}>Sign Out</Button>
          <VStack spacing={4}>
            <Button
              onClick={() => signinWithGithub()}
              leftIcon={<GitHubIcon />}
              size='lg'
              backgroundColor='gray.900'
              color='white'
              fontWeight='medium'
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)',
              }}
            >
              Sign in with Github
            </Button>
            <Button
              onClick={() => signInWithGoogle()}
              leftIcon={<GoogleIcon />}
              size='lg'
              backgroundColor='white'
              color='gray.900'
              variant='outline'
              fontWeight='medium'
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.100',
                transform: 'scale(0.95)',
              }}
            >
              Sign in with Google
            </Button>
          </VStack>
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
