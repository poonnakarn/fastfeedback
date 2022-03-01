import React from 'react'
import { Heading, Box, Text, Button, VStack } from '@chakra-ui/react'
import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
  <DashboardShell>
    <VStack
      w='full'
      backgroundColor='white'
      borderRadius='8px'
      p={16}
      spacing={4}
    >
      <Heading as='h2' size='md'>
        You haven't added any works.
      </Heading>
      <Text>Welcome 👋🏻 Let's get started.</Text>
      <AddSiteModal />
    </VStack>
  </DashboardShell>
)

export default EmptyState
