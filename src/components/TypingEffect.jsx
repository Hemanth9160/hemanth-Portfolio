import { useState, useEffect } from "react" 
// Typing effect for hero subtitle
export function useTypingEffect(texts, speed = 150, pause = 1500) {
  const [index, setIndex] = useState(0) 
  const [subIndex, setSubIndex] = useState(0) 
  const [deleting, setDeleting] = useState(false) 
  const [blink, setBlink] = useState(true) 

  useEffect(() => {
    if (index === texts.length) return 

    if (
      !deleting &&
      subIndex === texts[index].length + 1
    ) {
      setTimeout(() => setDeleting(true), pause) 
      return 
    }
    if (deleting && subIndex === 0) {
      setDeleting(false) 
      setIndex((prev) => (prev + 1) % texts.length) 
      return 
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1)) 
    }, deleting ? speed / 2 : speed) 

    return () => clearTimeout(timeout) 
  }, [subIndex, deleting, index, texts, speed, pause]) 

  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev) 
    }, 500) 
    return () => clearInterval(timeout2) 
  }, []) 

  return {
    text: texts[index].substring(0, subIndex),
    blink,
  } 
}