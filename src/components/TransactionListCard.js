import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function TransactionListCard({
    type,
    coin,
    date,
    qty,
    alias
}) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    name='exchange'
                    color='#5C2DFC'
                    size={15}
                />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.coinName}>{type} {coin}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text style={styles.price}>{qty} {alias}</Text>
                <Icon
                    name='chevron-right'
                    color="gray"
                    size={12}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: { 
        flexDirection: 'row', 
        width: '90%', 
        alignSelf: 'center', 
        borderBottomColor: '#c5c6d0', 
        borderBottomWidth: 1, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 5, 
        marginBottom: 10, 
    },
    coinName: { 
        fontSize: 12, 
        color: 'black', 
        fontFamily: 'Roboto', 
        fontWeight: '800' 
    },
    date: { 
        fontSize: 10, 
        fontWeight: '400', 
        color: 'gray' 
    },
    price: { 
        color: 'black', 
        fontSize: 13, 
        fontWeight: '700', 
        marginRight: 10 
    }
})