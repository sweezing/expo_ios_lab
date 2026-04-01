import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import cn from "clsx";

import type { CustomButtonProps } from "../../type";

export default function CustomButton({
  title = "Click Me",
  onPress,
  style,
  textStyle,
  leftIcon,
  isLoading = false,
  disabled = false,
}: CustomButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      className={cn("custom-btn", style, isDisabled && "opacity-60")}
    >
      {leftIcon ? <View className="mr-2">{leftIcon}</View> : null}

      <View className="flex-row items-center justify-center">
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className={cn("text-white paragraph-semibold", textStyle)}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

