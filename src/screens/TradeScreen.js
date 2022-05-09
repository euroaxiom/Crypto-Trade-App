import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'
import TransactionListCard from '../components/TransactionListCard'
import CoinTradeCard from '../components/CoinTradeCard'

export default function TradeScreen({ navigation, route }) {

  const {
    alias,
    name,
    image,
    transaction_history
  } = route.params

  return (
    <View style={styles.screen}>

      <Header
        navigation={() => navigation.goBack()}
      />

      <CoinTradeCard
        name={name}
        alias={alias}
        image={image}
      />

      <View style={styles.transactionCard}>
        <Text style={styles.transactionCardTitle}>Transaction History</Text>

        {
          transaction_history.map((item) => (
            <TransactionListCard
              key={item.id}
              type={item.type}
              alias={alias}
              date={item.date}
              qty={item.amount}
              coin={item.coin}
            />
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F5F7FB',
    flex: 1
  },
  transactionCard: {
    width: '97%',
    alignSelf: 'center',
    // borderColor:'red',
    // borderWidth:1,
    marginTop: 15,
    borderRadius: 6,
    backgroundColor: 'white',
    elevation: 7,
    marginBottom: 15
  },
  transactionCardTitle: {
    color: 'black',
    fontSize: 15,
    margin: 10,
    fontWeight: '800'
  }
})