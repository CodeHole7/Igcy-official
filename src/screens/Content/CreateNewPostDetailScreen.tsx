import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { AppStackParamList } from '../../navigation';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles as globalStyles } from '../../global/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-date-picker';

type Props = NativeStackScreenProps<AppStackParamList>;
const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CreateNewPostDetail = ({ navigation }: Props) => {
  const isDarkMode = true;

  const [commenting, setCommenting] = useState(false);
  const [linking, setLinking] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [formatedDate, setFormatedDate] = useState(
    `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`,
  );

  useEffect(() => {
    if (date !== null) {
      const month = Months[date.getMonth()];
      const formated_date = `${date.getDate()} ${month} ${date.getFullYear()}`;
      setFormatedDate(formated_date);
    }
  }, [date]);

  return (
    <SafeAreaView
      style={[styles.mainContainer, { backgroundColor: Colors.black }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.black}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/rightIcon.png')}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>New post</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostShareScreen')}>
          <Text style={styles.headerRightTitle}>Next</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/images/gallery/gallery(1).png')}
            style={styles.postImg}
          />
          <Text
            style={{
              paddingLeft: 20,
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
            }}>
            Share the story...
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.calenderContainer}>
            <View>
              {/* <Text style={styles.pannelTitle}>Schedule Date</Text>
              <Text style={styles.addLocationText}>Immdiately</Text> */}
              {date && <Text style={styles.pannelTitle}>{formatedDate}</Text>}
            </View>
            <Image
              source={require('../../assets/icons/calendar.png')}
              resizeMode="contain"
              style={styles.calenderIcon}
            />
          </TouchableOpacity>
          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Turn off Commenting</Text>
            <Switch
              trackColor={{ false: '#d3d3d3', true: '#000' }}
              thumbColor={'white'}
              onValueChange={() => setCommenting(!commenting)}
              value={commenting}
              style={styles.switch}
            />
          </View>
          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Turn off Liking</Text>
            <Switch
              trackColor={{ false: '#d3d3d3', true: '#000' }}
              thumbColor={'white'}
              onValueChange={() => setLinking(!linking)}
              value={linking}
              style={styles.switch}
            />
          </View>
          <View style={styles.pannelContainer}>
            <Text style={styles.pannelTitle}>Location</Text>
            <View style={styles.locationBtn}>
              <Text style={styles.addLocationText}>Add Location</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {open && (
        <DatePicker
          modal
          mode="date"
          maximumDate={new Date()}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: { flex: 1, backgroundColor: 'white' },
  headerContainer: {
    ...globalStyles.flexRowView,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    // height: 40,
    backgroundColor: 'white'
  },
  backArrow: { height: 15, width: 15 },
  headerTitleContainer: { ...globalStyles.flexRowView, width: 'auto' },
  headerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  headerRightTitle: {
    fontSize: 16,
    color: '#1e7fc9',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  imgContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E9E8E8',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  postImg: { height: 110, width: 150 },
  middleContainer: { paddingTop: 0 },
  pannelContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  pannelTitle: { fontSize: 16, fontWeight: '600', fontFamily: 'Montserrat' },
  locationBtn: {
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 75,
    borderRadius: 5,
    fontFamily: 'Montserrat',
  },
  addLocationText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'grey',
    fontFamily: 'Montserrat',
  },
  calenderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  calenderIcon: { height: 30, width: 30, marginEnd: 12 },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});

export default CreateNewPostDetail;
