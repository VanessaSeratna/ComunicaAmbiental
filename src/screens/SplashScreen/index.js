import React, {useEffect} from 'react';
import { Text, Logo, Container } from '../../components';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout (() => {
      navigation.navigate('Home')
    }, 1500)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo/>
      <Text fontFamily="regular" color="offwhite" >ComunicaAmbiental</Text>
    </Container>
  );
}