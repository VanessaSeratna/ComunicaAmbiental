import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SplashScreen, Detail} from '../screens'

export const Routes = () => {
    const Stack = createStackNavigator()
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" options={{headerShown: false,}} component={SplashScreen} />
          <Stack.Screen name="Home" options={{headerShown: false,}} component={Home}/>
          <Stack.Screen name="Detail" options={{headerShown: false,}} component={Detail}/>          
        </Stack.Navigator>
      </NavigationContainer>
    )  
}