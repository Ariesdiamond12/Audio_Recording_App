import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <TouchableOpacity
      className={`bg-[#FF725E] rounded-xl min-h-[50px] px-6 justify-center items-center`}
    >
      <Text>CustomButton</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
