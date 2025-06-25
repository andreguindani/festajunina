import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { comidas } from '../src/data/comida';
import { useRouter } from 'expo-router';

export default function Cardapio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Cardápio Junino 🎉</Text>
      <FlatList
        data={comidas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/detalhe/${item.id}`)}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
              <Text style={styles.ingredientesTitulo}>Ingredientes:</Text>
              {item.ingredientes.map((ing, index) => (
                <Text key={index} style={styles.ingrediente}>• {ing}</Text>
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF4E6' },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#D62828',
  },
  lista: { paddingHorizontal: 16 },
  card: {
    backgroundColor: '#FFE0B2',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imagem: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  info: { flex: 1 },
  nome: { fontSize: 20, fontWeight: '600', color: '#6D4C41' },
  preco: { fontSize: 16, color: '#4E342E', marginBottom: 4 },
  ingredientesTitulo: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
  ingrediente: { fontSize: 13, color: '#5D4037' },
});
