import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
// import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import HomeMenuScreen from '../Home/HomeMenu';

import {RootStackParamList} from '../../global/Type';

type Props = NativeStackScreenProps<RootStackParamList>;

export const CommentsViewScreen = ({navigation, route}: Props): JSX.Element => {
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
          <Text style={{fontSize: 25, color: '#000'}}> Comments </Text>
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            marginTop: 30,
            paddingHorizontal: 12,
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
                {commentUser.name}&nbsp;
                {commentUser.poster ? (
                  <Text style={{color: 'gray', fontWeight: '400'}}>
                    {' '}
                    This is the caption of the post{' '}
                  </Text>
                ) : (
                  <Text style={{color: 'gray', fontWeight: '400'}}>
                    {' '}
                    comment on post{' '}
                  </Text>
                )}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          ...globalStyles.flexRowView,
          position: 'absolute',
          bottom: 90,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'rgba(0, 0, 0, 0.50)',
            backgroundColor: '#FFF',
            paddingHorizontal: 100,
            paddingVertical: 8,
          }}>
          <Text style={{color: '#000', fontSize: 20}}> Comment </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
          }}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '800'}}>
            {' '}
            Post{' '}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <HomeMenuScreen /> */}
    </SafeAreaContainerView>
  );
};
