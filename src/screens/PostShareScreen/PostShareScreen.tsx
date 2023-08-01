import React, {useState} from 'react';
import {Image, SectionList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {AppStackParamList} from '../../navigation';
import {styles as globalStyles} from '../../global/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeMenuScreen from '../Home/HomeMenu';

type Props = NativeStackScreenProps<AppStackParamList>;
const IMG_SIZE = 30;

const PostShareScreen = ({navigation}: Props) => {
  const [selected, setSelected] = useState([]);

  const DATA = [
    {
      title: 'Public Timelines',
      data: [{title: 'My Adventure', id: 1}],
    },
    {
      title: 'Private Timelines',
      data: [{title: 'My Story', id: 3}],
    },
    {
      title: 'Contacts',
      data: [
        {title: 'My Story', id: 4},
        {title: 'My Story', id: 5},
        {title: 'My Story', id: 6},
        {title: 'My Story', id: 7},
        {title: 'My Story', id: 8},
        {title: 'My Story', id: 9},
      ],
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={styles.backArrowContainer}>
          <Image
            source={require('../../assets/icons/rightIcon.png')}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Share</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.headerRightTitle}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(_item, index) => index.toString()}
          stickySectionHeadersEnabled={false}
          renderItem={({item}) => {
            const isSelected = selected.findIndex((x: any) => x.id === item.id);
            return (
              <>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    let temp = [...selected];
                    if (isSelected === -1) {
                      temp.push(item);
                    } else {
                      temp.splice(isSelected, 1);
                    }
                    setSelected(temp);
                  }}>
                  <View style={styles.itemContainer}>
                    <Image
                      source={require('../../assets/images/gallery/gallery(1).png')}
                      style={styles.postImg}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  {isSelected !== -1 && (
                    <Image
                      source={require('../../assets/icons/checkMark.png')}
                      resizeMode="contain"
                      style={styles.checkMark}
                    />
                  )}
                </TouchableOpacity>
                <View style={styles.separator} />
              </>
            );
          }}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
      <HomeMenuScreen style={{height: 75}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: 20},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  backArrowContainer: {
    paddingRight: 35,
  },
  backArrow: {
    height: 15,
    width: 15,
  },
  headerTitleContainer: {...globalStyles.flexRowView, width: 'auto'},
  headerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  headerRightTitle: {
    fontSize: 20,
    color: '#1e7fc9',
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginTop: 30,
    marginBottom: 4,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 20,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  title: {
    fontSize: 15,
    fontWeight: '300',
    paddingLeft: 20,
  },
  postImg: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: 30,
  },
  checkMark: {height: 10, width: 10},
  separator: {
    backgroundColor: 'rgba(218, 218, 218, 0.80)',
    height: 1,
  },
});

export default PostShareScreen;
