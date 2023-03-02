import { StackScreenProps } from "@react-navigation/stack"
import { StyleSheet, Text, View, Linking } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import { IStackParams } from "../lib/models/routes"
import Icon from 'react-native-vector-icons/Entypo'
import { API_KEY } from '@env'
import { COLORS } from "../contants/styles"

interface ILogin extends StackScreenProps<IStackParams, "Login">{}

export const Login = ({ navigation }: ILogin) => {
  const SPOTIFY_URL = "https://accounts.spotify.com/authorize?";
  const CLIENT_ID = "client_id=fb15e579a2104ce09248781743366168";
  const RESPONSE_TYPE = "&response_type=code";
  const REDIRECT_URI = "&redirect_uri=miapp://spotify-redirect/callback";
  const SCOPE = "&scope=user-read-email%20user-read-private";

  const AUTH_URL = SPOTIFY_URL + CLIENT_ID + RESPONSE_TYPE + REDIRECT_URI + SCOPE;

  const handleLogin = async () => {
    const auth = await Linking.openURL(AUTH_URL)
    auth && navigation.navigate("BottomTabNavigator")
    console.log(auth)
  }

  return (
    <View style={styles.container}>
      <Icon name="spotify" size={200} color={COLORS.primary} />
      <TouchableOpacity onPress={handleLogin} style={styles.btnLogin} activeOpacity={.5}>
        <Text style={styles.txt}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    alignItems: "center"
  },
  btnLogin: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginTop: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10
  },
  txt: {
    color: COLORS.dark,
    fontSize: 20
  }
})