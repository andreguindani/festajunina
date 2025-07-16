import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Cardápio Junino Digital 🍽️</Text>
      <Text style={styles.paragraph}>
        Projeto de um Cardápio de Festa Junina desenvolvido por André Guindani e Gabriel Coelho.
      </Text>
      <Text style={styles.paragraph}>
        Este projeto traz a alegria das festas juninas diretamente para o seu dispositivo, com um cardápio interativo de comidas típicas da temporada. 🍿🌽
      </Text>

      <Text style={styles.subtitle}>🚀 Descrição do Projeto</Text>
      <Text style={styles.paragraph}>
        O Cardápio Junino Digital é um aplicativo que apresenta uma lista de deliciosas comidas típicas de festa junina. O usuário pode navegar entre os pratos, visualizar os ingredientes e detalhes, e se deliciar com a temática festiva.
      </Text>

      <Text style={styles.subtitle}>👨‍💻 Desenvolvedores</Text>
      <Text style={styles.paragraph}>- André Guindani – Desenvolvimento 🛠️</Text>
      <Text style={styles.paragraph}>- Gabriel Coelho – Desenvolvimento 🛠️</Text>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#D84315',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#D84315',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: '#5D4037',
  },
});
