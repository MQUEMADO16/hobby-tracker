import React from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  Tooltip
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
        <div className ={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <Button onPress={handleCollapsed} className="toggle-btn">
        {collapsed ? "≣" : "≣"}
      </Button>

      <Drawer 
      hideCloseButton= {true} isDismissable = {false} backdrop={"transparent"}
      size="xs" defaultOpen={true} isOpen={collapsed} onOpenChange={handleCollapsed} placement = "left"
      classNames={{
          base: "sm:data-[placement=right]:mt-16",
        }}> {/*Custom close button to be added*/}
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Productive Tasks
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="tex-400"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                    </svg>
                  </Button>
                </Tooltip>
                </DrawerHeader>
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
