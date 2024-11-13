import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"; // Ensure you're using Headless UI or a similar library

const DropdownMenu = ({ contentPlaceholder, menuItems }) => {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold focus:outline-none">
        {contentPlaceholder}
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right text-white border border-style-decoration shadow-[2px_19px_8px_rgba(97,51,142,.01),1px_11px_7px_rgba(97,51,142,.02),0px_5px_5px_rgba(97,51,142,.03),0px_1px_3px_rgba(97,51,142,.04)] border-white/5 bg-white/5 p-2 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-10"
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <button className="group border-style-decoration flex w-full items-center gap-2 !border-0 hover:!border-1 py-2.5 px-4 data-[focus]:bg-white hover:text-black font-semibold text-sm lg:text-base">
              {item}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
