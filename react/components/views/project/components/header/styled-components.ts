import styled, { keyframes } from 'styled-components';
import * as constants from 'constants';

const HeaderAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vw)
    }
`;

export const Header = styled.div `
    margin-top: 96px;
    padding-right: 25%;
    padding-left: 25%;
    animation: ${HeaderAnimation} 1s;
    animation-fill-mode: both;

    ${constants.mediaQueries.tabletMediaQuery} {
        padding-right: 10%;
        padding-left: 10%;
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        padding-right: 24px;
        padding-left: 24px;
    }
`

export const GoBack = styled.div `
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    fill: #aaaaaa;
    color: #aaaaaa;
    transition:
        fill 0.25s,
        color 0.25s,
        transform 0.25s;

    :hover {
        fill: #131313;
        color: #131313;
        transform: scale(1.05);
    }
`

export const GoBackText = styled.span `
    margin-left: 4px;
    font-size: 16px;
    color: inherit;
`

export const HeaderTitle = styled.div `
    margin-top: 20px;
    font-size: 28px;
    font-weight: 700;
    
    ${constants.mediaQueries.mobileMediaQuery} {
        text-align: center;
    }
`

export const HeaderRole = styled.div `
    font-size: 16px;
    font-weight: 400;
    margin-top: 8px;
    
    ${constants.mediaQueries.mobileMediaQuery} {
        text-align: center;
        font-size: 12px;
    }
`

export const HeaderTimeRange = styled.div `
    font-size: 16px;
    font-weight: 400;
    margin-top: 8px;
    
    ${constants.mediaQueries.mobileMediaQuery} {
        text-align: center;
        font-size: 12px;
    }
`