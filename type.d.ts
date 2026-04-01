import type React from "react";
import type { KeyboardTypeOptions, TextInputProps } from "react-native";

export type CustomInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  inputProps?: Omit<TextInputProps, "value" | "onChangeText" | "placeholder">;
};

export type CustomButtonProps = {
  title?: string;
  onPress?: () => void;
  style?: string;
  textStyle?: string;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
};

