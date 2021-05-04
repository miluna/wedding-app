import classNames from "classnames";
import { useEffect, useState } from "react";
import TOPICS from "../topics";

const Toast = () => {
  const [text, setText] = useState("Guardado!!");
  const [isShowing, setShowing] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const subscription = TOPICS.TOAST_TOPIC.subscribe({
      next: (t) => {
        setText(`${t}`);
        setError(false);
        setShowing(true);
        setTimeout(() => setShowing(false), 3000);
      },
      error: (t) => {
        setText(t);
        setError(true);
        setShowing(true);
        setTimeout(() => setShowing(false), 3000);
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div
      id="toast"
      className={classNames(
        "absolute bottom-0 flex justify-center items-center xl:w-72 transition-all text-gray-800",
        { "xl:h-12": isShowing },
        { "xl:h-0": !isShowing },
        { "bg-red-600": isError },
        { "bg-green-400": !isError }
      )}
    >
      {text}
    </div>
  );
};

export default Toast;
