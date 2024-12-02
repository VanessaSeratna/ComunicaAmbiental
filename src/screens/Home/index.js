import React from "react";
import { Container, HomeList, Hero } from "../../components"

export const Home = () => {
    return (
        <Container align="flex-start" justify="flex-start">
            <Hero />
            <HomeList />
        </Container>
    )
         
}