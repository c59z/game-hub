import { BsBullseye } from "react-icons/bs";
import { MdThumbUp } from "react-icons/md";
import { FaMeh } from "react-icons/fa";
import React from "react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: { src: React.ReactNode; alt: string } } = {
    3: { src: <FaMeh />, alt: "Meh" },
    4: { src: <MdThumbUp />, alt: "Recommend" },
    5: { src: <BsBullseye />, alt: "exceptional" },
  };
  const emoji = emojiMap[rating];
  if (!emoji) return null;

  return (
    <div style={{ width: "24px", height: "24px", marginTop: "1rem" }}>
      {emoji.src}
    </div>
  );
};

export default Emoji;
