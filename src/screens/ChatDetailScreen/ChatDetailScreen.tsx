import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../global/Type';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const {width} = Dimensions.get('screen');

type Props = NativeStackScreenProps<RootStackParamList>;

const ChatDetailScreen = ({navigation}: Props) => {
  const galleries = [
    {
      id: 1,
      src: require('../../assets/images/gallery/gallery(1).png'),
      srcRouter: '../../assets/images/gallery/gallery(1).png',
      imageName: 'gallery(1).png',
      type: 'image',
    },
    {
      id: 2,
      src: require('../../assets/images/gallery/gallery(2).png'),
      srcRouter: '../../assets/images/gallery/gallery(2).png',
      imageName: 'gallery(2).png',
      type: 'video',
      time: 12,
    },
    // {
    //     id: 3,
    //     src: require('../../assets/videos/3791.MP4'),
    //     srcRouter: '../../assets/videos/3791.MP4',
    //     imageName: '3791.mp4',
    //     type: 'video',
    // },
    {
      id: 4,
      src: require('../../assets/images/gallery/gallery(4).png'),
      srcRouter: '../../assets/images/gallery/gallery(4).png',
      imageName: 'gallery(4).png',
      type: 'image',
    },
    {
      id: 5,
      src: require('../../assets/images/gallery/gallery(5).png'),
      srcRouter: '../../assets/images/gallery/gallery(5).png',
      imageName: 'gallery(5).png',
      type: 'video',
      time: 16,
    },
    {
      id: 6,
      src: require('../../assets/images/gallery/gallery(6).png'),
      srcRouter: '../../assets/images/gallery/gallery(6).png',
      imageName: 'gallery(6).png',
      type: 'image',
    },
    {
      id: 7,
      src: require('../../assets/images/gallery/gallery(7).png'),
      srcRouter: '../../assets/images/gallery/gallery(7).png',
      imageName: 'gallery(7).png',
      type: 'video',
      time: 25,
    },
    {
      id: 8,
      src: require('../../assets/images/gallery/gallery(8).png'),
      srcRouter: '../../assets/images/gallery/gallery(8).png',
      imageName: 'gallery(8).png',
      type: 'image',
    },
    {
      id: 9,
      src: require('../../assets/images/gallery/gallery(9).png'),
      srcRouter: '../../assets/images/gallery/gallery(9).png',
      imageName: 'gallery(9).png',
      type: 'image',
    },
    {
      id: 10,
      src: require('../../assets/images/gallery/gallery(10).png'),
      srcRouter: '../../assets/images/gallery/gallery(10).png',
      imageName: 'gallery(10).png',
      type: 'video',
      time: 9,
    },
    {
      id: 11,
      src: require('../../assets/images/gallery/gallery(11).png'),
      srcRouter: '../../assets/images/gallery/gallery(11).png',
      imageName: 'gallery(11).png',
      type: 'video',
      time: 16,
    },
    {
      id: 12,
      src: require('../../assets/images/gallery/gallery(12).png'),
      srcRouter: '../../assets/images/gallery/gallery(12).png',
      imageName: 'gallery(12).png',
      type: 'image',
    },
    {
      id: 13,
      src: require('../../assets/images/gallery/gallery(13).png'),
      srcRouter: '../../assets/images/gallery/gallery(13).png',
      imageName: 'gallery(13).png',
      type: 'image',
    },
    {
      id: 14,
      src: require('../../assets/images/gallery/gallery(14).png'),
      srcRouter: '../../assets/images/gallery/gallery(14).png',
      imageName: 'gallery(14).png',
      type: 'image',
    },
    {
      id: 15,
      src: require('../../assets/images/gallery/gallery(15).png'),
      srcRouter: '../../assets/images/gallery/gallery(15).png',
      imageName: 'gallery(15).png',
      type: 'image',
    },
    {
      id: 16,
      src: require('../../assets/images/gallery/gallery(16).png'),
      srcRouter: '../../assets/images/gallery/gallery(16).png',
      imageName: 'gallery(16).png',
      type: 'video',
      time: 28,
    },
    {
      id: 17,
      src: require('../../assets/images/gallery/gallery(13).png'),
      srcRouter: '../../assets/images/gallery/gallery(13).png',
      imageName: 'gallery(13).png',
      type: 'image',
    },
    {
      id: 18,
      src: require('../../assets/images/gallery/gallery(14).png'),
      srcRouter: '../../assets/images/gallery/gallery(14).png',
      imageName: 'gallery(14).png',
      type: 'image',
    },
    {
      id: 19,
      src: require('../../assets/images/gallery/gallery(15).png'),
      srcRouter: '../../assets/images/gallery/gallery(15).png',
      imageName: 'gallery(15).png',
      type: 'video',
      time: 11,
    },
    {
      id: 20,
      src: require('../../assets/images/gallery/gallery(16).png'),
      srcRouter: '../../assets/images/gallery/gallery(16).png',
      imageName: 'gallery(16).png',
      type: 'image',
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/rightIcon.png')}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>John Morrison</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/editIcon.png')}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={galleries}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  source={item.src}
                  //   source={require('../../assets/images/gallery/gallery(1).png')}
                  style={{width: width * 0.335, height: width * 0.335}}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingLeft: 10,
    paddingRight: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
});

export default ChatDetailScreen;
