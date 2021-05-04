import { FC } from "react";

const Title: FC = ({ children }) => {
  return (
    <h1 className="mt-4 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      {children}
    </h1>
  );
};

export default Title;
