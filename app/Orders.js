import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList,Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';
function Orders(props) {
    const [isLoading, setLoading]= useState(true);
    const [data, setData] = useState([]);
    //console.log('Hello error')
    const getMovies = async () => {
        try {
        const response= await axios.get('http://192.168.137.121:3000/posts')
        
        // .then((data)=>{
        //   console.log(JSON.stringify(response.data));
        // setData(data);
        //  })
      

        alert(JSON.stringify(response.data));
         //console.log('Hello error')
         //const json = await response.json();
        //setData(json.posts);
        // console.log('Hello error')
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }
    useEffect(()=>{
        getMovies();
    }, []);
    return (
        <>
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
              <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                  <Text>{item.title}, {item.description}</Text>
                )}
              />
            )}

          <Button
                title="Fetch data" onPress={getMovies}
                />
          </View>
    
           
        </>
    );
}

export default Orders;