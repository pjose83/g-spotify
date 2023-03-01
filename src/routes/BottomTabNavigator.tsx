import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ITabParams, ITabRoutes } from "../lib/models/routes"
import { Home, Search, MyList, Discover } from "../screens"
import Icon from 'react-native-vector-icons/Feather'
import { colors } from "../contants/styles"
import { Dimensions, StyleSheet } from "react-native"

const Tab = createBottomTabNavigator<ITabParams>()

const { height } = Dimensions.get("screen")

const { Navigator, Screen } = Tab

export const routes: ITabRoutes[] = [
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
    name: "MyList",
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
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
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
    backgroundColor: colors.dark,
    height: height * .09
  }
})