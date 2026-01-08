import React from "react";
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

  return (
    <>
    
      <Button onPress={onOpen} >〉</Button>
      <Drawer isDismissable = {false} backdrop={"transparent"}
      size="xs" defaultOpen={true} isOpen={isOpen} onOpenChange={onOpenChange} placement = "left"> {/*Custom close button to be added*/}
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Productive Tasks</DrawerHeader>
              <DrawerBody>
                <Button onPress={onOpen}>Hobbies</Button>
                <Button onPress={onOpen}>Statistics</Button>
                <Button onPress={onOpen}>Reminders</Button>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
