import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function SplashScreen({navigation}) {

    useEffect(() => {
        let timer1 = setTimeout(() => {
            navigation.navigate('Dashboard')
        }, 1000);

        return () => {
            clearTimeout(timer1);
        };
        
    }, []);

    return (
        <View style={styles.screen}>
            <Icon
                name='bitcoin'
                size={100}
                color="white"
            />
            <Text style={styles.text}>CRYPTOCOIN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#683BFA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'white',
        fontSize:40,
        fontWeight:'900',
        marginTop:10
    }
})