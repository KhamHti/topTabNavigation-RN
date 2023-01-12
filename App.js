import React from 'react';
import Contact from './Screens/Contact';
import Chat from './Screens/Chat';
import Home from './Screens/Home';
import Setting from './Screens/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Tab.Navigator style={{paddingTop: 40}} >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Chat' component={Chat} />
        <Tab.Screen name='Contact' component={Contact} />
        <Tab.Screen name='Setting' component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

