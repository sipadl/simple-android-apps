import React from 'react'
import { Home, Mahasiswa, Tambah } from '../view'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomNavigation } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainRouter() {
  return (
    <Tab.Navigator tabBar={props => <CustomNavigation {...props} />}
    screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List Mahasiswa" component={Mahasiswa} />
    </Tab.Navigator>
  )
}

function Router() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
          headerShown:false,
          initialRouteName: 'Mahasiswa'
        }}>
        <Stack.Screen name="Mahasiswa" component={Mahasiswa} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tambah" component={Tambah} />
        <Stack.Screen name="Main" 
        
        component={MainRouter} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Router;