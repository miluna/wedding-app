import { FC } from "react";
import classnames from "classnames";

interface ButtonProps {
  text: string;
  isLink?: boolean;
  link?: string;
  onClick?: Function;
  primary?: boolean;
  secondary?: boolean;
  size: "full" | "medium" | "small";
}

const Button: FC<ButtonProps> = ({
  text,
  isLink,
  link,
  onClick,
  primary,
  secondary,
  size,
}) => {
  const btn = (
    <div
      className={classnames(
        { "lg:w-full": size === "full" },
        { "lg:w-36 sm:w-full": size === "medium" },
        { "lg:w-24 sm:w-full": size === "small" },
        "cursor-pointer flex items-center justify-center border border-transparent text-base font-medium rounded-md lg:px-8 py-3 md:text-lg md:px-10 sm:px-10",
        {
          "text-black-700 bg-pink-100 hover:bg-pink-300":
            !primary && !secondary,
        },
        { "text-white bg-pink-400 hover:bg-pink-500": primary },
        { "text-black-700 bg-green-300 hover:bg-green-400": secondary }
      )}
    >
      {text}
    </div>
  );

  return (
    <div
      className="mt-3 sm:mt-0 sm:ml-3"
      onClick={() => (onClick ? onClick() : null)}
    >
      {isLink ? <a href={link}>{btn}</a> : btn}
    </div>
  );
};

export default Button;
