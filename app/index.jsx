import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎊🪅🎉</Text>
      <Text style={styles.title}>Bem-vindo a Festa Julina do IFC</Text>
      <Text style={styles.subtitle}> Toque abaixo para ver nosso delicioso cardápio julino:
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/cardapio')}>
        <Text style={styles.buttonText}>Ver Cardápio 🍽️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSobre} onPress={() => router.push('/sobre')}>
        <Text style={styles.buttonText}>Sobre o Aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4E6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#D84315',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(216, 67, 21, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#5D4037',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 6,
    shadowColor: '#D84315',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#FFF8E1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonSobre: {
    backgroundColor: '#D84315',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 6,
    shadowColor: '#D84315',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginTop: 15,
  }
});
