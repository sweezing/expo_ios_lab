import { FlatList, Pressable, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "../../constants";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data={offers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <Pressable
                        android_ripple={{ color: "rgba(255,255,255,0.18)" }}
                        className={`offer-card ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                        style={{ backgroundColor: item.color }}
                    >
                        <View className="h-full w-1/2">
                            <Image source={item.image} className="size-full" resizeMode="contain" />
                        </View>
                        <View className={`offer-card_info ${index % 2 === 0 ? "items-start pl-6" : "items-end pr-6"}`}>
                            <Text
                                className="text-lg font-qs-bold text-white uppercase leading-6 max-w-[150px]"
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                style={{ textAlign: index % 2 === 0 ? "left" : "right" }}
                            >
                                {item.title}
                            </Text>
                        </View>
                    </Pressable>
                )}
                contentContainerStyle={{ padding: 12, paddingBottom: 24 }}
            />
        </SafeAreaView>
    );
}
