import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type ITabParams = {
  Home: undefined
  Search: undefined
  MyList: undefined
  Discover: undefined
}

export interface ITabRoutes {
  name: keyof ITabParams
  Component:(props: BottomTabScreenProps<ITabParams, keyof ITabParams>) => JSX.Element
  icon: string
}