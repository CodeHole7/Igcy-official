/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/Home';
import {MyProfileScreen} from '../screens/Profile/MyProfile';
import {NotiViewScreen} from '../screens/Notification/NotiView';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ChatDetailScreen from '../screens/ChatDetailScreen/ChatDetailScreen';
import {Icon} from '../components/Icon';
import {GalleryScreen} from '../screens/Content/Gallery';
import {theme} from '../global/styles';

export type TabStackList = {
  Home: undefined;
  ChatScreen: undefined;
  Gallery: undefined;
  NotiView: undefined;
  MyProfile: undefined;
  ChatDetailScreen: undefined;
  ChatStack: undefined;
};

const Tab = createBottomTabNavigator<TabStackList>();

const Stack = createStackNavigator<TabStackList>();

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              icon="home"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              icon="contact"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              icon="plus"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotiView"
        component={NotiViewScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              icon="bell"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon
              icon="user"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
