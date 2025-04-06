"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { CONNECTIONS, EditorCanvasDefaultCardTypes } from "@/src/lib/constant";
import { EditorCanvasTypes, EditorNodeType } from "@/src/lib/types";
import { useNodeConnections } from "@/src/providers/connections-provider";
import { useEditor } from "@/src/providers/editor-provider";
import React from "react";
import EditorCanvasCardHelperIcon from "./editor-canvas-card-helper-icon";
import { onDragStart } from "@/src/lib/editor-utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import RenderConnectionAccordion from "./render-connection-accordion";

type Props = {
  nodes: EditorNodeType[];
};

const EditorCanvasSidebar = ({ nodes }: Props) => {
  //WIP: Connect DB stuff

  const { state } = useEditor();
  const { nodeConnection } = useNodeConnections();
  return (
    <aside>
      <Tabs defaultValue="actions" className="h-screen overflow-scroll pb-24">
        <TabsList>
          <TabsTrigger value="actions">Actions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="actions" className="flex flex-col gap-4 p-4">
          {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(
              ([_, cardType]) =>
                (!nodes.length && cardType.type === "Trigger") ||
                (nodes.length && cardType.type == "Action")
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grap border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                onDragStart={(event) =>
                  onDragStart(event, cardKey as EditorCanvasTypes)
                }
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasCardHelperIcon
                    type={cardKey as EditorCanvasTypes}
                  />
                  <CardTitle className="text-md">{cardKey}</CardTitle>
                  <CardDescription>{cardValue.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
        </TabsContent>
        <TabsContent
          value="settings"
          className="flex flex-col gap-4 p-4"
        >
          <div className="px-2 py-4 text-center text-xl font-bold">
            {state.editor.selectedNode.data.title}
          </div>
          <Accordion type='multiple'>
            <AccordionItem
              value="options"
              className="border-y-[1px] px-2"
            >
              <AccordionTrigger className="!no-underline">
                Account
              </AccordionTrigger>
              <AccordionContent>
                {
                  CONNECTIONS.map((connection) => (
                    <RenderConnectionAccordion
                      key={connection.title}
                      state={state}
                      connection={connection}
                    />
                  ))
                }{' '}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </aside>
  );
};

export default EditorCanvasSidebar;
