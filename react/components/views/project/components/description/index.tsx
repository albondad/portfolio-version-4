import React from 'react';
import * as styledComponents from './styled-components';

export const Description = (props) => {
    return (
        <styledComponents.Description>
            <styledComponents.DescriptionHeading>A Bit of Context</styledComponents.DescriptionHeading>
            <styledComponents.DescriptionBody>{props.context}</styledComponents.DescriptionBody>
            <styledComponents.DescriptionHeading>My Responsibilities</styledComponents.DescriptionHeading>
            <styledComponents.DescriptionBody>
                {
                    props.responsibilities.map((responsibility, index) => {
                        return (
                            <div key={index}>
                                <span>- </span>
                                <span>{responsibility}</span>
                            </div>
                        )
                    })
                }
            </styledComponents.DescriptionBody>
            <styledComponents.DescriptionHeading>Tools Used</styledComponents.DescriptionHeading>
            <styledComponents.DescriptionBody>
                {
                    props.tools.map((tool, index) => {
                        return (
                            <div key={index}>
                                <span>- </span>
                                <span>{tool}</span>
                            </div>
                        )
                    })
                }
            </styledComponents.DescriptionBody>
        </styledComponents.Description>
    )
};


Description.defaultProps = {
    context: `there's no context listed`,
    responsibilities: `there's no responsibilities listed`,
    technologies: `there's no technologies listed`
}