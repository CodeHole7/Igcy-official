import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
// import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
// import HomeMenuScreen from './HomeMenu';
import {RootStackParamList} from '../../global/Type';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
// import SafeAreaContainerView from '../../components/SafeAreaContainerView';

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation, route}: Props): JSX.Element => {
  const suggestedUsers = [
    {
      avatar: require('../../assets/images/homepage/avatar.png'),
      name: 'rachelmorrison',
    },
    {
      avatar: require('../../assets/images/homepage/avatar.png'),
      name: 'rachelmorrison',
    },
    {
      avatar: require('../../assets/images/homepage/avatar.png'),
      name: 'rachelmorrison',
    },
  ];

  const selectedUser = {
    avatar: require('../../assets/images/homepage/avatar-list.png'),
    name: 'rachelmorrison',
    description: 'My adventure in santa cruz',
  };
  //   return (
  //     <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
  //       <View style={{flex: 1, backgroundColor: 'red'}}>
  //         <Text>sdkjsdnkjsdbv</Text>
  //       </View>
  //     </SafeAreaView>
  //   );
  return (
    <SafeAreaContainerView>
      <View style={globalStyles.flexRowView}>
        {/* <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={25}
              style={{position: 'absolute', top: 25, left: 30}}
            /> */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 80, height: 50, overlayColor: '#000'}}
        />
        {/* <Text style={{ fontSize: 40, color: '#000', marginTop: 10 }}> lgcy </Text> */}
      </View>
      <View
        style={{
          ...globalStyles.flexColView,
          alignItems: 'flex-start',
          paddingHorizontal: 15,
          marginTop: 40,
        }}>
        <Text style={{fontSize: 22, color: '#000', marginLeft: 5}}>
          {' '}
          Suggested{' '}
        </Text>
        <View
          style={{
            ...globalStyles.flexRowView,
            gap: 3,
            justifyContent: 'space-between',
            marginTop: 15,
            paddingHorizontal: 8,
          }}>
          {suggestedUsers.map((user, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Profile')}
              style={{
                ...globalStyles.flexColView,
                width: '30%',
                backgroundColor: '#E9E8E8',
                paddingVertical: 15,
                borderRadius: 5,
              }}>
              <Image
                style={{width: 90, height: 90}}
                source={user.avatar}
                borderRadius={50}
              />
              <Text style={{color: '#000', marginTop: 15}}>{user.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{...globalStyles.flexRowView, marginTop: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostView')}
          style={{width: '100%'}}>
          <Image
            source={require('../../assets/images/homepage/home.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: 20,
          paddingLeft: 10,
          paddingRight: 30,
        }}>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: 'flex-start',
            width: 'auto',
          }}>
          <Image
            source={selectedUser.avatar}
            style={{
              width: 35,
              height: 35,
              borderRadius: 35,
              borderWidth: 2,
              borderColor: 'lightgreen',
            }}
          />
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: 'flex-start',
              width: 'auto',
            }}>
            <Text style={{color: '#000', fontSize: 20}}>
              {' '}
              {selectedUser.name}{' '}
            </Text>
            <Text style={{color: '#000', fontSize: 15}}>
              {' '}
              {selectedUser.description}{' '}
            </Text>
          </View>
        </View>
        {/* <FontAwesomeIcon icon={faHeart} size={30} /> */}
      </View>
    </SafeAreaContainerView>
  );
};

export default HomeScreen;
