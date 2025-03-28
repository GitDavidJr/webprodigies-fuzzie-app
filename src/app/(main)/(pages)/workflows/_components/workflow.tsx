import { Card, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Switch } from "@/src/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const Workflow = ({ name, description, id, publish }: Props) => {
    //CHALLENGE:
    //WIP: conect on db

  return (
    <Card className="flex w-full items center justify-between">
      <CardHeader className="fçex fçex-col gap-4">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4 justify-center">
        <Label
            htmlFor='airplanee-mode'
            className="text-muted-foreground"
        >
            on
        </Label>
        <Switch
            id='airplane-mode'
            /* onClick={}
            defaultChecked={publish} */ 
        />
      </div>

    </Card>
  );
};

export default Workflow;
