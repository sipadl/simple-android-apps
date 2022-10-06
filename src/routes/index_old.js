import React from 'react'
import { Home, Mahasiswa, Tambah } from '../view'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CustomNavigation from '../components';


const Stack = createBottomTabNavigator();
const Tab = createNativeStackNavigator();

function MainRouter() {
  return (
    <Tab.Navigator tabBar={props => <CustomNavigation tabBar={props} />}
    screenOptions={{
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mahasiswa" component={Mahasiswa} />
      <Tab.Screen name="Tambah" component={Tambah} />
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <>
      <NavigationContainer
      screenOptions={
        {
        initialRouteName: 'Home'
      }}>
        <Stack.Navigator style={{padding:'10px'}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List" component={Mahasiswa} />
          <Stack.Screen name="Main" component={MainRouter} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MyStack;