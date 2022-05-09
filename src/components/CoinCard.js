import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function CoinCard({
    image,
    name,
    alias,
    price,
    percentage,
    onPress
}) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image
                    style={{height:15,width:15}}
                    source={image}
                />
                <View style={{marginLeft:5}}>
                    <Text style={{color:'black', fontSize:11, fontWeight:'900'}}>{name}</Text>
                    <Text style={{color:'gray', fontSize:10, fontWeight:'300'}}>{alias}</Text>
                </View>
            </View>
            
            <View>
            <Text style={{color:'black', fontWeight:'900', fontSize:13}}>$ {price}</Text>
            {
                percentage > 0 ?
                    <Text style={{color:'#8ADDB9', fontWeight:'700', fontSize:11}}>+{percentage} %</Text>
                :
                    <Text style={{color:'#E8B2C1', fontWeight:'700', fontSize:11}}>{percentage} %</Text>
            }
            
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 125,
        height: 110,
        backgroundColor: 'white',
        elevation: 9,
        borderRadius: 6,
        marginTop: 25,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})