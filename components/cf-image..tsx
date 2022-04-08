import Image, {ImageLoader, ImageProps} from 'next/image';

const normalizeSrc = (src: string) => {
    return src.startsWith('/') ? src.slice(1) : src;
};

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
    if (!quality) {
        quality = 75
    }
    return `https://images.dankchat.workers.dev?width=${width}&quality=${quality}&image=https://dank.chat/${normalizeSrc(src)}`
};

export const CfImage = (props: ImageProps) => {
    if (process.env.NODE_ENV === 'development') {
        return <Image unoptimized={true} {...props} />
    }
    return (
        <Image {...props} loader={cloudflareLoader}/>
    );
};