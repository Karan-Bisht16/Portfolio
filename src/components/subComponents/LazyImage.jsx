import { useState, useEffect } from 'react';

const LazyImage = (props) => {
    const { initialSrc, finalSrc, alt, style } = props;
    const [imageSrc, setImageSrc] = useState(initialSrc);

    useEffect(() => {
        const img = new Image();
        img.src = finalSrc;
        img.onload = () => setImageSrc(finalSrc);
    }, [finalSrc]);

    return <img src={imageSrc} alt={alt} className={style} />;
};

export default LazyImage;