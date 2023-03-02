import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from './src/routes'
import { COLORS } from "./src/contants/styles";
// import { API_URL } from "@env"

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor={COLORS.dark}
        barStyle={"light-content"}
        translucent={true}
      />
      <StackNavigator />
    </NavigationContainer>
  )
}