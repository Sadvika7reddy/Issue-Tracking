'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuepage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='tittle'/>
        </TextField.Root>
        <TextArea placeholder='Description'/>
        <Button>Submit NewIssue</Button>
    </div>
  )
}

export default NewIssuepage