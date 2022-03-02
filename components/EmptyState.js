import React from 'react'
import { Heading, Box, Text, Button, VStack } from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
  <VStack w='full' backgroundColor='white' borderRadius={8} p={16} spacing={4}>
    <Heading as='h2' size='md'>
      {"You haven't added any works."}
    </Heading>
    <Text>{"Welcome 👋🏻 Let's get started."}</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </VStack>
)

export default EmptyState
