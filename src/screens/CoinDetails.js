import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

import { LineChart } from 'react-native-chart-kit'

import Header from '../components/Header'
import TransactionListCard from '../components/TransactionListCard'
import CoinInfoCard from '../components/CoinInfoCard'
import CoinWalletCard from '../components/CoinWalletCard'

export default function CoinDetails({ navigation, route }) {

  const DATA = route.params.item

  const {
    alias,
    name,
    image,
    totals,
    update,
    wallet,
    transaction_history
  } = DATA


  const [minuteButton, setMinuteButton] = useState(true)
  const [hourButton, setHourButton] = useState(false)
  const [dayButton, setDayButton] = useState(false)
  const [monthButton, setMonthButton] = useState(false)

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0.3) => `rgba(192,192,192, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional,
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: minuteButton ? [20, 45, 28, 80, 99, 43] :
          hourButton ? [34, 8, 47, 92, 91, 50] :
          dayButton ? [4, 21, 67, 56, 34, 80] : [78, 45, 34, 50, 55, 45],
        color: (opacity = 1) => `rgba(113,73,244, ${opacity})`, // optional
        strokeWidth: 5 // optional
      }
    ],
  };

  const changeChartHandler = (id) => {
    console.log(id)
    switch (id) {
      case 1:
        setHourButton(false)
        setMinuteButton(true)
        setDayButton(false)
        setMonthButton(false)
        break;
      case 2:
        setHourButton(true)
        setMinuteButton(false)
        setDayButton(false)
        setMonthButton(false)
        break;
      case 3:
        setHourButton(false)
        setMinuteButton(false)
        setDayButton(true)
        setMonthButton(false)
        break;
      case 4:
        setHourButton(false)
        setMinuteButton(false)
        setDayButton(false)
        setMonthButton(true)
        break;

    }

  }


  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <Header
        navigation={() => navigation.goBack()}
      />

      <View style={styles.chartCard}>
        <View style={styles.chartCardHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={image}
              style={{ width: 15, height: 15 }}
            />
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '800' }}>{name}</Text>
              <Text style={{ color: 'gray', fontSize: 11, fontWeight: '600' }}>{alias}</Text>
            </View>
          </View>

          <View>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: '800' }}>$ {totals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            {
              update >= 0 ?
                <Text style={{ color: 'green', fontSize: 13, fontWeight: '600', alignSelf: 'center' }}> + {update}</Text>
                :
                <Text style={{ color: 'red', fontSize: 13, fontWeight: '600', alignSelf: 'center' }}> - {update}</Text>
            }

          </View>

        </View>
        <LineChart
          data={data}
          width={430}
          height={200}
          chartConfig={chartConfig}
          withShadow={false}
        />
        <View style={styles.chartCardFooter}>
          <TouchableOpacity
            style={[styles.chartButton, { backgroundColor: minuteButton ? '#6E47F6' : '#FEFDFF' }]}
            onPress={() => changeChartHandler(1)}
          >
            <Text style={[styles.chartButtonText, { color: minuteButton ? 'white' : 'gray' }]}>Minute</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chartButton, { backgroundColor: hourButton ? '#6E47F6' : '#FEFDFF' }]}
            onPress={() => changeChartHandler(2)}
          >
            <Text style={[styles.chartButtonText, { color: hourButton ? 'white' : 'gray' }]}>Hour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chartButton, { backgroundColor: dayButton ? '#6E47F6' : '#FEFDFF' }]}
            onPress={() => changeChartHandler(3)}
          >
            <Text style={[styles.chartButtonText, { color: dayButton ? 'white' : 'gray' }]}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chartButton, { backgroundColor: monthButton ? '#6E47F6' : '#FEFDFF' }]}
            onPress={() => changeChartHandler(4)}
          >
            <Text style={[styles.chartButtonText, { color: monthButton ? 'white' : 'gray' }]}>Month</Text>
          </TouchableOpacity>
        </View>
      </View>


      <CoinWalletCard
        onPress={() => navigation.navigate('TradeScreen', DATA)}
        name={name}
        alias={alias}
      />
      <CoinInfoCard
        name={name}
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

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F5F7FB',
    flex: 1
  },
  chartCard: {
    width: '97%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    elevation: 9,
    borderRadius: 9
  },
  chartCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
    marginTop: 5
  },
  chartButton: {
    width: '20%',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 0.5,
    alignItems: 'center',
    padding: 5
  },
  chartButtonText: {
    fontSize: 13,
    alignSelf: 'center'
  },
  chartCardFooter: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 5
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
    marginBottom:20
  },
  transactionCardTitle: {
    color: 'black',
    fontSize: 15,
    margin: 10,
    fontWeight: '800'
  }
})