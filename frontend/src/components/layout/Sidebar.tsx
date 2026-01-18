import React from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function Sidebar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure(); // Controls the opening and closing of attributes
  const [collapsed, setCollapsed] = React.useState(false);

  const handleCollapsed = () => 
  {
    setCollapsed(!collapsed);
  }

  return (
    <>
    
      {/*}
      <Drawer backdrop={"transparent"} placement="left" isOpen = {isBeingCollapsed}
      size="xs" isDismissable = {true} className="">
      <DrawerContent>
      <DrawerHeader>Drawer Title</DrawerHeader>
      <DrawerBody>
      Hello
      </DrawerBody>
      </DrawerContent>
      {*/}

        <div className ={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <Button onPress={handleCollapsed} className="toggle-btn">
        {collapsed ? "Expand" : "Collapse"}
      </Button>

      <Drawer isDismissable = {false} backdrop={"transparent"}
      size="xs" defaultOpen={true} isOpen={collapsed} onOpenChange={handleCollapsed} placement = "left"> {/*Custom close button to be added*/}
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Productive Tasks</DrawerHeader>
              <DrawerBody>
                <Button onPress={onOpen}>Hobbies</Button>
                <Button onPress={onOpen}>Statistics</Button>
                <Button onPress={onOpen}>Reminders</Button>
                <Button onPress={onOpen}>Statistics</Button>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
      </div>
    </>
  );
}
