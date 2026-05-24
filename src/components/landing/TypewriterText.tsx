import { useEffect, useState } from "react";

const WORDS = ["Crypto", "DeFi"];
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex];

    if (isDeleting) {
      if (text === "") {
        const id = setTimeout(() => {
          setWordIndex((i) => (i + 1) % WORDS.length);
          setIsDeleting(false);
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETING_SPEED);
      return () => clearTimeout(id);
    }

    if (text === current) {
      const id = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPING_SPEED);
    return () => clearTimeout(id);
  }, [text, isDeleting, wordIndex]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] animate-pulse bg-primary-glow align-middle" />
    </span>
  );
}
