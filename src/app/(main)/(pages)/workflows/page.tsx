import React from 'react'

type Props = {}

const WorkflowsPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative'>
        <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 background-bluer-lg flex items-center border-b'>
          Workflows
        </h1>
    </div>
  )
}

export default WorkflowsPage