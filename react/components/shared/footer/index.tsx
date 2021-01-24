import React from 'react';
import { useHistory } from 'react-router-dom'
import * as sharedComponents from 'shared-components';
import * as styledComponents from './styled-components';

export const Footer = () => {
    const history = useHistory();

    const footerIconsItemOnClick = (path) => {
        window.open(path);
    };

    return (
        <styledComponents.Footer>
            <styledComponents.FooterHeading>
                Contact Me
            </styledComponents.FooterHeading>
            <styledComponents.FooterIcons>
                <styledComponents.FooterIconsItem onClick={() => footerIconsItemOnClick('https://www.linkedin.com/in/albondad/')}>
                    <sharedComponents.Icon 
                        size={24} 
                        name='font-awesome-linkedin'
                    />
                </styledComponents.FooterIconsItem>
                <styledComponents.FooterIconsItem onClick={() => footerIconsItemOnClick('https://www.github.com/albondad/')}>
                    <sharedComponents.Icon 
                        size={24} 
                        name='font-awesome-github'
                    />
                </styledComponents.FooterIconsItem>
            </styledComponents.FooterIcons>
            <styledComponents.FooterHeading>
                Resume
            </styledComponents.FooterHeading>
            <styledComponents.FooterIcons>
                <styledComponents.FooterIconsItem onClick={() => footerIconsItemOnClick('/resume.pdf')}>
                    <sharedComponents.Icon 
                        size={24} 
                        name='material-design-article'
                    />
                </styledComponents.FooterIconsItem>
            </styledComponents.FooterIcons>
        </styledComponents.Footer>
    )
}