import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
      <Button title="Sign In" onPress={() => router.push('/sign-in' as any)} />
    </SafeAreaView>
  );
};

export default SignUp;
