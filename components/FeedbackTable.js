import React from 'react'
import {
  Thead,
  Tbody,
  Table,
  Tr,
  Th,
  Td,
  Code,
  Switch,
  IconButton,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import RemoveButton from './RemoveButton'

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
              <Switch
                size='md'
                defaultChecked={feedback.status === 'active'}
                colorScheme='green'
              />
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default FeedbackTable
