import { useEffect, useState } from 'react'

const useMedia = (media: string) => {

    const [match, setMatch] = useState(false);

    useEffect(() => {

        const { matches } = window.matchMedia(media);
        const listener = () => setMatch(matches);
        listener();

        window.addEventListener('resize', listener);
        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [media]);

    return match;
}

export default useMedia