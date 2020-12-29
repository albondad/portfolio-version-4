import React from 'react';
import { useHistory } from 'react-router-dom';
import * as styledComponents from './styled-components';
import * as constants from 'constants';

const component = () => {
    const history = useHistory();

    const projectListItemOnClick = (id) => {
        history.push(`project/${id}`)
    };

    return (
        <styledComponents.Projects id="projects">
            <styledComponents.ProjectsHeading>Projects</styledComponents.ProjectsHeading>
            <styledComponents.ProjectsList>
                {
                    constants.projects.map(project => (
                        <styledComponents.ProjectsListItem key={project.id}>
                            <styledComponents.ProjectsListItemThumbnail 
                                image={project.images[0]}
                                onClick={() => projectListItemOnClick(project.id)}
                            />
                            <styledComponents.ProjectsListItemTitle>{project.title}</styledComponents.ProjectsListItemTitle>
                            <styledComponents.ProjectsListItemPosition>{project.role}</styledComponents.ProjectsListItemPosition>
                            <styledComponents.ProjectsListItemDate>{project.timeRange}</styledComponents.ProjectsListItemDate>
                        </styledComponents.ProjectsListItem>
                    ))
                }
            </styledComponents.ProjectsList>
        </styledComponents.Projects>
    )
};

export const Projects = component;