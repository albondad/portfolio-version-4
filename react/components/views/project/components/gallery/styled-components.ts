import styled, { keyframes } from 'styled-components';
import * as constants from 'constants';

const GalleryAnimation = keyframes `
    from {
        transform: translateX(-100vw)
    }
    to {
        transform: translateX(0vw)
    }
`;

export const Gallery = styled.div `
    margin-top: 16px;
    padding-right: 25%;
    padding-left: 25%;
    animation: ${GalleryAnimation} 1s;
    animation-fill-mode: both;
    animation-delay: 0.25s;

    ${constants.mediaQueries.tabletMediaQuery} {
        padding-right: 10%;
        padding-left: 10%;
    }

    ${constants.mediaQueries.mobileMediaQuery} {
        padding-right: 24px;
        padding-left: 24px;
    }
`

export const GalleryMain = styled.div `
    border-radius: 4px;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center;    
    width: 100%;
    padding-top: 56.25%;
`

export const GalleryThumbnails = styled.div `
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const GalleryThumbnailsItem = styled.div `
    position: relative;
    margin: 10px 5px 0px;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center;
    width: calc(100% / 7);
    padding-bottom: calc(100% / 7 * 0.5625);
    cursor: pointer;
    transition: transform 0.25s;

    :hover {
        transform: scale(1.05);
    }

    :after {
        position: absolute;
        display: block;
        background-color: #131313;
        width: 100%;
        height: 100%;
        content: "";
        opacity: 0;
        transition: opacity 0.25s;
    }

    :hover:after {
        position: absolute;
        display: block;
        background-color: #131313;
        width: 100%;
        height: 100%;
        content: "";
        opacity: 0.5;
    }

    ${constants.mediaQueries.tabletMediaQuery} {
        width: calc(100% / 5);
        padding-bottom: calc(100% / 5 * 0.5625);
    }
`