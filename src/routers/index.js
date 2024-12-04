import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SplashScreen, Detail, SearchScreen, FavoriteScreen} from '../screens';
import { theme } from '~/styles/theme';

const routeIcons = {
  "Home": 'home-outline',
  "SearchScreen": 'search-outline',
  "FavoriteScreen": 'heart-outline',
}

const BottomRoute = () => {
    const Tab = createBottomTabNavigator()

    return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name={routeIcons[route.name]} size={size} color={color} />
            )
          },
        })}
      
        tabBarOptions={{
          activeTintColor: theme.colors.green,
          inactiveintColor: theme.colors.black,
      }}>
        <Tab.Screen name="Home" options={{headerShown: false,}} component={Home}/>
        <Tab.Screen name="SearchScreen" options={{headerShown: false, tabBarLabel: 'Pesquisar'}} component={SearchScreen}/>
        <Tab.Screen name="FavoriteScreen" options={{headerShown: false, tabBarLabel: 'Favoritos'}} component={FavoriteScreen}/>
      </Tab.Navigator>
    )
}

export const Routes = () => {
    const Stack = createStackNavigator()

  
  
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Splash" options={{headerShown: false,}} component={SplashScreen} />
          <Stack.Screen name="Home" options={{headerShown: false,}} component={BottomRoute}/>
          <Stack.Screen name="Detail" options={{headerShown: false,}} component={Detail}/>          
        </Stack.Navigator>
      </NavigationContainer>
    )  
}