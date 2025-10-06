import { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Escribe algo" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default InputFocus;