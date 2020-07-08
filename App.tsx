import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'

import Home from '@screens/Home'
import Live from '@screens/Live'
import Profile from '@screens/Profile'
import Game from '@screens/Game'

const AppNav = createStackNavigator()
const TabNav = createBottomTabNavigator()

const tabBarOptions: BottomTabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 12,
  },
}

const routesName: Record<string, string> = {
  Home: 'home',
  Live: 'game-controller',
  Profile: 'user',
}

const TabNavScreen: React.FunctionComponent = () => (
  <TabNav.Navigator
    tabBarOptions={tabBarOptions}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const iconName = routesName[route.name] || 'home'

        return (
          <TabBarIconContainer focusable={focused}>
            <Entypo name={iconName} size={24} color="#ffffff" />
          </TabBarIconContainer>
        )
      },
    })}
  >
    <TabNav.Screen name="Home" component={Home} />
    <TabNav.Screen name="Live" component={Live} />
    <TabNav.Screen name="Profile" component={Profile} />
  </TabNav.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <AppNav.Navigator mode="modal" headerMode="none">
        <AppNav.Screen name="App" component={TabNavScreen} />
        <AppNav.Screen name="Game" component={Game} />
      </AppNav.Navigator>
    </NavigationContainer>
  )
}

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focusable ? '#819ee5' : '#343434')};
  padding: 2px 16px;
  border-radius: 32px;
`
