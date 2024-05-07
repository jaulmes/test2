import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../views/homeViews/HomeView';
import Tache from '../views/Taches/Tache';
import Login from '../views/Login';



const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen
            name="home"
            component={HomeView}
            options={{title: 'home'}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'login'}}
            />
        </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Routes;