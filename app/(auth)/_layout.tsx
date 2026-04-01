import { Slot } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

import { images } from "../../constants";

export default function _Layout() {
  const screenHeight = Dimensions.get("screen").height;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full relative" style={{ height: screenHeight / 2.25 }}>
          <ImageBackground
            source={images.loginGraphic}
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />

          <Image
            source={images.logo}
            className="self-center size-48 absolute -bottom-16 z-10"
            resizeMode="contain"
          />
        </View>

        <View className="px-6 pt-20 pb-10">
          <Slot />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
