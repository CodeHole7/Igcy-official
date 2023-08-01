import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const IMG_SIZE = 50;

const ChatScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/rightIcon.png')}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
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
          data={Array(20).fill('')}
          showsVerticalScrollIndicator={false}
          renderItem={() => {
            return (
              <TouchableOpacity
                style={styles.userListItem}
                onPress={() => navigation.navigate('ChatDetailScreen')}>
                <Image
                  source={require('../../assets/images/gallery/gallery(1).png')}
                  resizeMode="cover"
                  style={styles.userImg}
                />
                <Text style={{fontSize: 18, fontWeight: '500'}}>
                  John Morrison
                </Text>
                <Text
                  style={{color: '#DADADA', fontSize: 12, fontWeight: '500'}}>
                  2:15 pm
                </Text>
              </TouchableOpacity>
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
    paddingHorizontal: 20,
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
    fontWeight: '600',
  },
  userListItem: {
    marginVertical: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImg: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: 30,
  },
});

export default ChatScreen;
