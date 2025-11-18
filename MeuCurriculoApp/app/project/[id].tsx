// app/project/[id].tsx

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProjectView() {
  const { id, url } = useLocalSearchParams();

  const realUrl = Array.isArray(url) ? url[0] : url;

  return (
    <View style={{ flex: 1 }}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Projeto {id}</Text>
      </View>

      {/* WebView */}
      <WebView 
        source={{ uri: realUrl }} 
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: "#1A73E8",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  }
});
