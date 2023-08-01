import React from 'react';
import {Image, Linking, Text, TouchableHighlight, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
import {SCREEN_WIDTH} from '../../global/constants';

import {RootStackParamList} from '../../global/Type';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';

type Props = NativeStackScreenProps<RootStackParamList>;

export const MyProfileScreen = ({navigation, route}: Props): JSX.Element => {
  const selectedUser = {
    avatar: require('../../assets/images/profile/user-shape.png'),
    name: 'John Morrison',
    username: 'johnmorrison',
  };
  const userDatas = [
    {
      title: 'Our Adventure',
      src: require('../../assets/images/profile/example.png'),
      type: 'picture',
    },
    {
      title: 'Video of adventure',
      src: require('../../assets/images/profile/example.png'),
      type: 'video',
    },
  ];
  return (
    <SafeAreaContainerView>
      <View style={globalStyles.flexRowView}>
        <Image
          source={require('../../assets/icons/setting.png')}
          style={{
            position: 'absolute',
            top: 15,
            right: 20,
            width: 25,
            height: 25,
          }}
        />
        <Text style={{fontSize: 25, color: '#000', marginTop: 10}}>
          {' '}
          {selectedUser.username}{' '}
        </Text>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 30,
          marginTop: 45,
          gap: 50,
          position: 'relative',
        }}>
        <Image
          source={selectedUser.avatar}
          style={{width: 60, height: 60, borderRadius: 60}}
        />
        <Image
          source={require('../../assets/icons/camera.png')}
          style={{
            position: 'absolute',
            top: -5,
            left: 72,
            width: 20,
            height: 20,
          }}
        />
        <TouchableHighlight
          style={{
            backgroundColor: '#000',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('NewTimeline')}>
          <Text style={{color: 'white'}}> Create Timeline </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          ...globalStyles.flexColView,
          alignItems: 'flex-start',
          paddingLeft: 20,
          paddingTop: 30,
        }}>
        <Text style={{color: '#000', fontSize: 25, fontFamily: 'Montserrat'}}>
          {selectedUser.name}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: '300',
            fontFamily: 'Montserrat',
            textAlign: 'left',
          }}>
          Welcome to my life adventure
        </Text>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: 'space-between',
            paddingLeft: 10,
            marginTop: 5,
          }}>
          <Text
            style={{color: '#3E78CE', fontSize: 20}}
            onPress={() => Linking.openURL('https://www.lgcy.io')}>
            www.lgcy.io
          </Text>
        </View>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'space-between',
          marginTop: 40,
          paddingHorizontal: 15,
        }}>
        {userDatas.map((userData, index) => (
          <View key={index} style={{position: 'relative'}}>
            <Image
              source={userData.src}
              style={{
                width: SCREEN_WIDTH / 2 - 30,
                height: SCREEN_WIDTH / 2 - 30,
              }}
            />
            <View
              style={{
                ...globalStyles.flexRowView,
                justifyContent: 'space-between',
                width: 'auto',
                marginTop: 5,
              }}>
              <Text style={{color: '#000', fontSize: 16}}>
                {' '}
                {userData.title}{' '}
              </Text>
              {/* <FontAwesomeIcon icon={faEllipsis} size={22} color="#000" /> */}
            </View>
            {userData.type === 'video' && (
              <Image
                source={require('../../assets/icons/video.png')}
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  right: 10,
                  top: 10,
                }}
              />
            )}
          </View>
        ))}
      </View>
    </SafeAreaContainerView>
  );
};
