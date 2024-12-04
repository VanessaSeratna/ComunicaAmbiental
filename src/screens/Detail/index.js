import React from "react";
import { ScreenScrollContainer, Hero, GoBack, Text } from '~/components';
import { InformationsData } from '~/components/organisms/Informations/DadosInformativos';
import { useDataStore } from '~/services/stores/dataStore';

export const Detail = () => {
    const { selectedData } = useDataStore();

    // Localiza o dado correspondente no array com base no id ou outra chave
    const infoItem = InformationsData.find(item => item.id === selectedData?.id);

    return (
        <ScreenScrollContainer>
            <Hero item={selectedData} onDetail={true} />
            <Text ml={24} fontFamily="black" size={18}>
                Descrição
            </Text>
            {/* Verifica se infoItem foi encontrado antes de acessar suas propriedades */}
            <Text lh={20} mt={12} ml={24} mr={24} size={16}>
                {infoItem ? infoItem.description : "Informação não encontrada"}
            </Text>
            <GoBack />
        </ScreenScrollContainer>
    );
};
