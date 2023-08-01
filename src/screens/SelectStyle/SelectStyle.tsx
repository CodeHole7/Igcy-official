import React, {useState, useRef, useEffect} from 'react';

import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
// import {faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons/faWandMagicSparkles';
import {HomeMenuScreen} from '../Home/HomeMenu';
import ToggleButton from '../../components/ToggleButton';
import {styles as localStyles} from './style';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../global/constants';
import {RootStackParamList} from '../../global/Type';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FILTERS} from './Filters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// type Props = NativeStackScreenProps<RootStackParamList, 'Filter'>;
// type ItemData = {
//     title: string;
//     image: string;
//     id: number;
//     style:any;
// };
// type ItemProps = {
//     item: ItemData;
//     onPress: () => void;
// };

export const SelectStyleScreen = ({navigation, route}) => {
  const [selectedFilterIndex, setIndex] = useState(0);
  const [image, SetImage] = useState('');
  const [thumbnail, setThumbnail] = useState({});

  useEffect(() => {
    getImageFromNavigation();
  });

  const getImageFromNavigation = () => {
    if (route?.params?.image) {
      setThumbnail(route?.params?.image);
    }
  };

  const onExtractImage = ({nativeEvent}) => {
    SetImage(nativeEvent.uri);
    extractedUri.current = nativeEvent.uri;
  };

  const onSelectFilter = selectedIndex => {
    setIndex(selectedIndex);
  };

  const extractedUri = useRef(image);

  const renderFilterComponent = ({item, index}) => {
    const FilterComponent = item.filterComponent;
    const image = (
      <Image
        style={styles.filterSelector}
        source={{uri: thumbnail}}
        // defaultSource={require('../../Assests/Pick.png')}
      />
    );
    return (
      <TouchableOpacity onPress={() => onSelectFilter(index)}>
        <Text style={styles.filterTitle}>{item.title}</Text>
        <FilterComponent image={image} />
      </TouchableOpacity>
    );
  };

  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;

  return (
    <SafeAreaContainerView>
      <ScrollView
        style={{width: '100%', height: SCREEN_HEIGHT, backgroundColor: '#000'}}>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            height: 40,
            borderColor: 'black',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Gallery')}
            style={{paddingRight: 20}}>
            <Image
              source={require('../../assets/icons/rightIcon.png')}
              tintColor={'white'}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>

          <Image
            source={require('../../assets/icons/editPencile.png')}
            tintColor={'white'}
            resizeMode="contain"
            style={{height: 30, width: 30}}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('CreateNewPostDetail')}>
            <Text style={{fontSize: 16, color: '#1e7fc9', fontWeight: '600'}}>
              {' '}
              Next{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{...globalStyles.flexRowView}}>
          {selectedFilterIndex === 0 ? (
            <Image
              style={{width: '100%', height: SCREEN_HEIGHT / 2 - 50}}
              source={{uri: thumbnail}}
              resizeMode="contain"
            />
          ) : (
            Object.keys(thumbnail).length && (
              <SelectedFilterComponent
                onExtractImage={onExtractImage}
                extractImageEnabled={true}
                image={
                  <Image
                    style={styles.default_Img}
                    source={{uri: thumbnail}}
                    resizeMode="contain"
                  />
                }
              />
              // <Image
              //     style={{width: '100%', height: SCREEN_HEIGHT / 2 - 50}}
              //     source={{ uri: thumbnail}}
              //     resizeMode='contain'
              // />
            )
          )}
        </View>
        <View style={{...globalStyles.flexColView, marginTop: 70}}>
          <FlatList
            horizontal={true}
            data={FILTERS}
            renderItem={renderFilterComponent}
            keyExtractor={item => item.title}
            // extraData={selectedId}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 85,
          }}>
          <Button style={{opacity: 0.6}} title="Filter"></Button>
          <Button style={{opacity: 0.6}} title="Edit"></Button>
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};

const styles = StyleSheet.create({
  default_Img: {
    flex: 1,
    width: wp('100%'),
    height: SCREEN_HEIGHT / 2 - 50,
    alignSelf: 'center',
    alignContent: 'center',
  },

  keyboardContainer: {
    width: wp('90%'),
  },
  buttonView: {
    marginTop: wp('7%'),
    marginBottom: wp('3%'),
  },
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterSelector: {
    width: 100,
    height: 100,
    margin: 5,
  },
  filterTitle: {
    // marginTop: 70,
    fontSize: 12,
    textAlign: 'center',
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
});
