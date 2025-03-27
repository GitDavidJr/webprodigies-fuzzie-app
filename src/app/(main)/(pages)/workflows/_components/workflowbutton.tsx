'use client'
import CustomModal from '@/src/components/custom-modal'
import WorkflowForm from '@/src/components/forms/workflow-form'
import { Button } from '@/src/components/ui/button'
import { useModal } from '@/src/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkFlowButton = (props: Props) => {

    const { setOpen, setClose } = useModal()
    const handleClick = () => {
        console.log('click')
        setOpen(
          <CustomModal
            title="Create a Workflow Automation"
            subheading="Workflows are a powerfull that help you automate tasks."
          >
            <WorkflowForm />
          </CustomModal>
        )
      }

  return (
    <Button
        size={'icon'}
        onClick={handleClick}
    >
        <Plus />
        
    </Button>
  )
}

export default WorkFlowButton