import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkModeSwitch = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      // position="fixed"
      // top="1rem"
      // right="1rem"
    />
  );
};

// import { useColorMode, Switch } from '@chakra-ui/react'

// export const DarkModeSwitch = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const isDark = colorMode === 'dark'
//   return (
//     <Switch
//       position="fixed"
//       top="1rem"
//       right="1rem"
//       color="green"
//       isChecked={isDark}
//       onChange={toggleColorMode}
//     />
//   )
// }
