import { useState } from "react";
export function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.warn("localStorage error:", error);
            return initialValue;
        }
    });

    function updateStorage(value) {
        try {
            setData(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn("localStorage update error:", error);
        }
    }

    return [data, updateStorage];
}
