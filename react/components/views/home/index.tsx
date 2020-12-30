import React from 'react';
import * as sharedComponents from 'shared-components';
import * as homeComponents from './components'

const component = () => {
    return (
        <>
            <sharedComponents.ScrollToTop />
            <sharedComponents.NavigationBar />
            <homeComponents.Header/>
            <homeComponents.Projects/>
            <homeComponents.Skills/>
            <sharedComponents.Footer />
        </>
    )
};

export const Home = component;