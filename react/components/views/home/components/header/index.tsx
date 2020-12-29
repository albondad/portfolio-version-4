import React from 'react';
import * as styledComponents from './styled-components';

export const Header = () => {
    return (
        <styledComponents.Header>
            <styledComponents.HeaderImage src='/images/profile-pic.png' />
            <styledComponents.HeaderDescription>
                <styledComponents.HeaderDescriptionHeading>
                    WEB <styledComponents.HeaderDescriptionHeadingLineBreak /> DEVELOPER
                </styledComponents.HeaderDescriptionHeading>
                <styledComponents.HeaderDescriptionBody>Hi there, thanks for dropping by! A little bit about me, I’m a web developer based in Illinois with about a year’s experience. I’ve worked with a couple startups and organizations as a contracted developer, and would be looking forward to working with you!</styledComponents.HeaderDescriptionBody>
            </styledComponents.HeaderDescription>
        </styledComponents.Header>
    )
};
