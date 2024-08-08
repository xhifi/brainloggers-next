import { useState, useEffect } from "react";

/**
    * @param {string} key - The key to store the value in localStorage
    * @param {any} defaultValue - The default value to use if the key is not found in localStorage
    * @returns {[any, function]} A tuple containing the value and a function to set the value
    *
    * @description
    * This hook allows you to store a value in localStorage and keep it in sync with a state variable.
    * It is useful for persisting data across sessions or pages.
    *
    * @example
    * const [value, setValue] = useLocalStorage("myKey", "myDefaultValue");
    * 
    * console.log(value); // "myDefaultValue"
    * setValue("myNewValue");
    * console.log(value); // "myNewValue"

*/
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
