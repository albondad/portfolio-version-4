import React from 'react';
import { useHistory } from 'react-router-dom';
import * as styledComponents from './styled-components';
import * as sharedComponents from 'shared-components';

export const Header = (props) => {
    const history = useHistory();

    const goBackOnClick = () => {
        history.push(`/`)
    };

    return (
        <styledComponents.Header>
            <styledComponents.GoBack onClick={goBackOnClick}>
                <sharedComponents.Icon 
                    name='material-design-keyboard-backspace'
                    size='16'
                />
                <styledComponents.GoBackText>
                    Go Back
                </styledComponents.GoBackText>
            </styledComponents.GoBack>
            <styledComponents.HeaderTitle>{props.title}</styledComponents.HeaderTitle>
            <styledComponents.HeaderRole>{props.role}</styledComponents.HeaderRole>
            <styledComponents.HeaderTimeRange>{props.timeRange}</styledComponents.HeaderTimeRange>
        </styledComponents.Header>
    )
};