import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function CoinWalletCard({onPress, name, alias}) {
    return (
        <View style={styles.walletCard}>
            <View style={styles.walletCardHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/bitcoin.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '800' }}>{name} Wallet</Text>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '600' }}>{alias}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '800' }}>456</Text>
                        <Text style={{ color: 'gray', fontSize: 11, fontWeight: '600', alignSelf: 'center' }}>{alias}</Text>
                    </View>
                    <Icon
                        name='chevron-right'
                        color="#c3c3c3"
                        size={15}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.walletButton} onPress={onPress}>
                <Text style={styles.walletButtonText}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    walletCard: {
        width: '97%',
        alignSelf: 'center',
        marginTop: 10,
        // borderColor:'purple',
        // borderWidth:1,
        borderRadius: 6,
        backgroundColor: 'white',
        elevation: 6
    },
    walletCardHeader: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        // borderColor:'red',
        // borderWidth:1,
        justifyContent: 'space-between',
        marginTop: 10
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