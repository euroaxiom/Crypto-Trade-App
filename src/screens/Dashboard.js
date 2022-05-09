import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import CoinCard from '../components/CoinCard'
import NFTData  from '../data/dummy'
import TRANSACTION from '../data/transaction'
import TransactionListCard from '../components/TransactionListCard'

export default function Dashboard({navigation}) {

    return (
        <ScrollView style={styles.screen}>
            <ImageBackground 
                source={require('../assets/images/banner.png')} 
                resizeMode="cover" 
                style={styles.upperContainer}
            >
                <View style={styles.header}>
                    <Icon
                        name='bell-o'
                        color="white"
                        size={17}
                        style={{alignSelf:'flex-end'}}
                    />
                </View>

                <View style={styles.portfolioDetails}>
                    <Text style={{color:'white',fontSize:14,fontFamily:'Roboto'}}>Your Portfolio Balance</Text>
                    <Text style={{color:'white',fontSize:20,fontFamily:'Roboto',fontWeight:'900',marginVertical:3,letterSpacing:1}}>$ 33,456.34</Text>
                    <Text style={{color:'white',fontSize:12,fontFamily:'Roboto'}}>+2.6%   Last 24 hours</Text>
                </View>

                <View style={styles.trending}>
                    <Text style={{color:'white',fontSize:14,fontFamily:'Roboto',fontWeight:'800'}}>Trending</Text>
                </View>  
            </ImageBackground>

            <View style={styles.cardsContainer}>
                {
                    NFTData.map((item) => (
                        <CoinCard
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            alias={item.alias}
                            price={item.totals}
                            percentage={item.update}
                            onPress={() => navigation.navigate('CoinDetails', {item})}
                        />
                    ))
                }
            </View>
            
            <View style={styles.priceCard}>
                <Icon
                    name='bell'
                    color="#FE9E05"
                    size={20}
                />
                <View style={{marginLeft:-80}}>
                    <Text style={{color:'black',fontSize:14, fontFamily:'Roboto', fontWeight:'800'}}>Set Price Alert</Text>
                    <Text style={{color:'gray',fontSize:12, fontFamily:'Roboto', fontWeight:'500'}}>Get notified when your coins are moving</Text>
                </View>
                <Icon
                    name='chevron-right'
                    color="gray"
                    size={20}
                />
            </View>

            <View style={styles.cautionCard}>
                <Text style={{color:'white',fontSize:14,fontWeight:'800'}}>Investing Safety</Text>
                <Text style={{color:'white',fontSize:11,fontWeight:'100',marginVertical:5}}>Margin of safety is a principle of investing in which an investor only purchases securities when their market price is significantly below their intrinsic value. In other words, when the market price of a security is significantly below your estimation of its intrinsic value, the difference is the margin of safety.</Text>
                <Text style={{color:'#6596EA', fontSize:12, textDecorationLine:'underline',fontWeight:'bold'}}>Learn More</Text>
            </View>

            <View style={styles.transactionCard}>
                <Text style={styles.transactionCardTitle}>Transaction History</Text>
                
                {
                    TRANSACTION.map((item) => (
                        <TransactionListCard
                            key={item.id}
                            type={item.type}
                            alias={item.alias}
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
        flex: 1,
        backgroundColor: 'white',
    },
    upperContainer:{
        backgroundColor: '#683BFA',
        height:230
    },
    header: {
        width:'90%',
        alignSelf:'center',
        // borderColor:'red',
        // borderWidth:1,
        marginTop:15
    },
    portfolioDetails: {
        width:'65%',
        alignSelf:'center',
        // borderColor:'blue',
        // borderWidth:1,
        marginTop:15,
        alignItems:'center'
    },
    trending:{
        width:'96%',
        alignSelf:'center',
        marginTop:15
    },
    cardsContainer:{
        flexDirection:'row',
        marginTop:-95
    },
    priceCard:{
        width:'97%',
        alignSelf:'center',
        flexDirection:'row',
        // borderColor:'red',
        // borderWidth:1,
        marginTop:25,
        alignItems:'center',
        padding:10,
        justifyContent:'space-between',
        borderRadius:6,
        elevation:5,
        backgroundColor:'white'
    },
    cautionCard:{
        width:'97%',
        alignSelf:'center',
        // flexDirection:'row',
        // borderColor:'red',
        // borderWidth:1,
        marginTop:20,
        backgroundColor:'#5C2DFC',
        padding:10,
        borderRadius:8,
        elevation:5
    },
    transactionCard:{
        width:'97%',
        alignSelf:'center',
        // borderColor:'red',
        // borderWidth:1,
        marginTop:15,
        borderRadius:6,
        backgroundColor:'white',
        elevation:7,
        marginBottom:15
    },
    transactionCardTitle:{
        color:'black', 
        fontSize:15, 
        margin:10, 
        fontWeight:'800'
    }
})