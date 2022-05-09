import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={navigation}
        >
          <Icon
            name='arrow-left'
            color="#050301"
            size={15}
          />
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Icon
          name='star'
          color="gold"
          size={20}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        flexDirection: 'row'
      },
      headerText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '800',
        marginLeft: 10
      },
})