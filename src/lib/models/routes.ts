import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { StackScreenProps } from "@react-navigation/stack"

export type ITabParams = {
  Home: undefined
  Search: undefined
  ["My list"]: undefined
  Discover: undefined
}

export interface ITabRoutes {
  name: keyof ITabParams
  Component:(props: BottomTabScreenProps<ITabParams, keyof ITabParams>) => JSX.Element
  icon: string
}

export type IStackParams = {
  BottomTabNavigator: undefined
  Login: undefined
}

export interface IStackRoutes {
  name: keyof IStackParams
  Component:(props: StackScreenProps<IStackParams, keyof IStackParams | any>) => JSX.Element
}