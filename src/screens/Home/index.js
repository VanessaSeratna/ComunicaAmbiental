import React, { useEffect } from "react";
import { ScreenScrollContainer, HomeList, Hero, InformationsData} from "~/components";
import { useGetData } from '~/services/hooks'

export const Home = () => {
    const { getInformations } = useGetData()

    const callGetInformations = async () => {
        const response = getInformations()
    }
    
    useEffect (() => {
        callGetInformations()
    }, [])

    return (
        <ScreenScrollContainer>
            <Hero item={{
                title: 'Comunica Ambiental',
                type: 'Conteúdo',
                image_url: 
                    'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-para-que-serve-o-licenciamento-ambiental-e-o-que-alterou-em-minas-gerais.jpg',
            }} />
            <HomeList title="Dados Informativos" data={InformationsData} description={InformationsData.id} />
        </ScreenScrollContainer>
    )
         
}