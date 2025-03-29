import { EditorCanvasCardType } from "@/src/lib/types";
import { useEditor } from "@/src/providers/editor-provider";
import { useNodeId } from "@xyflow/react";
import React, { useMemo } from "react";
import EditorCanvasCardHelperIcon from "./editor-canvas-card-helper-icon";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasCardHelperIcon type={data.type}/>;
  }, [data]);

  return 
    <>
      {data.type == 'Trigger' && data.type !== "Google Drive" && (
        <CustomGadle
          type={'target'}
          position={Position.Top}
          styles={{ zIndex:100}}          
        />
      )}
    </>;
};

export default EditorCanvasCardSingle;
