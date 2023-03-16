'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Circle,
} from '@chakra-ui/react';
import Link from 'components/link/Link';

// Custom components
import Banner from 'components/admin/nfts/marketplace/Banner';
import TableTopCreators from 'components/admin/nfts/marketplace/TableTopCreators';
import HistoryItem from 'components/admin/nfts/marketplace/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';

// Assets
import Nft1 from '/public/img/nfts/Nft1.png';
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft3 from '/public/img/nfts/Nft3.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import Avatar1 from '/public/img/avatars/avatar1.png';
import Avatar2 from '/public/img/avatars/avatar2.png';
import Avatar3 from '/public/img/avatars/avatar3.png';
import Avatar4 from '/public/img/avatars/avatar4.png';
import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import { PhoneIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import outOfTargetIcon from '/public/img/icons/outOfTargetIcon.png';
import targetIcon from '/public/img/icons/targetIcon.png';
import totalProjectsIcon from '/public/img/icons/totalProjectsIcon.png';

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(5, 1fr)', '2xl': '1fr' }}
        gap={{ base: '30px', xl: '40px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex
          flexDirection="column"
          // gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
        >
          <Flex marginY={'20px'} width={'max-content'} flexWrap={'wrap'}>
            <Card
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              width={'248px'}
              height={'97px'}
              marginRight={'20px'}
            >
              <Image src={targetIcon} alt="total Projects" />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'14px'}
                  color={'#A3AED0'}
                >
                  Meeting targets
                </Text>
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'24px'}
                  fontWeight={'700'}
                  color={'#009150'}
                >
                  08
                </Text>
              </Box>
            </Card>
            <Card
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              width={'248px'}
              height={'97px'}
              marginRight={'20px'}
            >
              <Image src={outOfTargetIcon} alt="total Projects" />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'14px'}
                  color={'#A3AED0'}
                >
                  Under-Performing
                </Text>
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'24px'}
                  fontWeight={'700'}
                  color={'#FEB202'}
                >
                  12
                </Text>
              </Box>
            </Card>
            <Card
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              width={'248px'}
              height={'97px'}
              marginRight={'20px'}
            >
              <Image src={totalProjectsIcon} alt="total Projects" />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'14px'}
                  color={'#A3AED0'}
                >
                  Significantly underPerforming
                </Text>
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'24px'}
                  fontWeight={'700'}
                  color={'#D7371C'}
                >
                  02
                </Text>
              </Box>
            </Card>
            <Card
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              width={'248px'}
              height={'97px'}
              marginRight={'20px'}
            >
              <Image src={totalProjectsIcon} alt="total Projects" />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'14px'}
                  color={'#A3AED0'}
                >
                  Unmeasurable
                </Text>
                <Text
                  display={'inline'}
                  width={'max-content'}
                  fontSize={'24px'}
                  fontWeight={'700'}
                  color={'#808080'}
                >
                  27
                </Text>
              </Box>
            </Card>
          </Flex>
          <Flex direction="column">
            <SimpleGrid
              columns={{ base: 1, md: 5 }}
              gap="20px"
              mb={{ base: '20px', xl: '0px' }}
            >
              <Card width={'300px'} height={'189px'}>
                <Flex justifyContent={'space-between'}>
                  <Flex flexDirection={'column'} textAlign="center">
                    <Text
                      fontSize={15}
                      fontWeight={600}
                      marginBottom="32px"
                      color={'#1E1E1E'}
                    >
                      Livability of citizen Cities
                    </Text>
                    <Text
                      fontWeight={700}
                      fontSize={60}
                      lineHeight="30px"
                      color={'#1E1E1E'}
                    >
                      60%
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize={16}
                      marginTop="32px"
                      color={'#A3AED0'}
                    >
                      Target(2022) : 65%
                    </Text>
                  </Flex>
                  <Flex flexDirection="column" textAlign={'center'}>
                    <Text>91%</Text>
                    <Box
                      width={'20px'}
                      height={'111px'}
                      backgroundColor={'lightgray'}
                      borderRadius={'40px'}
                      display={'flex'}
                      alignItems={'flex-end'}
                      overflow={'hidden'}
                    >
                      <Box
                        width={'100%'}
                        height={'91%'}
                        backgroundColor={'#009150'}
                      ></Box>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
              <Card width={'300px'} height={'189px'}>
                <Flex justifyContent={'space-between'}>
                  <Flex flexDirection={'column'} textAlign="center">
                    <Text
                      fontSize={15}
                      fontWeight={600}
                      marginBottom="32px"
                      color={'#1E1E1E'}
                    >
                      Human Dvpt Index
                    </Text>
                    <Text
                      fontWeight={700}
                      fontSize={60}
                      lineHeight="30px"
                      color={'#1E1E1E'}
                    >
                      60%
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize={16}
                      marginTop="32px"
                      color={'#A3AED0'}
                    >
                      Target(2022) : 65%
                    </Text>
                  </Flex>
                  <Flex flexDirection="column" textAlign={'center'}>
                    <Text>60%</Text>
                    <Box
                      width={'20px'}
                      height={'111px'}
                      backgroundColor={'lightgray'}
                      borderRadius={'40px'}
                      display={'flex'}
                      alignItems={'flex-end'}
                      overflow={'hidden'}
                    >
                      <Box
                        width={'100%'}
                        height={'60%'}
                        backgroundColor={'#FEB202'}
                      ></Box>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
              <Card width={'300px'} height={'189px'}>
                <Flex justifyContent={'space-between'}>
                  <Flex flexDirection={'column'} textAlign="center">
                    <Text
                      fontSize={15}
                      fontWeight={600}
                      marginBottom="32px"
                      color={'#1E1E1E'}
                    >
                      Overnight Visit
                    </Text>
                    <Text
                      fontWeight={700}
                      fontSize={60}
                      lineHeight="30px"
                      color={'#1E1E1E'}
                    >
                      20%
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize={16}
                      marginTop="32px"
                      color={'#A3AED0'}
                    >
                      Target(2022) : 65%
                    </Text>
                  </Flex>
                  <Flex flexDirection="column" textAlign={'center'}>
                    <Text>80%</Text>
                    <Box
                      width={'20px'}
                      height={'111px'}
                      backgroundColor={'lightgray'}
                      borderRadius={'40px'}
                      display={'flex'}
                      alignItems={'flex-end'}
                      overflow={'hidden'}
                    >
                      <Box
                        width={'100%'}
                        height={'80%'}
                        backgroundColor={'#009150'}
                      ></Box>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
              <Card width={'300px'} height={'189px'}>
                <Flex justifyContent={'space-between'}>
                  <Flex flexDirection={'column'} textAlign="center">
                    <Text
                      fontSize={15}
                      fontWeight={600}
                      marginBottom="32px"
                      color={'#1E1E1E'}
                    >
                      Unemployment Rate
                    </Text>
                    <Text
                      fontWeight={700}
                      fontSize={60}
                      lineHeight="30px"
                      color={'#1E1E1E'}
                    >
                      9.9%
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize={16}
                      marginTop="32px"
                      color={'#A3AED0'}
                    >
                      Target(2022) : 5%
                    </Text>
                  </Flex>
                  <Flex flexDirection="column" textAlign={'center'}>
                    <Text>85%</Text>
                    <Box
                      width={'20px'}
                      height={'111px'}
                      backgroundColor={'lightgray'}
                      borderRadius={'40px'}
                      display={'flex'}
                      alignItems={'flex-end'}
                      overflow={'hidden'}
                    >
                      <Box
                        width={'100%'}
                        height={'85%'}
                        backgroundColor={'#D7371C'}
                      ></Box>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
