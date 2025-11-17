import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ExperienciasScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Cabeçalho da seção */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Experiências</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Experiência 1 */}
        <Text style={styles.period}>&lt;&gt; Maio 2019 - Setembro 2019</Text>
        <Text style={styles.title}>Instrutor de Laboratório de Informática.</Text>
        <Text style={styles.company}>Microlins Juazeiro. &lt;/&gt;</Text>

        <View style={styles.divider} />

        {/* Experiência 2 */}
        <Text style={styles.period}>&lt;&gt; Agosto 2020 - Agosto 2022</Text>
        <Text style={styles.title}>Estágio Suporte Técnico.</Text>
        <Text style={styles.company}>
          Instituto Nacional do Seguro Social - INSS. &lt;/&gt;
        </Text>

        <View style={styles.divider} />

        {/* Experiência 3 */}
        <Text style={styles.period}>&lt;&gt; Fevereiro 2023 - Dezembro 2024</Text>
        <Text style={styles.title}>Suporte Técnico de Informática.</Text>
        <Text style={styles.company}>Mundial Impressoras. &lt;/&gt;</Text>

        <View style={styles.divider} />

        {/* Experiência 4 */}
        <Text style={styles.period}>{`{ Junho 2025 - Atual`}</Text>
        <Text style={styles.title}>Atendente de CallCenter.</Text>
        <Text style={styles.company}>AEC Centro de Contato S.A.}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4F1FF", // Azul claro inspirado no seu site
  },

  header: {
    width: "100%",
    backgroundColor: "#1A73E8", // Azul principal do seu projeto
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 40,
  },

  period: {
    color: "#1A73E8",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  company: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#D8E6FF",
    marginVertical: 10,
  },
});
