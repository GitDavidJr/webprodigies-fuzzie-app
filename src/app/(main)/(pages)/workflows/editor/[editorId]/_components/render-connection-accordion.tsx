'use client'

import { AccordionContent } from '@/src/components/ui/accordion'
import { Connection } from '@/src/lib/types'
import { useNodeConnections } from '@/src/providers/connections-provider'
import { EditorState } from '@/src/providers/editor-provider'
import { useFuzzieStore } from '@/src/store'
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
    const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } = useFuzzieStore()

    const connectionData = (nodeConnection as any)[connectionKey]
    const isConnected =
      alwaysTrue ||
      (
        nodeConnection[connectionKey] &&
        accessTokenKey &&
        connectionData[accessTokenKey!]
      ) 
  return (
    <AccordionContent key={title}>
        <div className='p-6'>
          {state.editor.selectedNode.data.title == title && (
            <div className='mb-4 ml-1'>
              Select the slack channels to send notification and mesages:
            </div>
            <MultipleSelector
              value={selectedSlackChannels}
              onChange={setSelectedSlackChannels}
              defaultOpetions={slackChannels}
              placeHolder='Select channels'
              emptyIndicator={
                <p className='texte-center text-lg leading-10 text-gray-600 dark: text-gray-400'>
                  no results found.
                </p>
              }
            />

          )}
        </div>

    </AccordionContent>
  )
}

export default RenderConnectionAccordion