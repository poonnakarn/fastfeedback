import React from 'react'
import { Thead, Tbody, Table, Tr, Th, Td, Code, Switch } from '@chakra-ui/react'

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table
      variant='simple'
      textAlign='left'
      backgroundColor='gray.50'
      borderRadius={8}
    >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {allFeedback.map((feedback) => (
          <Tr
            backgroundColor='white'
            // borderTopLeftRadius={8}
            // borderTopRightRadius={8}
            // borderBottom='1px solid'
            borderBottomColor='gray.200'
            height='40px'
            key={feedback.id}
          >
            <Td fontWeight='medium'>{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{'/'}</Code>
            </Td>
            <Td>
              <Switch size='md' defaultChecked={feedback.status === 'active'} />
            </Td>
            <Td>{'Remove'}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default FeedbackTable
