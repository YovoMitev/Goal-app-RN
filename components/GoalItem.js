import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Card from './Card'
import { Ionicons } from '@expo/vector-icons'

const GoalItem = ({ style, item, handleCompleteGoal, handleDetailPress }) => {
  return (
    <Card style={style}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.starContainer}>
        <Ionicons name='ios-star' size={25} color={item.completed ? '#ffd700' : 'grey'} onPress={() => handleCompleteGoal && handleCompleteGoal(item.id)}/>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.detailBtnContainer} >
        <Button style={styles.btnStyle} title='Details' color='#fa8072' onPress={() => handleDetailPress(item)} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  detailBtnContainer: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  btnStyle: {
    width: '50%'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  title: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20
  },
  starContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15
  },
  description: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default GoalItem
