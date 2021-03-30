import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  function handleSubmit() {
    const imc = weight / ((height/100) ** 2)
    
    if (imc < 18.5){
      alert('IMC = ' + imc.toFixed(2) + ' - Baixo peso')
    }
    else if (imc >= 18.5 && imc < 25){
      alert('IMC = ' + imc.toFixed(2) + ' - Peso normal')
    }
    else if (imc >= 25 && imc < 30){
      alert('IMC = ' + imc.toFixed(2) + ' - Excesso de peso')
    }
    else if (imc >= 30 && imc < 35){
      alert('IMC = ' + imc.toFixed(2) + ' - Obesidade de Classe 1')
    }
    else if (imc >= 35 && imc < 40){
      alert('IMC = ' + imc.toFixed(2) + ' - Obesidade de Classe 2')
    }
    else if (imc >= 40){
      alert('IMC = ' + imc.toFixed(2) + ' - Obesidade de Classe 3')
    }
    else {
      alert('Insira números válidos!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule o seu IMC</Text>

      <TextInput 
        style={styles.input}
        value={weight}
        onChangeText={ weight => setWeight(weight) }
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input}
        value={height}
        onChangeText={ height => setHeight(height) }
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
        >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#333333',
  },
  input: {
    borderColor: '#424242',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#222',
    fontSize: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 25,
  }

});
