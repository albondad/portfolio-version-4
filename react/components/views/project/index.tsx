import React from 'react';
import { useParams } from 'react-router-dom';
import * as sharedComponents from 'shared-components';
import * as projectComponents from './components';
import * as styledComponents from './styled-components';
import * as constants from 'constants';

export const Project = () => {
    const params = useParams();
    const id = params.id;
    const projects = constants.projects;
    const project = projects.find(project => project.id === id);

    return (
        <>
            <sharedComponents.ScrollToTop />
            <sharedComponents.NavigationBar />
                <projectComponents.Header 
                    title={project.title}
                    role={project.role}
                    timeRange={project.timeRange}
                />
                <projectComponents.Gallery
                    images={project.images}
                />
                <projectComponents.Description
                    context={project.context}
                    responsibilities={project.responsibilities}
                    tools={project.tools}
                />
            <sharedComponents.Footer />
        </>
    )
};