import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WebViewScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView source={{ uri: "http://109.229.174.101:55647/qfxGLIK5IU1moXCWqm" }} />
        </SafeAreaView>
    );
}
