import Image, {ImageLoader, ImageProps} from 'next/image';

const normalizeSrc = (src: string) => {
    return src.startsWith('/') ? src.slice(1) : src;
};

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
    const params = [`width=${width}`];
    if (quality) {
        params.push(`quality=${quality}`);
    }
    const paramsString = params.join(',');
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

export const CfImage = (props: ImageProps) => {
    if (process.env.NODE_ENV === 'development') {
        return <Image unoptimized={true} {...props} />
    }
    return (
        <Image {...props} loader={cloudflareLoader}/>
    );
};