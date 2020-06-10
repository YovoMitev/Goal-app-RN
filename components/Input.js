import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'

const Input = props => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleContainer: {
    marginHorizontal: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
    textAlign: 'center'
  }
})

export default Input
