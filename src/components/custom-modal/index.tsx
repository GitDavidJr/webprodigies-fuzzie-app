import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useModal } from "@/src/providers/modal-provider";
import { Button } from "../ui/button";

type Props = {
  title: string;
  subheading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, title, subheading, defaultOpen }: Props) => {
  const { isOpen, setClose } = useModal();

  const handleClose = () => {
    setClose();
  };

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
            {subheading}
            {children}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
          <DrawerClose>
            <Button className="w-full" onClick={handleClose} variant="ghost">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>s
    </Drawer>
  );
};

export default CustomModal;
