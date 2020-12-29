import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import * as styledComponents from './styled-components';

export const NavigationBar = () => {
    const history = useHistory();

    const navigationBarBrandOnClick = () => {
        history.push('/')
    };

    const navigationBarLinksItemOnClick = (path) => {
        history.push(path);
    };

    return (
        <styledComponents.NavigationBar>
            <styledComponents.NavigationBarBrand onClick={navigationBarBrandOnClick}>
                AL BONDAD
            </styledComponents.NavigationBarBrand>
            <styledComponents.NavigationBarLinks>
                <Route path="/project">
                    <styledComponents.NavigationBarLinksItem onClick={() => navigationBarLinksItemOnClick('/')}>
                        Home
                    </styledComponents.NavigationBarLinksItem>
                </Route>
            </styledComponents.NavigationBarLinks>
        </styledComponents.NavigationBar>
    )
}