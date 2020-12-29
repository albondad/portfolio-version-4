import styled, { keyframes } from 'styled-components';
import * as constants from 'constants';

const DescriptionAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vh)
    }
`;

export const Description = styled.div `
    margin-top: 64px;
    padding-right: 25%;
    padding-left: 25%;
    animation: ${DescriptionAnimation} 1s;
    animation-fill-mode: both;
    animation-delay: 0.5s;

    ${constants.mediaQueries.tabletMediaQuery} {
        padding-right: 10%;
        padding-left: 10%;
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        padding-right: 24px;
        padding-left: 24px;
    }
`

export const DescriptionHeading = styled.div `
    margin-top: 32px;
    font-size: 16px;
    font-weight: 700;
`

export const DescriptionBody = styled.div `
    margin-top: 8px;
    font-size: 16px;
    line-height: 150%;
`