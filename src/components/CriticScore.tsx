import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
