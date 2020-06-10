import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

const Button = ({ onPress, name }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    margin: 10,
    width: 100,
    height: 35,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    color: '#fa8072'
  }
})

export default Button
