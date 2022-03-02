import React from 'react'
import {
  Box,
  Skeleton,
  Thead,
  Tbody,
  Table,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

const SkeletonRow = ({ width }) => (
  <Tr
    backgroundColor='gray.50'
    borderTopLeftRadius={8}
    borderTopRightRadius={8}
    borderBottom='1px solid'
    borderBottomColor='gray.200'
    height='40px'
  >
    <Td>
      <Skeleton height='10px' w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height='10px' w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height='10px' w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height='10px' w={width} my={4} />
    </Td>
    <Td></Td>
  </Tr>
)

const SiteTableSkeleton = () => {
  return (
    <Table
      textAlign='left'
      backgroundColor='white'
      w='100%'
      ml={0}
      mr={0}
      borderRadius={8}
    >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </Thead>
      <Tbody>
        <SkeletonRow width='75px' />
        <SkeletonRow width='125px' />
        <SkeletonRow width='50px' />
        <SkeletonRow width='100px' />
        <SkeletonRow width='75px' />
      </Tbody>
    </Table>
  )
}

export default SiteTableSkeleton
