import styled, { keyframes } from 'styled-components';
import * as constants from 'constants';

export const Header = styled.div `
    display: flex;
    flex-basis: 0;
    box-sizing: border-box;
    background-color: #131313;
    height: 384px;
    padding: 64px 10%;

    ${constants.mediaQueries.tabletMediaQuery} {
        align-items: center;
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        flex-direction: column;
        height: auto;
    }
`
const HeaderImageAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vw)
    }
`;

export const HeaderImage = styled.img `
    border-radius: 4px;
    background-color: white;
    height: 100%;
    filter: grayscale(100%);
    transition: filter 0.25s;
    animation: ${HeaderImageAnimation} 1s;

    :hover {
        filter: grayscale(0%);
    }

    ${constants.mediaQueries.tabletMediaQuery} {
        height: 70%;
    }
    
    ${constants.mediaQueries.mobileMediaQuery} {
        width: 100%;
        height: auto;
    }
`;

const HeaderDescriptionAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vw)
    }
`;

export const HeaderDescription = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    flex-grow: 1;
    max-width: 384px;
    animation: ${HeaderDescriptionAnimation} 1s;

    ${constants.mediaQueries.mobileMediaQuery} {
        margin-top: 20px;
        margin-left: 0px;
    }
`

export const HeaderDescriptionHeading = styled.div `
    color: #ffffff;
    margin-top: -7px;
    font-size: 32px;
    font-weight: 700;

    ${constants.mediaQueries.tabletMediaQuery} {
        font-size: 16px;
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        margin-top: 0px;
        margin-left: 0px;
        text-align: center;
    }
`

export const HeaderDescriptionHeadingLineBreak = styled.div `
    ${constants.mediaQueries.mobileMediaQuery} {
        display: none;
    }
`

export const HeaderDescriptionBody = styled.div `
    margin-top: 16px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    ${constants.mediaQueries.tabletMediaQuery} {
        font-size: 12px;
        margin-top: 8px;
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        text-align: center;
    }
`

export const HeaderSkills = styled.div `
    display: none;
    flex-direction: column;
    jutify-content: flex-end;
    flex-grow: 1;
`

export const HeaderSkillsItem = styled.div `
    font-size: 32px;
    text-align: right;
    color: #ffffff;
`