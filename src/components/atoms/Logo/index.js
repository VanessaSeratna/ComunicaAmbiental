import React from 'react';
import { LogoImage } from './styles';
import logoImage from '../../../../assets/Logo1.png';

const sizes = {
    small: 40,
    large: 90,
}

export const Logo = ({size}) =>{
    return (
        <LogoImage source={logoImage} size= {sizes[size || 'large']} />
    )

};

