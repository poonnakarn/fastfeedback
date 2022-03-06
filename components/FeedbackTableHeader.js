import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Heading,
} from '@chakra-ui/react'

function FeedbackTableHeader() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink color='gray.700' fontSize='md'>
            Feedback
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <HStack justifyContent='space-between' w='100%' mb={4}>
        <Heading mb={4}>My Feedback</Heading>
      </HStack>
    </>
  )
}
export default FeedbackTableHeader
