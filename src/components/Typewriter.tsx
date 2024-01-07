import { useEffect, useState } from "react";

const Typewriter = ({
  text,
  delay,
  infinite,
}: {
  text: string;
  delay: number;
  infinite: boolean;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex <= text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevLetter) => prevLetter + text[currentTextIndex]);
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
    if (currentTextIndex > text.length && infinite) {
      setCurrentText("");
      setCurrentTextIndex(0);
    }
  }, [text, delay, currentTextIndex, infinite]);

  return <div>{currentText}</div>;
};

export default Typewriter;
