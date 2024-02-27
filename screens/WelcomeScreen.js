import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      padding: 24,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    }}>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Image style={{height: 200,
          width: 300,
          resizeMode: "contain",
        }} source={require('../assets/lemonyellow.png')} />

        <Text style={{ marginTop: 40, paddingVertical: 10, color: '#333333', textAlign: 'center', fontSize: 20, fontWeight: 'bold', margin: 10 }}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View>
        <TouchableOpacity style={{ justifyContent: 'center', height: 30, backgroundColor: 'green', borderRadius: 40, width: 'auto' }}
          onPress={() => {
            navigation.navigate("Subscribe");
          }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Newsletter</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

export default WelcomeScreen