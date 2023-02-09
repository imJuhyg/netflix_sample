import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => { // 일정시간(delay) 뒤에 로직 실행
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler); // setTimeout 취소
        };
    }, [value, delay]);

    return debounceValue;
}