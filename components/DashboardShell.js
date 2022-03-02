import React from 'react'
import {
  Flex,
  HStack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'
import { LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {
  const { currentUser } = useAuth()

  return (
    <Flex flexDirection='column' h='100vh'>
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        p={4}
        backgroundColor='white'
      >
        <HStack spacing={4}>
          <LogoIcon boxSize={8} />
          <Link>MDCUHub</Link>
          <Link>Sites</Link>
        </HStack>
        <HStack alignItems='center' justifyContent='center' spacing={4}>
          <Link>{currentUser?.name}</Link>
          <Avatar size='sm' src={currentUser?.photoUrl} />
        </HStack>
      </Flex>
      <Flex
        flexDirection='column'
        backgroundColor='gray.100'
        alignItems='flex-start'
        h='100%'
        p={8}
      >
        <Flex
          alignItems='flex-start'
          flexDirection='column'
          maxWidth='800px'
          w='100%'
          justifyContent='center'
          ml='auto'
          mr='auto'
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color='gray.700' fontSize='md'>
                Sites /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>My Documents</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
