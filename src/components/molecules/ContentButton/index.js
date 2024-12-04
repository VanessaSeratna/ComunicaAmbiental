import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { ContentButtonContainer } from './styles';
import { theme } from '~/styles/theme';
import { Text } from '~/components/atoms';

export const ContentButton = () => {
    return <ContentButtonContainer>
       <Ionicons 
                name="book-outline"
                size={theme.metrics.px(12)} 
                color={theme.colors.black} 
        />
        <Text fontFamily="semiBold" size={10} color="black">
            Saiba tudo sobre Saneamento Ambiental
        </Text>
    </ContentButtonContainer>

}