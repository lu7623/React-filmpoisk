import { useRateMovieMutation } from '../api/services/filmpoiskAPI';
import { useMemo } from 'react';

export const useRateMovie = (id: string) => {
    const [handleRateMovie] = useRateMovieMutation();

    const initialRating = useMemo(() => {
        if (!id) {
            return 0;
        }

        const savedRatings = localStorage.getItem("ratings");
        const parsed = savedRatings ? JSON.parse(savedRatings) : 0;

        return parsed[id] as number ?? 0;
    }, [id]);

    const rateMovie = 
        (newRate: number) => {
           
            if (newRate === initialRating) {
                return null;
            }

            handleRateMovie({
                movieId: id,
                user_rate: newRate,
            });
        }
    return {initialRating, rateMovie};
};