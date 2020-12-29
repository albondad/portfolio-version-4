import styled, { keyframes } from 'styled-components';
import * as constants from 'constants';

const SkillsAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vw)
    }
`;

export const Skills = styled.div `
    margin-top: 128px;
    box-sizing: border-box;
    padding-right: 10%;
    padding-left: 10%;
    animation: ${SkillsAnimation} 1s;
    animation-fill-mode: both;
    animation-delay: 0.5s;
`

export const SkillsHeading = styled.div `
    font-size: 24px;
    font-weight: 700;

    ${constants.mediaQueries.mobileMediaQuery} {
        text-align: center;
    }
`

export const SkillsList = styled.div `
    display: flex;
    flex-wrap: wrap;

    ${constants.mediaQueries.mobileMediaQuery} {
        justify-content: center;
        margin-right: -20px;
    }
`

export const SkillsListItem = styled.div `
    margin-top: 20px;
    margin-right: 20px;
`

export const SkillsListIcon = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #131313;
    width: 64px;
    height: 64px;
    color: #ffffff;
    font-size: 8px;
    font-weight: 700;
    fill: #ffffff;
`

export const SkillsListName = styled.div `
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
`