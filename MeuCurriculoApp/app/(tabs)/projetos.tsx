import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/theme';
import { router } from 'expo-router';

const projetos = [
  {
    id: 1,
    img: require('../assets/images/Foto-Projeto-starbucks.png'),
    title: 'Starbucks',
    url: "https://lazarobatista.github.io/Starbucks-page/"
  },
  {
    id: 2,
    img: require('../assets/images/Foto-Projeto-WeCare.png'),
    title: 'WeCare',
    url: "https://lazarobatista.github.io/WeCare-page/"
  },
  {
    id: 3,
    img: require('../assets/images/Foto-Projeto-EasyShopping.png'),
    title: 'EasyShopping',
    url: "https://lazarobatista.github.io/Easy-shopping/"
  },
  {
    id: 4,
    img: require('../assets/images/Foto-Projeto-conversor-moedas.png'),
    title: 'Conversor',
    url: "https://lazarobatista.github.io/Projeto-Conversor_de_moedas/"
  },
  {
    id: 5,
    img: require('../assets/images/Foto-Projeto-sorteio_random.png'),
    title: 'Sorteador',
    url: "https://lazarobatista.github.io/Project-Random/"
  },
  {
    id: 6,
    img: require('../assets/images/Foto-Projeto-TechStore.png'),
    title: 'TechStore',
    url: "https://lazarobatista.github.io/TechStore-Project/"
  },
];

export default function Projects() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      {projetos.map((p) => (
        <TouchableOpacity
          key={p.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/project/[id]",
              params: { id: String(p.id), url: p.url }
            })
          }
        >
          <Image source={p.img} style={styles.img} />
          <Text style={styles.cardTitle}>{p.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.light.background, padding: 20 },
  title: { color: '#00eaff', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  img: { width: '100%', height: 150, borderRadius: 8 },
  cardTitle: { color: '#fff', marginTop: 10, fontSize: 18, fontWeight: 'bold' },
});
