import React from 'react'
import NextLink from 'next/link'
import { Flex, HStack, Link, Avatar, Box } from '@chakra-ui/react'
import { LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {
  const { currentUser, logOut } = useAuth()

  return (
    <Box h='100vh' backgroundColor='gray.100'>
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        p={4}
        backgroundColor='white'
      >
        <HStack spacing={4}>
          <NextLink href='/'>
            <LogoIcon boxSize={8} style={{ cursor: 'pointer' }} />
          </NextLink>
          <NextLink href='/dashboard' passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href='/feedback' passHref>
            <Link>Feedback</Link>
          </NextLink>
        </HStack>
        <HStack alignItems='center' justifyContent='center' spacing={4}>
          <Link onClick={logOut}>Log Out</Link>
          <Avatar size='sm' src={currentUser?.photoUrl} />
        </HStack>
      </Flex>
      <Flex
        flexDirection='column'
        backgroundColor='gray.100'
        alignItems='center'
        h='100%'
        p={8}
      >
        <Flex
          alignItems='flex-start'
          flexDirection='column'
          maxWidth='1250px'
          w='100%'
          justifyContent='center'
        >
          {children}
        </Flex>
      </Flex>
    </Box>
  )
}

export default DashboardShell
