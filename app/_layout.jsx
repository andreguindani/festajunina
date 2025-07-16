import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

function CustomHeader({ title }) {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function Layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerShown: true,
        header: () => {
          let title = '';
          if (route.name === 'index') return null; 
          else if (route.name === 'cardapio') title = '🍽️ Cardápio Junino';
          else if (route.name.startsWith('detalhe')) title = 'Detalhes da Comida';
          else if (route.name === 'sobre') title = 'Sobre o Aplicativo';


          return <CustomHeader title={title} />;
        },
      })}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#D84315',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: '#FFF8E1',
    fontSize: 22,
    fontWeight: 'bold',
    flexShrink: 1,  
  },
});
