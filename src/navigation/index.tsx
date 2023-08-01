import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import CreateUserName from '../screens/CreateUserName';
import CreatePassword from '../screens/CreatePassword';
import ForgotPassword from '../screens/ForgotPassword';
import UpdatePassword from '../screens/UpdatePassword';
import {PostViewScreen} from '../screens/Post/PostView';
import {ProfileScreen} from '../screens/Profile/Profile';
import {NewTimelineScreen} from '../screens/Timeline/NewTimeline';
import TabStack from './TabBar';
import {LikesViewScreen} from '../screens/Likes/Likes';
import {CommentsViewScreen} from '../screens/Comments/CommentsView';
import {SelectStyleScreen} from '../screens/SelectStyle/SelectStyle';
import {VideoScreen} from '../screens/Content/Video';
import CreateNewPostDetail from '../screens/Content/CreateNewPostDetailScreen';
import PostShareScreen from '../screens/PostShareScreen/PostShareScreen';
import ChatDetailScreen from '../screens/ChatDetailScreen/ChatDetailScreen';
import {GalleryScreen} from '../screens/Content/Gallery';

export type AppStackParamList = {
  LoginScreen: undefined;
  CreateAccountScreen: undefined;
  CreateUserName: undefined;
  CreatePassword: undefined;
  ForgotPassword: undefined;
  UpdatePassword: undefined;
  TabStack: undefined;
  AppStack: undefined;
  Home: undefined;
  PostView: undefined;
  Profile: undefined;
  MyProfile: undefined;
  NewTimeline: undefined;
  NotiView: undefined;
  LikesView: undefined;
  CommentsView: undefined;
  Filter: {image: ''};
  Video: undefined;
  CreateNewPostDetail: undefined;
  PostShareScreen: undefined;
  ChatDetailScreen: undefined;
  Gallery: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="PostView" component={PostViewScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="NewTimeline" component={NewTimelineScreen} />
      <Stack.Screen name="LikesView" component={LikesViewScreen} />
      <Stack.Screen name="CommentsView" component={CommentsViewScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />

      <Stack.Screen
        name="Filter"
        component={SelectStyleScreen}
        initialParams={{image: ''}}
      />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen
        name="CreateNewPostDetail"
        component={CreateNewPostDetail}
      />
      <Stack.Screen name="PostShareScreen" component={PostShareScreen} />
      <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="CreateUserName" component={CreateUserName} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
