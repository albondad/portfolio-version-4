import React from 'react';
import * as styledComponents from './styled-components';
import * as sharedComponents from 'shared-components';

export const Skills = () => {
    return (
        <styledComponents.Skills id="skills">
            <styledComponents.SkillsHeading>Skills</styledComponents.SkillsHeading>
            <styledComponents.SkillsList>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        MongoDB
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        MongoDB
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        Express
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        Express
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-react'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        React
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-node'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        Node
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        jQuery
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        jQuery
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-bootstrap'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        Bootstrap
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-sass'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        Sass
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-javascript'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        JavaScript
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-html'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        HTML
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-css'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        CSS
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-git'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        Git
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-github'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        GitHub
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

                <styledComponents.SkillsListItem>
                    <styledComponents.SkillsListIcon>
                        <sharedComponents.Icon 
                            name='font-awesome-gitlab'
                            size={32}
                        />
                    </styledComponents.SkillsListIcon>
                    <styledComponents.SkillsListName>
                        GitLab
                    </styledComponents.SkillsListName>
                </styledComponents.SkillsListItem>

            </styledComponents.SkillsList>
        </styledComponents.Skills>
    )
};