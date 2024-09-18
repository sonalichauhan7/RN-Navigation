import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/home';
import { Routes } from './route';
import Profile from '../screen/profile';
import Users from '../screen/users';
import GoogleMap from '../screen/googleMap';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const TabNavigator = () => {
    return <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={Routes.Home} component={Home} />
        <Tab.Screen name={Routes.Profile} component={Profile} />
        <Tab.Screen name={Routes.Users} component={Users} />
        <Tab.Screen name={Routes.GoogleMap} component={GoogleMap} />
    </Tab.Navigator>
}

const StackNavigator = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Profile} component={Profile} />
        <Stack.Screen name={Routes.Users} component={Users} />
        <Stack.Screen name={Routes.GoogleMap} component={GoogleMap} />
    </Stack.Navigator>
}

const DrawerNavigator = () => {
    return <Drawer.Navigator>
        <Drawer.Screen name="Tab" component={TabNavigator} />
        <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}

