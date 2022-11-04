// import React, { useState, useRef, useLayoutEffect } from 'react';
// import LoadingCard from 'src/components/LoadingCard/LoadingCard';
import lazyImg from 'src/assets/lazyloadImg.jpg';
import loadingImg from 'src/assets/loadingImg.jpg';
import useElementOnScreen from 'src/hooks/useElementOnScreen';

import './LazyImg.scss';
function LazyImg() {
    // const ref = useRef();
    // const [is, setIs] = useState();

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });

    return (
        <img
            className="img-lazy"
            ref={containerRef}
            src={isVisible ? lazyImg : ''}
            onError={(e) => (e.target.src = loadingImg)}
            alt="lazyImg"
        />
    );
}

export default LazyImg;
