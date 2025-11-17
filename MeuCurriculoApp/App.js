import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Linking,
} from "react-native";
import { resume } from "./data/resume";

export default function App() {
  const [selectedExp, setSelectedExp] = useState(null);

  const openURL = (url) => {
    Linking.canOpenURL(url).then((ok) => ok && Linking.openURL(url));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>

        {/* Foto + Nome + Título */}
        <View style={styles.header}>
          <Image source={resume.photo} style={styles.photo} />
          <Text style={styles.name}>{resume.fullName}</Text>
          <Text style={styles.title}>{resume.title}</Text>
        </View>

        {/* Sobre */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sobre</Text>
          <Text style={styles.text}>{resume.about}</Text>
        </View>

        {/* Experiências */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Experiências</Text>

          {resume.experiences.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.expItem}
              onPress={() => setSelectedExp(item)}
            >
              <View>
                <Text style={styles.expCompany}>{item.company}</Text>
                <Text style={styles.expRole}>{item.role}</Text>
              </View>
              <Text style={styles.expPeriod}>{item.period}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Formação */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Formação</Text>

          {resume.education.map((ed) => (
            <View key={ed.id} style={styles.eduItem}>
              <Text style={styles.eduCourse}>{ed.course}</Text>
              <Text style={styles.eduInstitution}>
                {ed.institution} — {ed.year}
              </Text>
            </View>
          ))}
        </View>

        {/* Habilidades */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Habilidades</Text>

          {resume.skills.map((sk) => (
            <View key={sk.id} style={styles.skillItem}>
              <Text style={styles.skillName}>{sk.name}</Text>

              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: `${sk.level}%` }]} />
              </View>

              <Text style={styles.skillLevel}>{sk.level}%</Text>
            </View>
          ))}
        </View>

        {/* Contatos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contatos</Text>

          <TouchableOpacity onPress={() => openURL(`mailto:${resume.contacts.email}`)}>
            <Text style={styles.link}>✉️ {resume.contacts.email}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL(`tel:${resume.contacts.phone}`)}>
            <Text style={styles.link}>📞 {resume.contacts.phone}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL(resume.contacts.linkedin)}>
            <Text style={styles.link}>🔗 LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL(resume.contacts.github)}>
            <Text style={styles.link}>💻 GitHub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* MODAL de Experiência */}
      <Modal visible={!!selectedExp} animationType="slide" onRequestClose={() => setSelectedExp(null)}>
        <View style={styles.modal}>
          {selectedExp && (
            <>
              <Text style={styles.modalTitle}>{selectedExp.company}</Text>
              <Text style={styles.modalRole}>{selectedExp.role}</Text>
              <Text style={styles.modalPeriod}>{selectedExp.period}</Text>
              <Text style={styles.modalText}>{selectedExp.description}</Text>
            </>
          )}

          <TouchableOpacity onPress={() => setSelectedExp(null)} style={styles.modalClose}>
            <Text style={styles.modalCloseText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  content: { padding: 16 },

  header: { alignItems: "center", marginBottom: 20 },
  photo: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 24, fontWeight: "bold", marginTop: 12 },
  title: { fontSize: 16, color: "#444" },

  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  text: { fontSize: 15, color: "#444" },

  expItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  expCompany: { fontWeight: "bold", fontSize: 16 },
  expRole: { color: "#666" },
  expPeriod: { marginTop: 2, fontSize: 12, color: "#999" },

  eduItem: { marginBottom: 10 },
  eduCourse: { fontSize: 16, fontWeight: "bold" },
  eduInstitution: { color: "#666" },

  skillItem: { marginBottom: 12 },
  skillName: { fontWeight: "bold" },
  progressBg: {
    backgroundColor: "#ddd",
    height: 8,
    borderRadius: 6,
    marginTop: 4,
  },
  progressFill: {
    backgroundColor: "#4caf50",
    height: 8,
    borderRadius: 6,
  },
  skillLevel: { fontSize: 12, color: "#555", marginTop: 2 },

  link: { fontSize: 15, color: "#1a73e8", marginVertical: 6 },

  modal: { flex: 1, padding: 20, justifyContent: "center" },
  modalTitle: { fontSize: 22, fontWeight: "bold" },
  modalRole: { fontSize: 18, marginTop: 8 },
  modalPeriod: { color: "#666", marginTop: 4 },
  modalText: { marginTop: 10, fontSize: 16 },

  modalClose: { marginTop: 20, alignSelf: "center" },
  modalCloseText: { fontSize: 16, color: "blue" },
});
