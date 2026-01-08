import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Avatar,
} from "@heroui/react";

export default function Header() {
    return (
        <Navbar isBlurred = {false} position="sticky" isBordered = {true} isMenuDefaultOpen = {true}>
            <NavbarBrand>
            <div>
            ✍ HONE     {/*Custom logo to be added*/}
            </div>
            </NavbarBrand>
             <NavbarContent justify= "end">
                <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered = {true}
              as="button"
              className="transform-top-right"
              color="secondary"
              name="John Doe"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"   // Placeholder for avatar and icons...
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-10">
              <p className="font-semibold">username@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Account</DropdownItem>
            <DropdownItem key="system">Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
             </NavbarContent>
        </Navbar>
)
}