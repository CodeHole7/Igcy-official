import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
// import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';

import {RootStackParamList} from '../../global/Type';
import HomeMenuScreen from '../Home/HomeMenu';

type Props = NativeStackScreenProps<RootStackParamList>;

export const LikesViewScreen = ({navigation, route}: Props): JSX.Element => {
  const commentUsers = [
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'katiemorrison',
      poster: true,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username1',
      poster: false,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username2',
      poster: false,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username3',
      poster: false,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username4',
      poster: false,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username5',
      poster: false,
    },
  ];
  return (
    <SafeAreaContainerView>
      <ScrollView style={{width: '100%', height: 700, marginBottom: 140}}>
        <View style={{...globalStyles.flexRowView, marginTop: 10}}>
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.navigate('PostView')}>
            {/* <FontAwesomeIcon icon={faAngleLeft} size={30} /> */}
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: '#000'}}> Likes </Text>
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            marginTop: 30,
            paddingHorizontal: 20,
            gap: 30,
          }}>
          {commentUsers.map((commentUser, index) => (
            <TouchableOpacity
              key={index}
              style={{
                ...globalStyles.flexRowView,
                justifyContent: 'flex-start',
                gap: 15,
              }}
              onPress={() => navigation.navigate('Profile')}>
              <Image
                source={commentUser.avatar}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              <Text style={{color: '#000', fontWeight: '700', fontSize: 16}}>
                {commentUser.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <HomeMenuScreen />
    </SafeAreaContainerView>
  );
};
