'use client'
import { WorkflowFormSchema } from '@/src/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
    title?: string
    subTitle?: string
}

const WorkflowForm = ({title, subTitle}: Props) => {

    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
            name: '',
            description: '',
        }
    })

    const isLoading = form.formState.isLoading
    const router = useRouter()

  return (
    <div>WorkflowForm</div>
  )
}

export default WorkflowForm