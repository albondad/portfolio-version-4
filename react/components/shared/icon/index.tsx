import React from 'react';
import * as styledComponents from './styled-components';
import * as constants from 'constants';
import { iconPaths } from '../../../../constants/icon-paths';

export const Icon = (props) => {
    return (
        <svg className='falskdjfsalkjasdfk'
            width={props.size} 
            height={props.size} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={constants.iconPaths[props.name]} fill={props.fill}/>
        </svg>
    )
}

Icon.defaultProps = {
    size: '24px',
    fill: 'inherit'
}