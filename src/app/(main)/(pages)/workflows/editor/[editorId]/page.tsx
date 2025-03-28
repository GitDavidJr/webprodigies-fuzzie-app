import EditorProvider from '@/src/providers/editor-provider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full'>
        <EditorProvider>
            <div></div>
        </EditorProvider>
    </div>
  )
}

export default page