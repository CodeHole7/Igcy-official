import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import Button from '../../components/Button';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
// import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';

import {RootStackParamList} from '../../global/Type';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList>;
type NotiUserType = {
  avatar: any;
  name: string;
  poster: boolean;
  action: string;
  accepted: boolean;
};
type NotiTextType = {
  commented: string;
  liked: string;
  followed: string;
  invited: string;
  taged: string;
};
export const NotiViewScreen = ({navigation, route}: Props): JSX.Element => {
  const notiUsers: NotiUserType[] = [
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'katiem',
      poster: false,
      action: 'commented',
      accepted: true,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username1',
      poster: false,
      action: 'liked',
      accepted: true,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username2',
      poster: false,
      action: 'followed',
      accepted: true,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username3',
      poster: false,
      action: 'invited',
      accepted: false,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username4',
      poster: false,
      action: 'taged',
      accepted: true,
    },
    {
      avatar: require('../../assets/images/homepage/home.png'),
      name: 'username5',
      poster: false,
      action: 'taged',
      accepted: true,
    },
  ];
  const notiText: NotiTextType = {
    commented: 'commented on your post',
    liked: 'liked your post',
    followed: 'is following your timeline',
    invited: 'commented on your post',
    taged: 'tagged you in a post',
  };
  const isDarkMode = true; //useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle} edges={['top']}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={globalStyles.container}>
        <ScrollView style={{width: '100%', marginBottom: 140}}>
          <View style={{...globalStyles.flexRowView, marginTop: 10}}>
            <TouchableOpacity
              style={{position: 'absolute', left: 15}}
              onPress={() => navigation.navigate('Home')}>
              {/* <FontAwesomeIcon icon={faAngleLeft} size={30} /> */}
            </TouchableOpacity>
            <Text style={{fontSize: 25, color: '#000'}}> Notifications </Text>
          </View>
          <View
            style={{
              ...globalStyles.flexColView,
              marginTop: 30,
              paddingHorizontal: 12,
              gap: 30,
            }}>
            {notiUsers.map((notiUser, index) => (
              <View
                style={{
                  ...globalStyles.flexRowView,
                  justifyContent: 'space-between',
                }}
                key={index}>
                <View
                  style={{
                    ...globalStyles.flexRowView,
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: !notiUser.accepted ? 'flex-start' : 'center',
                    gap: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}>
                    <Image
                      source={notiUser.avatar}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: 'lightgreen',
                      }}
                    />
                  </TouchableOpacity>
                  <View style={{...globalStyles.flexRowView, flex: 1}}>
                    <View style={{...globalStyles.flexColView, gap: 10}}>
                      <View
                        style={{
                          ...globalStyles.flexRowView,
                          justifyContent: 'flex-start',
                          gap: 4,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontWeight: '700',
                            fontSize: 16,
                          }}>
                          {notiUser.name}
                        </Text>
                        {notiUser.action === 'commented' && (
                          <Text
                            numberOfLines={3}
                            style={{
                              color: 'gray',
                              fontWeight: '400',
                              fontSize: 16,
                              textAlign: 'left',
                            }}>
                            {' '}
                            {notiText['commented']}{' '}
                          </Text>
                        )}
                        {notiUser.action === 'liked' && (
                          <Text
                            numberOfLines={3}
                            style={{
                              color: 'gray',
                              fontWeight: '400',
                              fontSize: 16,
                              textAlign: 'left',
                            }}>
                            {' '}
                            {notiText['liked']}{' '}
                          </Text>
                        )}
                        {notiUser.action === 'followed' && (
                          <Text
                            numberOfLines={3}
                            style={{
                              color: 'gray',
                              fontWeight: '400',
                              fontSize: 16,
                              textAlign: 'left',
                            }}>
                            {' '}
                            {notiText['followed']}{' '}
                          </Text>
                        )}
                        {notiUser.action === 'invited' && (
                          <Text
                            numberOfLines={3}
                            style={{
                              color: 'gray',
                              fontWeight: '400',
                              fontSize: 16,
                              textAlign: 'left',
                            }}>
                            {' '}
                            {notiText['invited']}{' '}
                          </Text>
                        )}
                        {notiUser.action === 'taged' && (
                          <Text
                            numberOfLines={3}
                            style={{
                              color: 'gray',
                              fontWeight: '400',
                              fontSize: 16,
                              textAlign: 'left',
                            }}>
                            {' '}
                            {notiText['taged']}{' '}
                          </Text>
                        )}
                      </View>
                      {notiUser.action === 'invited' && (
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontWeight: '700',
                              fontSize: 17,
                            }}>
                            {' '}
                            Timeline title{' '}
                          </Text>
                        </View>
                      )}
                      {/* {!notiUser.accepted && (
                      <View style={{...globalStyles.flexRowView, gap: 20}}>
                        <Button
                          title="Accept"
                          style={{width: 100}}
                          // onPress={() => navigation.navigate('Home')}
                        />
                        <Button
                          title="Decline"
                          style={{width: 100}}
                          // onPress={() => navigation.navigate('Home')}
                        />
                      </View>
                    )} */}
                    </View>
                  </View>
                </View>
                {notiUser.accepted && (
                  <View>
                    <Image
                      source={require('../../assets/images/gallery/gallery(3).png')}
                      style={{width: 50, height: 50}}
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
