'use client'

import React, { useMemo } from 'react'
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { EditorNodeType } from '@/src/lib/types';
import { useEditor } from '@/src/providers/editor-provider';
import EditorCanvasCardSingle from './editor-canvas-card-single';
import { ResizablePanel, ResizablePanelGroup } from '@/src/components/ui/resizable';

type Props = {}

const initialNodes: EditorNodeType[] = []

const initialEdges: { id: string; source: string; target: string }[] = []

const EditorCanvas = (props: Props) => {

    const {dispatch, state} = useEditor()

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