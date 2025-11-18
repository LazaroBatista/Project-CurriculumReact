import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MotiView } from "moti";

const hardSkills = [
  { name: "React Native", level: 30 },
  { name: "TypeScript", level: 30 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 40 },
];

const softSkills = [
  { name: "Comunicação", level: 95 },
  { name: "Trabalho em Equipe", level: 90 },
  { name: "Proatividade", level: 85 },
  { name: "Criatividade", level: 80 },
];

export default function Skills() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>

      <Text style={styles.section}>Skills Técnicas</Text>
      {hardSkills.map((skill, index) => (
        <View key={index} style={styles.skillCard}>
          <Text style={styles.skillName}>{skill.name}</Text>

          <View style={styles.progressBarBackground}>
            <MotiView
              from={{ width: "0%" }}
              animate={{ width: `${skill.level}%` }}
              transition={{ type: "spring", delay: index * 150 }}
              style={styles.progressBarFill}
            />
          </View>

          <Text style={styles.percent}>{skill.level}%</Text>
        </View>
      ))}

      <Text style={styles.section}>Soft Skills</Text>
      {softSkills.map((skill, index) => (
        <View key={index} style={styles.skillCard}>
          <Text style={styles.skillName}>{skill.name}</Text>

          <View style={styles.progressBarBackground}>
            <MotiView
              from={{ width: "0%" }}
              animate={{ width: `${skill.level}%` }}
              transition={{ type: "spring", delay: index * 150 }}
              style={[styles.progressBarFill, { backgroundColor: "#5D8BF4" }]}
            />
          </View>

          <Text style={styles.percent}>{skill.level}%</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  backgroundColor: "#E4F1FF", // azul claro igual Experiências
},
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  section: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  skillCard: {
    marginBottom: 20,
  },
  skillName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  progressBarBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#3B82F6",
  },
  percent: {
    marginTop: 4,
    fontSize: 14,
    color: "#838282ff",
  },
});
