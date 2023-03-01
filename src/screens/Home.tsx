import { StyleSheet, Text, View } from 'react-native'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Spotify</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    color: "#fff",
    fontSize: 18
  }
})