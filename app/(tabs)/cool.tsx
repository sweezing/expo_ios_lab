import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CoolScreen() {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                <Text style={styles.buttonText}>Press me</Text>
            </TouchableOpacity>
            {visible && <Text style={styles.message}>you are cool</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    button: { backgroundColor: "#6200ee", padding: 16, borderRadius: 8 },
    buttonText: { color: "#fff", fontSize: 16 },
    message: { marginTop: 24, fontSize: 22, fontWeight: "bold" },
});
