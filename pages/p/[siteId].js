import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { createFeedback } from '@/lib/db'
import { getAllFeedback, getAllSites } from '@/lib/db-admin'
import { useAuth } from '@/lib/auth'
import Feedback from '@/components/Feedback'

function SiteFeedback({ initialFeedback }) {
  const auth = useAuth()
  const router = useRouter()
  const inputRef = useRef(null)
  const [allFeedback, setAllFeedback] = useState(initialFeedback)

  const onSubmit = (e) => {
    e.preventDefault()

    const newFeedback = {
      author: auth.currentUser.name,
      authorId: auth.currentUser.uid,
      siteId: router.query.siteId,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.currentUser.provider,
      status: 'pending',
    }

    // mutate the state
    setAllFeedback((prevState) => [...prevState, newFeedback])

    createFeedback(newFeedback)
  }

  return (
    <Box display='flex' flexDir='column' w='full' maxW='700px' m='0 auto'>
      <form onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor='email'>Comment</FormLabel>
          <Input id='comment' type='text' ref={inputRef} />
          <Button type='submit' mt={2}>
            Add Comment
          </Button>
        </FormControl>
      </form>

      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  )
}
export default SiteFeedback

export async function getStaticProps(context) {
  const siteId = context.params.siteId

  const { feedback } = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback,
    },
  }
}
export async function getStaticPaths() {
  const { sites } = await getAllSites()
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
