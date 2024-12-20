import 'react-native-gesture-handler'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  SourceSansPro_400Regular, 
  SourceSansPro_600SemiBold, 
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro';
import { theme } from './src/styles';
import { Routes } from './src/routers';
import { create } from "zustand";    

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular, 
    SourceSansPro_600SemiBold, 
    SourceSansPro_700Bold,
    SourceSansPro_900Black, 
  })
  
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>  
    </ThemeProvider>
  );
}