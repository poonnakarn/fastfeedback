import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { createSite } from '@/lib/db'
import { useAuth } from '@/lib/auth'

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser } = useAuth()

  const initialRef = useRef()

  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ site, url }) => {
    createSite({
      authorId: currentUser.uid,
      createdAt: new Date().toISOString(),
      site,
      url,
    })
    toast({
      title: `Success`,
      description: `We've added your site.`,
      status: 'success',
      isClosable: true,
      duration: 5000,
    })
    onClose()
  }

  return (
    <>
      <Button variant='solid' size='md' fontWeight='medium' onClick={onOpen}>
        Add Your First Document
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel ref={initialRef}>Name</FormLabel>
              <Input
                placeholder='My site'
                {...register('site', { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder='https://website.com'
                {...register('url', { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button backgroundColor='#99FFEE' color='#194D4C' type='submit'>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal
