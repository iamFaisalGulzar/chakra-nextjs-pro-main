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
import { Box, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Balance from 'components/admin/dashboards/default/Balance';
import DailyTraffic from 'components/admin/dashboards/default/DailyTraffic';
import MostVisitedTable from 'components/admin/dashboards/default/MostVisitedTable';
import OverallRevenue from 'components/admin/dashboards/default/OverallRevenue';
import ProjectStatus from 'components/admin/dashboards/default/ProjectStatus';
import YourCard from 'components/admin/dashboards/default/YourCard';
import { VSeparator } from 'components/separator/Separator';
import YourTransfers from 'components/admin/dashboards/default/YourTransfers';
import tableDataMostVisited from 'variables/dashboards/default/tableDataMostVisited';
import ProfitEstimation from '../../../../components/admin/dashboards/default/ProfitEstimation';
import Card from 'components/card/Card';
import React from 'react';

export default function QualityToLive() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Flex direction="column" width="stretch">
        <Grid
          mb="20px"
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
          }}
          gap="100px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
            <OverallRevenue />
          </Flex>
        </Grid>
      </Flex>
      <Flex direction="column" width="stretch" paddingX={70}>
        <Grid
          mb="20px"
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
          }}
          gap="100px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex
            flex="true"
            flexDir="column"
            gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
          >
            <Card marginBottom={6} padding={2}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text fontSize={24} fontWeight={700} color="#2B3674">
                  Defination
                </Text>
              </div>
              <Text
                marginTop={6}
                width={510}
                fontWeight={400}
                fontSize={24}
                lineHeight="32px"
              >
                The share of the labor force that is without work but available
                for and seeking employment (Number of unemployed/Labor force)​
              </Text>
            </Card>
            <Card padding={2}>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text fontSize={24} fontWeight={700} color="#2B3674">
                  Performance trends (key)​
                </Text>
              </Box>
              <Text
                marginTop={6}
                width={510}
                fontWeight={400}
                fontSize={24}
                lineHeight="32px"
              >
                SMO provided: Saudi unemployment, experienced significant
                improvement, showing a decrease of 2.7% from 2020 to Q3 2022​
                Entity provided: …​​
              </Text>
            </Card>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}
