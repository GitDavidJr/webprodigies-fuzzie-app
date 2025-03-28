import { ConnectionsProvider } from '@/src/providers/connections-provider'
import EditorProvider from '@/src/providers/editor-provider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full'>
        <EditorProvider>
            <ConnectionsProvider>
                <>{/* Next work here */}</>
            </ConnectionsProvider>
        </EditorProvider>
    </div>
  )
}

export default page