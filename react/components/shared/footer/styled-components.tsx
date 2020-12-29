import styled from 'styled-components';

export const Footer = styled.div `
    background-color: #131313;
    margin-top: 128px;
    padding-top: 32px;
    padding-bottom: 32px;
`

export const FooterHeading = styled.div `
    color: #ffffff;
    font-size: 24px;
    text-align: center;
`

export const FooterIcons = styled.div `
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

export const FooterIconsItem = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ffffff;
    width: 48px;
    height: 48px;
    margin-right: 12px;
    margin-left: 12px;
    cursor: pointer;
    transition: 
        opacity 0.25s,
        transform 0.25s;

    :hover {
        opacity: 0.5;
        transform: scale(1.1);
    }
`