import React, { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const store = window.localStorage
    const [storedValue, setStoredValue] = useState(() => {
      const item = store.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setToStored = function (value) {
      setStoredValue(value);
      store.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setToStored];
  };

export const useDarkMode = () => {
    const [storedValue, setStoredValue] = useLocalStorage('darkModeStatus')

    useEffect(() => {
        const body = document.querySelector('body')
        if(storedValue === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    })

    return [storedValue, setStoredValue]
}