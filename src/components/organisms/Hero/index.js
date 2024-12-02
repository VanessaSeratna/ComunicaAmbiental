import React from 'react';
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from './styles';
import { Text, Logo } from '~/components/atoms';
import { Tag, IconButton, ContentButton } from '~/components/molecules'
import { colors } from '~/styles/colors';

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroImageBackground source={{
                uri:'https://media.licdn.com/dms/image/v2/C4D12AQHGAAK52ZHA4A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520205377956?e=2147483647&v=beta&t=TeFyHljeAns62ZONmye059lGIVSvjm15jVhKvCTdK1M'
                }} 
                >
                <HeroGradient colors={[colors.blue, 'transparent', colors.blue]} >
                    <Logo size="small"/>
                    <Tag mt={210}>Conteúdo</Tag>
                    <Text fontFamily= "bold" size={26} mt={5}> Saneamento Ambiental </Text>
                    <ButtonsView>
                        <IconButton label="Gostei" iconName="heart-circle-outline"/>
                        <ContentButton/>
                        <IconButton label="Saiba mais" iconName="information-circle-outline"/>
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>    
        </HeroContainer>
    )
}