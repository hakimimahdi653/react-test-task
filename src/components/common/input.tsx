import React, { useCallback } from "react";

interface IProps {
  type: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
}

const Input: React.FC<IProps> = ({ onChange, value, label, ...rest }) => {
  const handle = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(target.value);
      }
    },
    [onChange]
  );

  return (
    <div className="w-full md:w-2/3 mt-7">
      <div className="flex justify-between">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          {label}
        </label>
      </div>
      <input
        onChange={handle}
        value={value}
        className="block rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...rest}
      />
    </div>
  );
};

export default Input;
