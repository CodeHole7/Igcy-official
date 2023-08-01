import React from 'react';
import {View, Image, Linking, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
// import {faMessage} from '@fortawesome/free-regular-svg-icons/faMessage';
import {SCREEN_WIDTH} from '../../global/constants';

import {RootStackParamList} from '../../global/Type';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';

type Props = NativeStackScreenProps<RootStackParamList>;

export const ProfileScreen = ({navigation, route}: Props): JSX.Element => {
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
        {/* <FontAwesomeIcon
          icon={faEllipsis}
          size={25}
          style={{position: 'absolute', top: 20, right: 30}}
        /> */}
        <Text style={{fontSize: 25, color: '#000', marginTop: 10}}>
          {' '}
          {selectedUser.username}{' '}
        </Text>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'flex-start',
          paddingLeft: 20,
          marginTop: 45,
          gap: 50,
        }}>
        <Image
          source={selectedUser.avatar}
          style={{width: 60, height: 60, borderRadius: 60}}
        />
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: 'flex-start',
            width: 'auto',
          }}>
          <Text style={{color: '#000', fontSize: 25, fontFamily: 'Montserrat'}}>
            {selectedUser.name}
          </Text>
          <View
            style={{
              ...globalStyles.flexRowView,
              width: 'auto',
              justifyContent: 'space-between',
              gap: 10,
              marginTop: 5,
            }}>
            <Text
              style={{color: '#3E78CE', fontSize: 20}}
              onPress={() => Linking.openURL('https://www.lgcy.io')}>
              www.lgcy.io
            </Text>
            <View
              style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#000',
                padding: 5,
              }}>
              {/* <FontAwesomeIcon icon={faMessage} size={15} /> */}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'flex-start',
          marginTop: 35,
          paddingLeft: 50,
        }}>
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
