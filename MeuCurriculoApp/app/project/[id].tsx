import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '@/constants/theme';

const data = {
  1: { title: 'Starbucks', img: require('../assets/images/Foto-Projeto-starbucks.png'), desc: 'Página Starbucks responsiva.' },
  2: { title: 'WeCare', img: require('../assets/images/Foto-Projeto-WeCare.png'), desc: 'Projeto WeCare moderno.' },
  3: { title: 'EasyShopping', img: require('../assets/images/Foto-Projeto-EasyShopping.png'), desc: 'Landing page EasyShopping.' },
  4: { title: 'Conversor', img: require('../assets/images/Foto-Projeto-conversor-moedas.png'), desc: 'Conversor de moedas.' },
  5: { title: 'Sorteador', img: require('../assets/images/Foto-Projeto-sorteio_random.png'), desc: 'Gerador de números.' },
  6: { title: 'TechStore', img: require('../assets/images/Foto-Projeto-TechStore.png'), desc: 'Loja virtual TechStore.' },
};

export default function Projeto() {
  const { id } = useLocalSearchParams();

// converte em número com segurança
const parsedId = Array.isArray(id) ? Number(id[0]) : Number(id);

const projeto = data[parsedId as 1 | 2 | 3 | 4 | 5 | 6];


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{projeto.title}</Text>

      <Image source={projeto.img} style={styles.img} />

      <Text style={styles.desc}>{projeto.desc}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background, padding: 20 },
  title: { color: '#00eaff', fontSize: 26, fontWeight: 'bold' },
  img: { width: '100%', height: 250, borderRadius: 10, marginVertical: 20 },
  desc: { color: '#fff', fontSize: 16, lineHeight: 22 },
});
