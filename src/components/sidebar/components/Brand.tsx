'use client';
// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import logo from './images/logo.png';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <Image src={logo} alt="logo" width={230} height={141} quality={100} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
