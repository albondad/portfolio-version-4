import React from 'react';
import { useHistory } from 'react-router-dom';
import * as styledComponents from './styled-components';
import * as constants from 'constants';

const component = () => {
    const history = useHistory();

    const projectListItemOnClick = (id) => {
        history.push(`project/${id}`)
    };

    const projectsWork = constants.projects.filter(project => project.type === 'work');
    const projectsVolunteer = constants.projects.filter(project => project.type === 'volunteer');

    return (
        <styledComponents.Projects id="projects">
            <styledComponents.ProjectsHeading>Work</styledComponents.ProjectsHeading>
            <styledComponents.ProjectsList>
                {
                    projectsWork.map(project => (
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
            <styledComponents.ProjectsHeading>Volunteer</styledComponents.ProjectsHeading>
            <styledComponents.ProjectsList>
                {
                    projectsVolunteer.map(project => (
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