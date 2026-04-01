import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { signUpWithEmail } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Validation", "Please fill name, email and password.");
      return;
    }

    try {
      setIsSubmitting(true);
      await signUpWithEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });
      Alert.alert("Success", "Account created successfully.");
      router.replace("/(tabs)" as any);
    } catch (e: any) {
      Alert.alert("Sign up failed", e?.message ?? "Unknown error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="w-full">
      <Text className="h3-bold text-dark-100">Sign Up</Text>
      <Text className="body-regular text-gray-500 mt-2">
        Create an account to continue.
      </Text>

      <CustomInput
        label="Name"
        placeholder="Enter your name"
        value={form.name}
        onChangeText={(name) => setForm((p) => ({ ...p, name }))}
        inputProps={{ autoCapitalize: "words" }}
      />

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
        inputProps={{ autoComplete: "new-password" }}
      />

      <View className="mt-6">
        <CustomButton
          title="Sign Up"
          onPress={onSubmit}
          isLoading={isSubmitting}
        />
      </View>

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="body-regular text-gray-500">Already have an account?</Text>
        <Link href={"/(auth)/sign-in" as any} className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
