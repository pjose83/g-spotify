import { createStackNavigator } from '@react-navigation/stack';
import { IStackParams, IStackRoutes } from "../lib/models/routes";
import { Login } from "../screens";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createStackNavigator<IStackParams>();

const { Navigator, Screen } = Stack

const routes: IStackRoutes[] = [
  {
    name: "Login",
    Component: Login
  },
  {
    name: "BottomTabNavigator",
    Component: BottomTabNavigator
  }
]

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {routes.map(({ name, Component }) => (
        <Screen
          key={name}
          name={name}
          component={Component}
        />
      ))}
    </Navigator>
  );
}