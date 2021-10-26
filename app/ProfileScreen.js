import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';

function ProfileScreen({navigation, route}) {
    return (
    <View style={{
        flex:1, alignItems:'center', justifyContent:'center'
    }}>
      <Text
      style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }}
      >This is the profile screen</Text>
      {/* <Button 
      title="go to profile ... again"
      onPress={()=>navigation.navigate('ProfileScreen')}
      />
      <Button 
      title="Back to home"
      onPress={()=>navigation.navigate('WelcomeScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <FlatList
      data={[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
      ]}
      renderItem={({item}) => <Text>{item.key}</Text>}
      />

      

    </View>
    );
}

export default ProfileScreen;