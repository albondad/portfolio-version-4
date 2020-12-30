import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, useLocation().pathname)

    return null;
}