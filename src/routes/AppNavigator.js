import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen'
import Dashboard from '../screens/Dashboard'
import CoinDetails from '../screens/CoinDetails';
import TradeScreen from '../screens/TradeScreen'

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
                <Stack.Screen name="CoinDetails" component={CoinDetails} options={{headerShown:false}}/>
                <Stack.Screen name="TradeScreen" component={TradeScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
     
  