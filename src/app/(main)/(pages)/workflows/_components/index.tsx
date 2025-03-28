import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
        <section className='flex flex-col gap-4 p-6'>
            <Workflow name='Automation workflow' description='creating a teste workflow' id='3jsabdaosid3' publish={false}/>
        </section>
    </div>
  )
}

export default Workflows