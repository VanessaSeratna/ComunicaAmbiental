import React from "react";
import { FlatList } from 'react-native';
import { Card } from '../../molecules';
import { Text } from '../../atoms';

const FAKE_DATA = [
    {
        id:0,
        image_url: 'https://catalogo.ipea.gov.br/uploads/thumb_10_5.png',
    },
    {
        id:1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0FFuh-W7O5wmXl-pNMluEOqzpkc2oe19Hg&s',
    },
]

export const HomeList = () => {
    return(
        <FlatList
            horizontal
            data={FAKE_DATA}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => String(item.id)}
        />
    )
}
