"use client";
import { Button } from "@/src/components/ui/button";
import { useNodeConnections } from "@/src/providers/connections-provider";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import { onCreateNodesEdges, onflowPublish } from "../_actions/workflow-connections";

type Props = {
  children: React.ReactNode;
  edges: any[];
  nodes: any[];
};

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname();
  const [isFlow, setIsFlow] = useState([]);
  const { nodeConnection } = useNodeConnections();

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split("/").pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    );

    if (flow) toast.message(flow.menssage);
  }, [nodeConnection]);

  const onPublishWorkFlow = useCallback(async () => {
    const response = onflowPublish(pathname.split("/").pop()!, true)
    if (response) toast.message(response)
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button onClick={onFlowAutomation} disabled={isFlow.length < 1}>
          Save
        </Button>
        <Button onClick={onPublishWorkFlow} disabled={isFlow.length < 1}>
          Publish
        </Button>
      </div>
      {children}
    </div>
  );
};

export default FlowInstance;
