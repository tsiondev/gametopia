import bullesEye from "../assets/bulleseye.png";
import thumbsUp from "../assets/tumbsup.png";
import meh from "../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "20px" },
    5: { src: bullesEye, alt: "Exeptional", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
