import React, { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setInterval(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearInterval(timer);
  }, [value, delay]);
  return debouncedValue;
}
