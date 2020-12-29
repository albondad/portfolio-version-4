import React from 'react';
import { 
    BrowserRouter,
    Route
} from 'react-router-dom';
import * as styledComponents from './styled-components';
import * as viewComponents from 'view-components';

const Application = () => {
    return (
        <BrowserRouter>
            <styledComponents.globalStyle></styledComponents.globalStyle>
            <Route path='/' exact>
                <viewComponents.Home></viewComponents.Home>
            </Route>
            <Route path='/project/:id' exact>
                <viewComponents.Project></viewComponents.Project>
            </Route>
        </BrowserRouter>
    )
}

export default Application;