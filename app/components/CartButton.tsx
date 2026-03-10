import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
    totalItems?: number;
    onPress?: () => void;
};

export default function CartButton({ totalItems = 3, onPress }: Props) {
    return (
        <TouchableOpacity className="cart-btn" activeOpacity={0.75} onPress={onPress}>
            <Ionicons name="cart-outline" size={20} color="white" />
            {totalItems > 0 ? (
                <View className="cart-badge">
                    <Text className="small-bold text-white">{totalItems}</Text>
                </View>
            ) : null}
        </TouchableOpacity>
    );
}
