import React from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import ToggleButton from '../../components/ToggleButton';
import {styles as globalStyles} from '../../global/styles';
import {styles as localStyles} from './style';

import {RootStackParamList} from '../../global/Type';
import HomeMenuScreen from '../Home/HomeMenu';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';

type Props = NativeStackScreenProps<RootStackParamList>;

export const NewTimelineScreen = ({navigation, route}: Props): JSX.Element => {
  return (
    <SafeAreaContainerView>
      <ScrollView style={{width: '100%', height: 700, marginBottom: 140}}>
        <View style={{...globalStyles.flexRowView, marginTop: 10}}>
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.navigate('MyProfile')}>
            {/* <FontAwesomeIcon icon={faAngleLeft} size={30} /> */}
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: '#000'}}> Create Timeline </Text>
        </View>
        <View style={{...globalStyles.flexColView, marginTop: 50}}>
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: 'flex-start',
              width: '70%',
            }}>
            <Text style={{color: '#000', fontSize: 20}}> Title </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#000',
                width: '100%',
                marginTop: 18,
                paddingHorizontal: 15,
              }}
            />
          </View>
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: 'flex-start',
              width: '70%',
              marginTop: 30,
            }}>
            <Text style={{color: '#000', fontSize: 20}}> Description </Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#000',
                width: '100%',
                marginTop: 15,
                paddingHorizontal: 15,
              }}
            />
          </View>
          <View style={{marginTop: 30, position: 'relative'}}>
            <Image
              source={require('../../assets/images/profile/user-shape.png')}
              style={{width: 100, height: 100}}
            />
            <Image
              source={require('../../assets/icons/camera.png')}
              style={{
                position: 'absolute',
                top: -5,
                left: 80,
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <Text style={{color: '#000', fontSize: 20}}> Secret </Text>
            <ToggleButton />
          </View>
          <View style={{...globalStyles.flexColView, gap: 30, marginTop: 30}}>
            <TouchableOpacity style={localStyles.timelineButton}>
              <Text style={localStyles.timelineButtonText}>
                {' '}
                Invite Members{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.timelineButton}>
              <Text style={localStyles.timelineButtonText}>
                {' '}
                Create Timeline{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};
