import React from "react"
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { BottomTabNavigator } from './src/routes'
// import { API_URL } from "@env"

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      {/* <Text>Hola mundo</Text> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center"
  }
})