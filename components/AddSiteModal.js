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
import { mutate } from 'swr'

import { createSite } from '@/lib/db'
import { useAuth } from '@/lib/auth'

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser } = useAuth()

  const initialRef = useRef()

  const toast = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ name, url }) => {
    const newSite = {
      authorId: currentUser.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    }
    createSite(newSite)
    reset()
    toast({
      title: `Success`,
      description: `We've added your site.`,
      status: 'success',
      isClosable: true,
      duration: 5000,
    })
    mutate(
      '/api/sites',
      async (data) => ({
        sites: [...data.sites, newSite],
      }),
      false
    )
    onClose()
  }

  return (
    <>
      <Button
        backgroundColor='gray.900'
        color='white'
        fontWeight='medium'
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
        onClick={onOpen}
      >
        {children}
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
                {...register('name', { required: true })}
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
