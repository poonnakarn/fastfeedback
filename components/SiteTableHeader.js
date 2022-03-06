import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Heading,
} from '@chakra-ui/react'

import AddSiteModal from '@/components/AddSiteModal'

function SiteTableHeader() {
  return (
    <>
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
    </>
  )
}
export default SiteTableHeader
