import classNames from "classnames";
import { FC } from "react";
import "./input.css";

interface InputProps {
  id: string;
  type: "text" | "email" | "checkbox";
  value: string | true | false;
  placeholder: string;
  onTyping: Function;
}

const Input: FC<InputProps> = ({ id, placeholder, value, type, onTyping }) => {
  const onChangeFn = (e: any) => {
    onTyping(type === "checkbox" ? !value : e.target.value);
  };

  return (
    <div className="mt-4 h-16 input-component empty flex justify-between items-left">
      {type === "checkbox" ? placeholder : null}
      <input
        id={id}
        type={type}
        className={classNames(
          "border-gray-300 px-2 transition-all border-blue rounded-sm",
          { "h-full w-full": type !== "checkbox" },
          { "h-6 w-6": type === "checkbox" }
        )}
        onChange={onChangeFn}
        value={`${value}`}
        placeholder={placeholder}
        checked={value === true}
      />
    </div>
  );
};

export default Input;
