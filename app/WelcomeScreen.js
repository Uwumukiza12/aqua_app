import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button} from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('./assets/can.jpg')}>
            <View style={styles.logoContainer}>
                <Image  source={require('./assets/jercan.jpg')} style={styles.logo}/>
                <Text style={{color:"black",
                fontSize:28, 
                paddingLeft:"25%", 
                }}>
                    Get Water at  home
                </Text>
            </View>
            <Button
                title="Login here" onPress={()=> navigation.navigate('LoginScreen')}
            />
            <Button
                title="Go to plofile" onPress={()=>
                    navigation.navigate('ProfileScreen')
                }
            />
           
            <View style={styles.registerButton}><Text>Register as Water Provider</Text></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        
    },
    loginButton:{
        width:"100%",
        height:40,
        backgroundColor:"darkblue",
        borderRadius:18,
        marginBottom:3,
        justifyContent:"center",
        alignItems:"center"
        
    },
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"skyblue",
        borderRadius:20,
        marginBottom:5,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:80,
        height:60,
    },
    logoContainer:{
        backgroundColor:"skyblue",
        position:"absolute",
        top:0.2,
        width:"100%",
        
    }
})
export default WelcomeScreen;