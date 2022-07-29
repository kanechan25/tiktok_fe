import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/img/images';
import styles from './Images.scss';

const Image = forwardRef(
    (
        {
            src = images.noImage,
            alt,
            className,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={classNames(styles.wrapperImg, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
