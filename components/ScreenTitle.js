import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 20,
    marginBottom: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    color: '#e9967a',
    fontWeight: 'bold'
  }
})
