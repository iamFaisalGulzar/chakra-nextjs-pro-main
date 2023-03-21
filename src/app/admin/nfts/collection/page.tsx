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
  Text,
  GridItem,
  Grid,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from '@chakra-ui/react';

import Card from 'components/card/Card';

export default function Collection() {
  return (
    <>
      <Grid
        pt={{ base: '180px', md: '80px', xl: '80px' }}
        h="auto"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={6} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              GDP & Components
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(5,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress size="60px" value={40} color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    fontSize={'11px'}
                    width="85px"
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Real GDP Total
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Investment
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={45} size="60px" color="#D7371C">
                    <CircularProgressLabel>45%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Exports Total
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#009150">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Balance of Trade Total
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Consumption Government
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Consumption Government
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Consumption Government
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Consumption Government
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Consumption Government
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Consumption Government
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={6} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Growth Enablers & Drivers
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(4,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={40} size="60px" color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Productivity
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Population
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={45} size="60px" color="#D7371C">
                    <CircularProgressLabel>45%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Local Content SHare
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#009150">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    RDI Spending
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Investor Confidence
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Economic Complexity Index
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Private sector contribution as % of Real GDP
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginY={'4px'}
              marginBottom={'22px'}
            >
              Employment
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(2,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={40} size="60px" color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Productivity
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Population
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={45} size="60px" color="#D7371C">
                    <CircularProgressLabel>45%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    display={'flex'}
                    alignItems={'end'}
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Local Content Share
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#009150">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    RDI Spending
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginY={'4px'}
              marginBottom={'22px'}
            >
              Fiscal Balance
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(3,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={40} size="60px" color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Productivity
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Population
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={45} size="60px" color="#D7371C">
                    <CircularProgressLabel>45%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    Local Content Share
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#009150">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    RDI Spending
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#009150">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    textAlign={'center'}
                    width="85px"
                    fontSize={'11px'}
                    fontWeight={'600'}
                    marginY={'4px'}
                  >
                    RDI Spending
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Income
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(2,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={40} size="60px" color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Productivity
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Population
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={45} size="60px" color="#D7371C">
                    <CircularProgressLabel>45%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Local Content SHare
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#009150">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    RDI Spending
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Debt
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(1,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={40} size="60px" color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Productivity
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Population
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Reserves
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(1,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={40} size="60px" color="#009150">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Productivity
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Population
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Monetary Stability
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(1,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={5} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Housing, Urban & Environment
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(4,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Infrastructure & Transport
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(2,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={3} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Livability & Lifestyle
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(3,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Education
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(3,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    KSA Universities in Top 200
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={45} size="60px" color="#D7371C">
                    <CircularProgressLabel>45%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Student Perf. in PISA
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Healthcare
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(2,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Card>
            <Text
              fontWeight={'600'}
              color={'#1E1E1E'}
              fontSize={'25px'}
              marginBottom={'22px'}
            >
              Security & Gov Effectiveness
            </Text>
            <Grid
              templateRows="repeat(auto, 1fr)"
              templateColumns="repeat(2,1fr)"
              flexDirection={'row'}
              justifyContent={'space-between'}
              gap={'20px'}
              padding={'10px'}
            >
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={75} size="60px" color="#FEB202">
                    <CircularProgressLabel>75%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Road Mortality
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="green">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                  <CircularProgress value={90} size="60px" color="#FEB202">
                    <CircularProgressLabel>90%</CircularProgressLabel>
                  </CircularProgress>
                  <Text textAlign={'center'} width="85px" fontSize={'11px'}>
                    Inflation
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}
