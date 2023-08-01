import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import { styles as globalStyles } from '../../global/styles';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../global/constants';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
// import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
// import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
// import {faSortDesc} from '@fortawesome/free-solid-svg-icons/faSortDesc';
// import {faClone} from '@fortawesome/free-solid-svg-icons/faClone';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons/faExpandAlt';
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons/faCompressAlt';
// import {faVideo} from '@fortawesome/free-solid-svg-icons/faVideo';
// import {RootStackParamList} from '../../global/Type';
// import IconTextButton from '../../components/IconTextButton';
import IconButton from '../../components/IconButton';
// import ColoredIconButton from '../../components/ColoredIconButton';
// import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InstagramLikeImageCropper from 'react-native-instagram-like-image-cropper';
import Button from '../../components/Button';
// import CameraRoll from '@react-native-community/cameraroll';
import { InstagramLikePicker } from 'react-native-instagram-like-picker';

// import {showImagePicker, libraryPicker, videoPicker} from 'react-native-ig-image-picker';

type Props = NativeStackScreenProps<RootStackParamList>;

export const GalleryScreen = ({ navigation, route }: Props) => {
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
  const video = {
    src: require('../../assets/images/gallery/gallery(13).mp4'),
    id: 100,
  };
  const [selectedId, setSelectedId] = useState(1);
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [zoomInOut, setZoomInOut] = useState(false);
  // const [croppedImage, setCroppedImage] = useState([]);
  // const [croppedImage, setCroppedImage] = useState('');
  const croppedImg = useRef('');

  const onPressSelectImage = () => {
    setSelectMultiple(true);
    setZoomInOut(false);
  };

  const onPressUnselectImage = () => {
    setSelectMultiple(false);
  };

  const getIndex = gallery => {
    const exist = selectedImages.some(obj => obj.id === gallery.id);
    if (exist) {
      return selectedImages.findIndex(obj => obj.id === gallery.id);
    }
    return -1;
  };

  const onImageClicked = gallery => {
    setSelectedId(gallery.id);
    if (selectMultiple) {
      const exist = selectedImages.some(obj => obj.id === gallery.id);
      let temp = selectedImages;
      if (exist) {
        temp = selectedImages.filter(obj => obj.id !== gallery.id);
      } else {
        if (selectedImages.length > 9) {
          ToastAndroid.show(
            'Hey! Kidding? You have already picked all 10 images.',
            ToastAndroid.LONG,
          );
          return;
        } else {
          temp.push(gallery);
        }
      }
      setSelectedImages(temp);
    }
  };

  const OnPressZoom = () => {
    if (zoomInOut) {
      setZoomInOut(false);
    } else {
      setZoomInOut(true);
    }
  };

  const OnCropped = data => {
    console.log('Cropped------:', data);
    // setCroppedImage(data);
    croppedImg.current = data;
    console.log('Cropped------:::::::::', croppedImg);
  };

  // console.log('zoomInOut', zoomInOut)
  const styles = StyleSheet.create({
    tooltip: {
      position: 'absolute',
      bottom: 47,
      right: -5,
      backgroundColor: '#282c34',
      padding: 12,
      borderRadius: 10,
    },
    gridContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    gridLine: {
      position: 'absolute',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: 0.2,
    },
    verticalLine: {
      top: 0,
      bottom: 0,
      borderColor: 'white',
      borderWidth: 0.5,
      left: '33.33%',
    },
    horizontalLine: {
      left: 0,
      right: 0,
      borderColor: 'white',
      borderWidth: 0.5,
      top: '33.33%',
    },
    image: {
      resizeMode: 'cover',
      width: '100%',
      height: SCREEN_HEIGHT / 2 - 50,
      transform: [{ scale: 1.5 }],
    },
  });

  return (
    <SafeAreaContainerView>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'space-between',
          // paddingBottom: 5,
          paddingHorizontal: 15,
          height: 40,
          backgroundColor: 'black',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/rightIcon.png')}
            tintColor={'white'}
            resizeMode="contain"
            style={{ height: 20, width: 20 }}
          />
          {/* <FontAwesomeIcon
            icon="fa-light fa-xmark"
            style={{color: '#ffffff'}}
          /> */}
          {/* <Icon path={mdiClose} size={1} /> */}
          {/* <Icon size={30} color={'white'} name="close" /> */}
          {/* <FontAwesomeIcon
                        icon={faXmark}
                        size={40}
                        style={{ color: '#ffffff', marginTop: 15, marginLeft: 5 }}
                    /> */}
        </TouchableOpacity>
        <View style={{ ...globalStyles.flexRowView, width: 'auto' }}>
          <Text
            style={{
              fontSize: 16,
              color: '#FFF',
              fontWeight: '600',
            }}>
            New post
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Filter', {
              image: zoomInOut
                ? croppedImg.current
                : Image.resolveAssetSource(
                  galleries.find(gallery => gallery.id === selectedId)?.src,
                ).uri,
            })
          }>
          <Text
            style={{
              fontSize: 16,
              color: '#1e7fc9',
              fontWeight: '600',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          position: 'relative',
          overflow: 'hidden',
        }}>
        {/* {galleries.find(gallery => gallery.id === selectedId)?.type != 'video' || true ?  */}
        {/* <View style={{}}> */}
        {zoomInOut ? (
          <InstagramLikeImageCropper
            image={Image.resolveAssetSource(
              galleries.find(gallery => gallery.id === selectedId)?.src,
            )}
            onCropped={data => OnCropped(data.croppedUri)}
            widht="100%"
            height={SCREEN_HEIGHT / 2 - 50}
          />
        ) : (
          <Image
            source={galleries.find(gallery => gallery.id === selectedId)?.src}
            style={{ width: '100%', height: SCREEN_HEIGHT / 2 - 50 }}
          />
        )}
        {/* {zoomInOut && <View style={styles.gridContainer}>
                    <View style={[styles.gridLine, styles.verticalLine]} />
                    <View style={[styles.gridLine, styles.verticalLine, { left: '66.66%' }]} />
                    <View style={[styles.gridLine, styles.horizontalLine]} />
                    <View style={[styles.gridLine, styles.horizontalLine, { top: '66.66%' }]} />
                </View>} */}
        {!zoomInOut
          ? selectMultiple === false &&
          galleries.find(gallery => gallery.id === selectedId)?.type !==
          'video' && (
            // <Button
            // icon={
            //     <Icon
            //     name="unfold-more-vertical"
            //     size={16}
            //     color="white"
            //     style={{position:'absolute'}}
            //     />
            // }

            // buttonStyle={{borderRadius:100, backgroundColor:'#282c34', bottom:30, left: 10, position:'absolute'}}
            // title=""
            // />

            <IconButton
              makeStyle={{
                color: '#FFF',
                position: 'absolute',
                bottom: 10,
                left: 10,
              }}
              icon={faExpandAlt}
              onPress={OnPressZoom}
            />
          )
          : selectMultiple === false &&
          galleries.find(gallery => gallery.id === selectedId)?.type !==
          'video' && (
            // <Button
            // icon={
            //     <Icon
            //     name="unfold-more-vertical"
            //     size={16}
            //     color="white"
            //     />
            // }
            // buttonStyle={{borderRadius:100, backgroundColor:'#282c34',   bottom:50, position:'absolute', zIndex:4}}
            // title=""
            // />
            <IconButton
              makeStyle={{
                color: '#FFF',
                position: 'absolute',
                bottom: 10,
                left: 10,
              }}
              icon={faCompressAlt}
              onPress={OnPressZoom}
            />
          )}
        {/* </View> */}
        {/* 
                :
                <Video
                  source={galleries.find(gallery => gallery.id === selectedId)?.src}
                  style={{width: '100%', height: SCREEN_HEIGHT / 2 - 50}}
                  controls={true}
                  repeat={true}
                  paused={false}
                  resizeMode={'cover'}
                />
                
                } */}
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: 'space-between',
          paddingHorizontal: 5,
          backgroundColor: 'black',
          position: 'relative',
          height: 50,
        }}>
        <View style={{ ...globalStyles.flexRowView, width: 'auto' }}>
          {/* <Text
            style={{
              fontSize: 16,
              color: '#FFF',
              fontWeight: '600',
              marginLeft: 5,
            }}>
            Recents&nbsp;
          </Text>
          <Image
            source={require('../../assets/icons/downArrow.png')}
            tintColor={'#FFF'}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          /> */}
        </View>
        <View
          style={{
            ...globalStyles.flexRowView,
            width: 'auto',
            marginRight: 5,
          }}>
          {selectMultiple === false ? (
            <Button
              icon={
                <Icon
                  name="card-multiple-outline"
                  size={16}
                  color="white"
                  style={{ transform: [{ rotateY: '180deg' }] }}
                />
              }
              buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#282c34',
                paddingVertical: 7,
              }}
              containerStyle={{ paddingVertical: 1 }}
              onPress={onPressSelectImage}
              titleStyle={{ fontSize: 10, marginLeft: 5 }}
              title="Select multiple"
            />
          ) : (
            <Button
              icon={
                <Icon
                  name="card-multiple-outline"
                  size={16}
                  color="white"
                  style={{ transform: [{ rotateY: '180deg' }] }}
                />
              }
              buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#1e7fc9',
                paddingVertical: 7,
              }}
              containerStyle={{ paddingVertical: 1 }}
              onPress={onPressUnselectImage}
              titleStyle={{ fontSize: 13, marginLeft: 5 }}
            />
          )}
          <IconButton
            makeStyle={{ color: '#FFF', marginLeft: 10 }}
            icon={faCamera}
          />
          {/* <Button
            icon={<Icon name="camera-outline" size={16} color="white" />}
            buttonStyle={{borderRadius: 30, backgroundColor: '#282c34'}}
            style={{marginLeft: 10}}
            title=""
          /> */}
        </View>
        {selectMultiple && (
          <View style={styles.tooltip}>
            <Text style={{ color: '#FFF', fontSize: 13 }}>
              Share up to 10 photos and videos in one post.
            </Text>
          </View>
        )}
        {/* {selectMultiple && (
          <FontAwesomeIcon
            icon={faSortDesc}
            style={{
              color: '#282c34',
              position: 'absolute',
              top: -20,
              right: 52,
            }}
            size={30}
          />
        )} */}
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: SCREEN_HEIGHT / 4,
          backgroundColor: 'black',
        }}>
        <View
          style={{
            ...globalStyles.flexRowView,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 1,
            backgroundColor: 'black',
          }}>
          {galleries.map((gallery, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  onImageClicked(gallery);
                }}
                style={{ backgroundColor: '#FFF', position: 'relative' }}>
                <Image
                  source={gallery.src}
                  style={[
                    {
                      width: SCREEN_WIDTH / 4 - 1,
                      height: SCREEN_WIDTH / 4 - 1,
                    },
                    gallery.id === selectedId
                      ? {
                        opacity: 0.4,
                      }
                      : {},
                  ]}
                />
                {gallery.type === 'video' && (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      backgroundColor: '#333',
                      width: 25,
                    }}>
                    <Text style={{ color: '#FFF', textAlign: 'center' }}>
                      {gallery.time}s
                    </Text>
                  </View>
                )}
                {/* {gallery.type === 'video' && (
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: '#333',
                      width: 25,
                      alignItems: 'center',
                    }}>
                    <FontAwesomeIcon
                      size={20}
                      icon={faVideo}
                      style={{color: '#FFF'}}
                    />
                  </View>
                )} */}
                {selectMultiple && (
                  <View
                    style={{
                      backgroundColor:
                        getIndex(gallery) === -1 ? 'white' : '#1e7fc9',
                      borderRadius: 15,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      width: 20,
                      height: 20,
                      opacity: getIndex(gallery) === -1 ? 0.5 : 1,
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      borderWidth: 1,
                      borderColor: '#fff',
                    }}>
                    <Text style={{ color: '#fff' }}>
                      {getIndex(gallery) === -1 ? '' : getIndex(gallery) + 1}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};
