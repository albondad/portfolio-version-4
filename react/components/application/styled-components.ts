import { createGlobalStyle } from 'styled-components';

export const globalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');

    * {
        font-family: 'Inter';
        color: #131313;
    }

    body {
        margin: 0;
    }
`