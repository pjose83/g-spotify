import { StyleSheet, Text, View } from 'react-native'

export const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Search</Text>
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