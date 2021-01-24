import styled, { keyframes } from 'styled-components';
import * as constants from 'constants';

const ProjectsAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vh)
    }
`;

export const Projects = styled.div `
    box-sizing: border-box;
    margin-top: 64px;
    padding-right: 10%;
    padding-left: 10%;
    animation: ${ProjectsAnimation} 1s;
    animation-fill-mode: both;
    animation-delay: 0.25s;
`

export const ProjectsHeading = styled.div `
    font-size: 24px;
    font-weight: 700;

    ${constants.mediaQueries.mobileMediaQuery} {
       text-align: center;
    }

    :not(:first-of-type) {
        margin-top: 64px;
    }
`

export const ProjectsList = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;
`

export const ProjectsListItem = styled.div `
    box-sizing: border-box;
    width: calc(100%/4);
    padding: 20px 12px 0px;
    display: block;

    ${constants.mediaQueries.tabletMediaQuery} {
        width: calc(100%/2);
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        width: calc(100%);
    }
`

export const ProjectsListItemThumbnail = styled.div `
    position: relative;
    border-radius: 4px;
    background-color: #cccccc;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-top: 56.25%;
    cursor: pointer;
    filter: grayscale(70%);
    transition: 
        transform 0.25s,
        filter 0.25s
    ;

    :hover {
        transform: scale(1.03);
        filter: grayscale(0%);
    }
`
export const ProjectsListItemTitle = styled.div `
    margin-top: 12px;
    font-size: 16px;
    font-weight: 700;
`
export const ProjectsListItemPosition = styled.div `
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
`
export const ProjectsListItemDate = styled.div `
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
`