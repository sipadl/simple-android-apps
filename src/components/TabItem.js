import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Iconhome, IconhomeActive, Iconpromo, IconpromoActive } from '../assets/icon'


const TabItem = ({type, active, onLongPress, onPress}) => {
    const Icon = () => {
      if(type === 'Home'){
          return active ? <IconhomeActive /> : <Iconhome />
      }
      if(type === 'Mahasiswa'){
          return active ? <IconpromoActive /> : <Iconpromo />
      }
      return <Iconhome />
  }
  return (
  <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon />
    <Text style={styles.text(active)}>{type}</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: (active) => ({
        color: active ? 'blue' : 'black',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        // fontWeight: 'bold',
        marginTop: 4,
    }),
})

export default TabItem;