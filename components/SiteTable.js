import React from 'react'
import { Link, Thead, Tbody, Table, Tr, Th, Td, Tfoot } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import NextLink from 'next/link'

const SiteTable = ({ sites }) => {
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
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((site) => (
          <Tr
            backgroundColor='white'
            // borderTopLeftRadius={8}
            // borderTopRightRadius={8}
            // borderBottom='1px solid'
            borderBottomColor='gray.200'
            height='40px'
            key={site.url}
          >
            <Td fontWeight='medium'>{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <NextLink href={`/p/${site.id}`} passHref>
                <Link color='blue.500' fontWeight='medium'>
                  View Feedback
                </Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default SiteTable
