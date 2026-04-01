import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import cn from "clsx";

import type { CustomInputProps } from "../../type";

export default function CustomInput({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  inputProps,
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="w-full mt-4">
      <Text className="label">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "input",
          isFocused ? "border-primary" : "border-gray-300",
        )}
        {...inputProps}
      />
    </View>
  );
}

