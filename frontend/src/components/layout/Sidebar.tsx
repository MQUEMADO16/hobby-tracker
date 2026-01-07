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
      {/* The HeroUI Documentation Example */}
      {/* Replace this with our actual sidebar content */}
      <Button onPress={onOpen}>Dashboard</Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement = "left">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Productive Tasks</DrawerHeader>
              <DrawerBody>
                <Button onPress = {onOpen}>Hobbies</Button>
                <Button onPress = {onOpen}>Statistics</Button>
                <Button onPress = {onOpen}>Reminders</Button>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
