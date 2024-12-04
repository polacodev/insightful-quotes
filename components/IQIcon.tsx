import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IQIconProps {
  iconName: "heart-dislike-outline" | "heart-outline" | "star-outline" | "share-social-outline";
  size?: number;
  color?: string;
};

const IQIcon = ({ iconName, size = 24, color = "black" }: IQIconProps) => {
  return (
    <Ionicons name={iconName} size={size} color={color} />
  );
};

export default IQIcon;
