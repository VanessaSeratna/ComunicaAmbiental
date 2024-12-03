import React from 'react';
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from './styles';
import { Text, Logo } from '~/components/atoms';
import { Tag, IconButton, ContentButton } from '~/components/molecules'
import { colors } from '~/styles/colors';

export const Hero = ({ item, onDetail }) => {
    const { image_url, title, subtitle, type } = item;
    return (
        <HeroContainer>
            <HeroImageBackground source={{
                uri: image_url,
                }} 
                >
                <HeroGradient colors={[colors.blue, 'transparent', colors.blue]} >
                    { !onDetail && <Logo size="small"/>}
                    <Tag mt={onDetail ? 224: 210}>{type}</Tag>
                    <Text fontFamily= "bold" size={26} mt={5}> {title} </Text>
                    <ButtonsView>
                        <IconButton label="Gostei" iconName="heart-circle-outline"/>
                        { !onDetail && (<ContentButton/>)}
                        { !onDetail && (
                            <IconButton label="Saiba mais" iconName="information-circle-outline"/>)}
                    </ButtonsView>
                </HeroGradient>
            </HeroImageBackground>    
        </HeroContainer>
    )
}