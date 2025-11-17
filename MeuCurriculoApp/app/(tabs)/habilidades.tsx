import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HabilidadesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Desenvolvimento</Text>
        <Text style={styles.cardText}>HTML, CSS, JavaScript, React, React Native, TypeScript, Expo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>UI / UX</Text>
        <Text style={styles.cardText}>Prototipagem, Design clean</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ferramentas</Text>
        <Text style={styles.cardText}>Figma, Git, GitHub, VSCode</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6ecff",
    paddingTop: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 20,
    color: "#033b6c",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#04407a",
  },

  cardText: {
    marginTop: 8,
    fontSize: 15,
    opacity: 0.8,
  },
});
