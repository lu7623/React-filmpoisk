import { useCallback, useRef } from 'react';

export default function useDebounce(onChange: Function, duration: number) {
  const timeoutRef = useRef<number | null>(null);
  const onEdit = useCallback(
    (val: React.ChangeEvent<HTMLInputElement>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => onChange(val), duration);
    },
    [duration, onChange]
  );
  return onEdit;
}
