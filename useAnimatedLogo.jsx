import { useEffect, useState } from "react";

// This function is the main function that animates the logo
export default function useAnimatedLogo() {
  // This line creates a "state" called `text` that starts with an empty value
  const [text, setText] = useState("");

  // This line creates a "state" called `iteration` that starts with the value 0
  const [iteration, setIteration] = useState(0);
  const logo = "This value is anmiated"

  // This line says that we want to run some code whenever `logo` or `text` changes
  useEffect(() => {

    // This line says that we want to run some code repeatedly, every 250 milliseconds
    const intervalId = setInterval(() => {

      // This line adds the next letter of `logo` to the current value of `text`
      setText((prev) => prev + logo[iteration % logo.length]);

      // This line increments the value of `iteration` by 1
      setIteration((prev) => prev + 1);

      // If the length of `text` is the same as the length of `logo`, we reset both `text` and `iteration`
      if (text.length === logo.length) {
        setText("");
        setIteration(0);
      }
    }, 250);

    // This code will be run when the component using this hook is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, [logo, text]);

  // This line returns the current value of `text`
  return text;
}
