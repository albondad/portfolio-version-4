import styled from 'styled-components';
import * as constants from 'constants';

export const NavigationBar = styled.div `
    display: flex;
    align-items: center;
    height: 64px;
    padding-right: 10%;
    padding-left: 10%;

    ${constants.mediaQueries.mobileMediaQuery} {
        box-sizing: border-box;
        padding-top: 16px;
        flex-direction: column;
    }
`

export const NavigationBarBrand = styled.div `
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`

export const NavigationBarLinks = styled.div `
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

    ${constants.mediaQueries.mobileMediaQuery} {
        display: none;
    }
`

export const NavigationBarLinksItem = styled.div `
    margin-left: 48px;
    cursor: pointer;
    transition:
        opacity 0.25s,
        trasnform 0.25s;

    :hover {
        opacity: 0.25s;
        transform: scale(1.05);
    }
`