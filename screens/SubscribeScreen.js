import * as React from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { validateEmail } from "./Validate";
import Button from "./Button";
const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');

  const isEmailValid = validateEmail(email);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Image style={{ height: 100, width: 'auto', marginBottom: 30 }} source={require('../assets/lemongrey.png')} resizeMode="contain" />
      <Text style={{ color: "#333333", textAlign: 'center', fontSize: 20 }}>Subscribe to our newsletter for our latest delicious recipes!</Text>

      <TextInput
        style={{
          height: 40,
          marginVertical: 24,
          borderRadius: 8,
          borderWidth: 1,
          padding: 10,
          fontSize: 16,
          borderColor: 'EDEFEE',
        }}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}

      />

      <Button
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>

    </View>
  )
}

export default SubscribeScreen