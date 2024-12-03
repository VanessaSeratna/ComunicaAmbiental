import React from "react";
import { ScreenScrollContainer, HomeList, Hero } from "~/components"

const FAKE_DATA_CHARACTERES = [
    {
        id:0,
        image_url: 'https://catalogo.ipea.gov.br/uploads/thumb_10_5.png',
        title: 'PLANSAB',
        type: 'Conteúdo',
        subtitle: 'Plano Nacional de Saneamento Básico',
        description: 'O Plano Nacional de Saneamento Básico (PLANSAB) consiste no planejamento integrado do saneamento básico considerando seus quatro componentes: abastecimento de água potável, esgotamento sanitário, coleta de lixo e manejo de resíduos sólidos e drenagem e manejo das águas pluviais urbanas, e possui o horizonte de 20 anos (2014 a 2033). O Plansab foi aprovado pelo Decreto n° 8.141 de 20 de novembro de 2013 e pela Portaria Interministerial n° 571 de 05 de dezembro de 2013 e sua elaboração foi prevista na lei de diretrizes nacionais para o saneamento básico – Lei nº 11.445, regulamentada pelo Decreto nº 7.217 - Devendo ser avaliado anualmente e revisado a cada quatro anos.'
    },
    {
        id:1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0FFuh-W7O5wmXl-pNMluEOqzpkc2oe19Hg&s',
    },
]


export const Home = () => {
    return (
        <ScreenScrollContainer>
            <Hero item={{
                title: 'Saneamento Ambiental',
                type: 'Conteúdo',
                image_url: 
                    'https://media.licdn.com/dms/image/C4D12AQE7T4rYlsVFpg/article-cover_image-shrink_720_1280/0/1520970118567?e=2147483647&v=beta&t=OmX5rAhG6duD8DD4YWlJxSoe2s63hOPGyNbxv7BXU1A',
            }} />
            <HomeList title="Dados Informativos" data={FAKE_DATA_CHARACTERES} />
            <HomeList title="Processos Operacionais" data={FAKE_DATA_CHARACTERES} />
            <HomeList title="Arquivos Interessantes" data={FAKE_DATA_CHARACTERES} />
        </ScreenScrollContainer>
    )
         
}