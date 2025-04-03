'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { ReactFlow, ReactFlowInstance } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { EditorCanvasCardType, EditorNodeType } from '@/src/lib/types';
import { useEditor } from '@/src/providers/editor-provider';
import EditorCanvasCardSingle from './editor-canvas-card-single';
import { ResizablePanel, ResizablePanelGroup } from '@/src/components/ui/resizable';
import { toast } from 'sonner';
import { v4 } from 'uuid';
import { EditorCanvasDefaultCardTypes } from '@/src/lib/constant';

type Props = {}

const initialNodes: EditorNodeType[] = []

const initialEdges: { id: string; source: string; target: string }[] = []


const EditorCanvas = (props: Props) => {

    const {dispatch, state} = useEditor()

    const[reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>()

    const onDrop = useCallback(
        (event: any) => {
            event.preventDefault()

            const type: EditorCanvasCardType['type'] = event.dataTransfer.getData(
                'application/reactflow'
            )

            // check if the droped element is valid
            if (typeof type === 'undefined' || type){
                return
            }

            const triggerAlreadyExists = state.editor.elements.find(
                (node) => node.type === 'Trigger'
            )

            if (type === 'Trigger' && triggerAlreadyExists) {
                toast('Only one trigger can be added to automations at the moment')
            }

            if (!reactFlowInstance) return

            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            })

            const newNode = {
                id: v4(),
                type,
                position,
                data: {
                    title: type,
                    description: EditorCanvasDefaultCardTypes[type].description,
                    completed: false,
                    current: false,
                    metadata: {},
                    type: type,
                },
            }


            //@ts-ignore
            setNodes((nds) => nds.concat(newNode))
        },
        [reactFlowInstance, state]
    )

    const nodeTypes = useMemo(() => ({
         Action: EditorCanvasCardSingle,
        Trigger: EditorCanvasCardSingle,
        Email: EditorCanvasCardSingle,
        Condition: EditorCanvasCardSingle,
        AI: EditorCanvasCardSingle,
        Slack: EditorCanvasCardSingle,
        'Google Drive': EditorCanvasCardSingle,
        Notion: EditorCanvasCardSingle,
        Discord: EditorCanvasCardSingle,
        'Custom Webhook': EditorCanvasCardSingle,
        'Google Calendar': EditorCanvasCardSingle,
        Wait: EditorCanvasCardSingle,

    }), [])

    //WIP: isWorkflowLoading fix it!

    //WIP: adicionar/criar funções de das props ReactFlow
    return (
        <ResizablePanelGroup
            direction='horizontal'
            className=''
        >
            <ResizablePanel defaultSize={70}>
                <div className='flex h-full items-center justify-center'>
                    <div
                        className='relative'
                        style={{
                            width: '100%',
                            height: '100%',
                            paddingBottom: '70px'
                        }}
                    >
                        <ReactFlow
                            className='w-[300px]'
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            nodes={state.editor.elements}
                            onNodesChange={onNodesChange}
                            edges={edges}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            fitView
                            onClick={handleClickCanvas}
                            nodeTypes={nodeTypes}
                        ></ReactFlow>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

export default EditorCanvas