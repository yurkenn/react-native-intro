import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, View, Button, TouchableOpacity } from "react-native"

function MyCustomButton(props) {
  // props.title
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress} >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}


function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)

  }
  const handleDecrement = () => {
    setCount(count - 1)

  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('./assets/react.jpg')} style={styles.image} />
        <Text style={styles.text}>Counter: {count}</Text>
        <Text style={styles.subtitle}>
          Click Buttons to change the counter
        </Text>

        {/* <View style={styles.buttonContainer} >
          <Button title="Increment" />
          <Button title="Decrement" />
        </View> */}

        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { marginStart: 16 }]}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.buttonContainer}>
          <MyCustomButton title="Increment +" onPress={handleIncrement} />
          <MyCustomButton title="Decrement -" style={{ marginStart: 16, backgroundColor: 'pink' }} onPress={handleDecrement} />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 26,
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 20,
    color: 'black'
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1
  },
  container: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    marginTop: 16
  },
  image: {
    height: 180,
    borderRadius: 12,
  },
  subtitle: {
    fontSize: 20,
    color: 'grey',
    marginTop: 4
  }
});

export default App;