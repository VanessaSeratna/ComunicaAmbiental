import styled from "styled-components/native";

export const ContentButtonContainer = styled.TouchableOpacity`
    display: block;
    flex-direction: flex;
    align-items: center;
    justify-content: center;
    margin: 32px auto;
    margin-top: 20px auto;
    height: ${({ theme }) => theme.metrics.px(30)}px;
    width: ${({ theme }) => theme.metrics.px(200)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    background-color: ${({ theme }) => theme.colors.offwhite};
`    