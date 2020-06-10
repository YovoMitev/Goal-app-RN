import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ style, children }) => {
  return (
    <View style={{ ...styles.formContainer, ...style }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 2,
    borderRadius: 40,
    borderColor: '#fa8072',
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: '#f8f8ff',
    elevation: 10,
  }
})

export default Card
