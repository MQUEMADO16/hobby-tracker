import React from "react";
import { Drawer, DrawerContent } from "@heroui/react";

const Sidebar: React.FC = () => {
    return (
    <Drawer
        placement="left"
        size="xl"
        isOpen = {true}
        defaultOpen = {true}
        isDismissable = {true}
        hideCloseButton = {true}
    >
        <DrawerContent>
            <div></div>
        </DrawerContent>

    </Drawer>
)
}

export default Sidebar;
