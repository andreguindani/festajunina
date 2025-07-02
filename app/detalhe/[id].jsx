import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { comidas } from '../../src/data/comida';
import { useState } from 'react';

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const comida = comidas.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Image source={comida.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{comida.nome}</Text>
      <Text style={styles.preco}>💰 R$ {comida.preco.toFixed(2)}</Text>
      <Text style={styles.titulo}>🥣 Ingredientes:</Text>
      {comida.ingredientes.map((ing, i) => (
        <Text key={i} style={styles.ingrediente}>• {ing}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF4E6' },
  imagem: { width: '100%', height: 220, borderRadius: 12, marginBottom: 16 },
  nome: { fontSize: 28, fontWeight: 'bold', color: '#8E44AD', marginBottom: 8 },
  preco: { fontSize: 20, marginBottom: 16, color: '#444' },
  titulo: { fontSize: 22, fontWeight: '600', marginBottom: 6, color: '#BF360C' },
  ingrediente: { fontSize: 16, color: '#555' },
  botao: { marginTop: 24 },
});
