import { MenuList, MenuButton, IconButton, Menu, MenuItem, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const HamburgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="ghost"
        color="#15172A"
        size={"lg"}
        _hover={{ bg: "#ff616e" }}
        _expanded={{ bg: "#ff616e" }}
      />
      <MenuList bgColor={"#15172A"} _hover={{ bg: "#232538" }}>
        <Link href="https://dodgelol.gg/">
          <MenuItem _hover={{ bg: "#232538" }} bgColor={"#15172A"} _focus={{ bg: "#15172A" }}>
            League Of Legends
          </MenuItem>
        </Link>
        <Link href="https://dodgelol.gg/valorant">
          <MenuItem _hover={{ bg: "#232538" }} bgColor={"#15172A"} _focus={{ bg: "#15172A" }}>
            Valorant
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
