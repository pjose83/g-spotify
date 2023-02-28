import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/Feather'
// import { API_URL } from "@env"

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={{ color: "#fff", fontSize: 24 }}>App</Text>
        <Icon name="camera" size={30} color="#fff" />
      </View>
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