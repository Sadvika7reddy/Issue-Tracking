'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {useForm,Controller}  from "react-hook-form"

interface IssueForm{
    tittle:String;
    description:String
}

const NewIssuepage=()=>{
    const router=useRouter();
    const {register,control,handleSubmit}=useForm<IssueForm>();
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(
        async data=>{
            try {
                await axios.post('/api/issues',data)
                router.push('/issues')
            } catch (error) {
               console.log(error) 
            }
    }
        )}>
        <TextField.Root>
            <TextField.Input placeholder='tittle' {...register('tittle')}/>
        </TextField.Root>
        <Controller
        name="description"
        control={control}
        render={(field)=><SimpleMDE placeholder='description' {...field}/>}
        />   
        <Button>Submit NewIssue</Button>
    </form>
  )
}

export default NewIssuepage