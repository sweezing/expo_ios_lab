import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="webview"
                options={{
                    title: "Browser",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="globe-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cool"
                options={{
                    title: "Cool",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="happy-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
