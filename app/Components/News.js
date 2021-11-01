import React, {useState} from 'react';
import { Button, Text, View, StyleSheet,TextInput } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';

function News() {
    const [output, setOutput] = useState('Hello water delivery app')
    return (
        
        <View style={styles.container} >
            <View  style={styles.row1}>
                <View style={styles.cols}>
                    <View  style={styles.inputText} >
                    <TextInput placeholder="customer names"/>
                    </View>
                <View>
                <Button style={styles.btn}
                title="Add"
                />
                </View>
                </View>
            </View>
            <View>
            <Text>{output}</Text>
            <Button  
            style={styles.btn}
            title="change texts" 
            onPress={()=> setOutput("Hello Diane and Marcus")}/>
            </View>
        </View >
        
    );
}
//styles 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    btn:{
        width:"50%",
        height:"50",
        marginTop:10
    },
    inputText:{
        width:200,
        borderColor: 'black', 
        borderBottomWidth:1,
        padding: 10
    }
})

export default News;