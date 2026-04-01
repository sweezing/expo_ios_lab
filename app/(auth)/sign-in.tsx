import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { signInWithEmail } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Validation", "Please fill email and password.");
      return;
    }

    try {
      setIsSubmitting(true);
      await signInWithEmail(form.email.trim(), form.password);
      Alert.alert("Success", "Signed in successfully.");
      router.replace("/(tabs)" as any);
    } catch (e: any) {
      Alert.alert("Sign in failed", e?.message ?? "Unknown error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="w-full">
      <Text className="h3-bold text-dark-100">Sign In</Text>
      <Text className="body-regular text-gray-500 mt-2">
        Please enter your details to continue.
      </Text>

      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(email) => setForm((p) => ({ ...p, email }))}
        keyboardType="email-address"
        inputProps={{ autoComplete: "email" }}
      />

      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(password) => setForm((p) => ({ ...p, password }))}
        secureTextEntry
        inputProps={{ autoComplete: "password" }}
      />

      <View className="mt-6">
        <CustomButton
          title="Sign In"
          onPress={onSubmit}
          isLoading={isSubmitting}
        />
      </View>

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="body-regular text-gray-500">Don&apos;t have an account?</Text>
        <Link href={"/(auth)/sign-up" as any} className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
