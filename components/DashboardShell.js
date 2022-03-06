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
  Button,
  Box,
} from '@chakra-ui/react'
import { LogoIcon } from '@/styles/icons'
import { useAuth } from '@/lib/auth'
import AddSiteModal from './AddSiteModal'

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
          <LogoIcon boxSize={8} />
          <Link>MDCUHub</Link>
          <Link>Sites</Link>
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
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color='gray.700' fontSize='md'>
                Sites /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HStack justifyContent='space-between' w='100%' mb={4}>
            <Heading mb={4}>My Sites</Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </HStack>
          {children}
        </Flex>
      </Flex>
    </Box>
  )
}

export default DashboardShell
