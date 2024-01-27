import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C',
    ];

    return buttons.map((button) => (
      <TouchableOpacity
        key={button}
        style={styles.button}
        onPress={() => handlePress(button)}
      >
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created by Shiva Pandey</Text>
        <Image
          source={require('./assets/shiva.png')} // Replace with the actual path to your small photo
          style={styles.footerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  display: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    fontSize: 24,
  },
  result: {
    padding: 10,
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flexBasis: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 24,
    color: 'red',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    marginRight: 10,
    fontSize: 12,
    color: '#777',
  },
  footerImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

export default CalculatorApp;
