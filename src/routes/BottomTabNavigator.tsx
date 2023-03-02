import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ITabParams, ITabRoutes } from "../lib/models/routes"
import { Home, Search, MyList, Discover } from "../screens"
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from "../contants/styles"
import { Dimensions, StyleSheet } from "react-native"

const Tab = createBottomTabNavigator<ITabParams>()

const { height } = Dimensions.get("screen")

const { Navigator, Screen } = Tab

const routes: ITabRoutes[] = [
  {
    name: "Home",
    Component: Home,
    icon: "home"
  },
  {
    name: "Search",
    Component: Search,
    icon: "search"
  },
  {
    name: "My list",
    Component: MyList,
    icon: "music"
  },
  {
    name: "Discover",
    Component: Discover,
    icon: "book-open"
  }
]

export const BottomTabNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      }}
    >
      {routes.map(({ name, Component, icon }) => (
        <Screen
          key={name}
          name={name}
          component={Component}
          options={{
            tabBarIcon: ({ color }) => <Icon name={icon} size={30} color={color} />,
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: 6
            }
          }}
        />
      ))}
    </Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.dark,
    height: height * .09
  }
})