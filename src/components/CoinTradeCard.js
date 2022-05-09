import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function CoinTradeCard({ image, name, alias }) {
    return (
        <View style={styles.tradeCard}>
            <View style={styles.tradeCardHeader}>
                <Image
                    source={image}
                    style={{ width: 20, height: 20 }}
                />
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '800' }}>{name}</Text>
                    <Text style={{ color: 'gray', fontSize: 12, fontWeight: '600' }}>{alias}</Text>
                </View>
            </View>

            <Text style={styles.coinPrice}>13.90 {alias}</Text>

            <TouchableOpacity style={styles.walletButton}>
                <Text style={styles.walletButtonText}>Trade</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tradeCard: {
        width: '97%',
        alignSelf: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 6
    },
    tradeCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    },
    coinPrice: {
        color: '#030104',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 5,
        fontWeight: '700'
    },
    walletButton: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#36E3A0',
        marginVertical: 15
    },
    walletButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center'
    },
})