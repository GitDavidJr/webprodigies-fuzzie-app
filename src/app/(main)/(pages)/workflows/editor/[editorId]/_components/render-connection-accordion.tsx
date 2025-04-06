'use client'

import { Connection } from '@/src/lib/types'
import { useNodeConnections } from '@/src/providers/connections-provider'
import { EditorState } from '@/src/providers/editor-provider'
import React from 'react'

type Props = {

}

const RenderConnectionAccordion = ({
    connection,
    state,
}: {
    connection: Connection
    state: EditorState
}) => {
    const {
        title,
        image,
        description,
        connectionKey,
        accessTokenKey,
        alwaysTrue,
        slackSpecial,
    } = connection

    const { nodeConnection } = useNodeConnections()
  return (
    <div>RenderConnectionAcordion</div> //https://youtu.be/XkOXNlHJP6M?list=PLODONmRkpyQ9C9Q6dRrCXFrDz4VuTRf3M&t=15511
  )
}

export default RenderConnectionAccordion