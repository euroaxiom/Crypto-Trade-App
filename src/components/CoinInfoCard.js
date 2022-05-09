import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CoinInfoCard({name}) {
    return (
        <View style={styles.infoCard}>
            <Text style={styles.infoHeader}>About {name}</Text>
            <Text style={styles.infoData}>
                {name} is a digital currency which operates free of any central control or the oversight of banks or governments. Instead it relies on peer-to-peer software and cryptography. A public ledger records all bitcoin transactions and copies are held on servers around the world.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoCard: {
        width: '97%',
        alignSelf: 'center',
        marginTop: 20,
        // borderColor:'purple',
        // borderWidth:1,
        borderRadius: 6,
        backgroundColor: 'white',
        elevation: 6
    },
    infoHeader: {
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 5,
        fontSize: 15,
        color: 'black',
        fontWeight: '700'
    },
    infoData: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        fontSize: 12,
        color: 'gray'
    },
})