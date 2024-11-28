import React from 'react';
import { SplashScreen } from './src/screens/SplashScreen';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import { 
  useFonts, 
  SourceSansPro_400Regular, 
  SourceSansPro_600SemiBold, 
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { theme } from './src/styles'

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
      <SplashScreen />
    </ThemeProvider>
  );
}
