import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* FOTO + NOME + TÍTULO */}
      <View style={styles.header}>
        <Image 
          source={require("../assets/images/Foto-Lázaro.png")} 
          style={styles.profileImage}
        />

        <Text style={styles.name}>Lázaro Yoseph</Text>
        <Text style={styles.title}>Desenvolvedor Front-End</Text>
      </View>

      {/* SOBRE MIM */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.text}>
          Sou desenvolvedor que busca criar experiências web dinâmicas, modernas e responsivas.
          Tenho sólida base em HTML, CSS e JavaScript, e estou sempre buscando aprender novas
          tecnologias e evoluir como programador. Trago proatividade, adaptação e foco na entrega
          de soluções de qualidade.
        </Text>
      </View>

      {/* CONTATOS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contato</Text>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL("https://wa.me/5588996262734")}>
          <Ionicons name="logo-whatsapp" size={22} color={Colors.light.highlight} />
          <Text style={styles.contactText}>(88) 99626-2734</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL("mailto:lazaroyoseph5@gmail.com")}>
          <Ionicons name="mail" size={22} color={Colors.light.highlight} />
          <Text style={styles.contactText}>lazaroyoseph5@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL("https://github.com/LazaroBatista")}>
          <Ionicons name="logo-github" size={22} color={Colors.light.highlight} />
          <Text style={styles.contactText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL("https://linkedin.com/in/lazaro-yoseph")}>
          <Ionicons name="logo-linkedin" size={22} color={Colors.light.highlight} />
          <Text style={styles.contactText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 16,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: Colors.light.highlight,
    marginBottom: 14,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.light.text,
  },

  title: {
    fontSize: 16,
    color: Colors.light.icon,
    marginTop: 4,
  },

  card: {
    backgroundColor: Colors.light.card,
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.light.text,
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: Colors.light.text,
    lineHeight: 22,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },

  contactText: {
    fontSize: 16,
    color: Colors.light.text,
  },
});
