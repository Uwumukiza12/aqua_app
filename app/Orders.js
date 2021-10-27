import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View, Button, TextInput, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';
function Orders() {
    const [isLoading, setLoading]= useState(true);
    const [data, setData] = useState([]);
    //console.log('Hello error')
    //axios
    Axios({
      method: "GET",
      baseURL:
        "http://192.168.137.121:3000/posts",
    })
      .then((res) =>{ setData(res)
      alert(res)
      })
      .catch((err) => console.error(err));

    //##################################################
    // const getMovies = async () => {
    //     try {
    //     const response= await axios.get('http://192.168.137.121:3000/posts')
        
    //     // .then((data)=>{
    //     //   console.log(JSON.stringify(response.data));
    //     // setData(data);
    //     //  })
      

    //     alert(JSON.stringify(response.data));
    //      //console.log('Hello error')
    //      //const json = await response.json();
    //     //setData(json.posts);
    //     // console.log('Hello error')
    //    } catch (error) {
    //      console.error(error);
    //    } finally {
    //      setLoading(false);
    //    }
    //  }
    // useEffect(()=>{
    //     getMovies();
    // }, []);
    //########################################################
    return (
        <>
        <View style={{ flex: 1, padding: 24,  }}>
            
              <FlatList
              data={data}
              keyExtractor={(id) => id.toString()}
              renderItem={({ item }) => <Text>{item.title} hello</Text>}
            />
            

          {/* <Button
                title="Fetch data" onPress={getMovies}
                /> */}
          </View>
    
           
        </>
    );
}

export default Orders;