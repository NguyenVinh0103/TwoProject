import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import {IMG_BACKGROUND, IMG_LOGO} from '../../assets';
import {normalize} from '../../helper';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

export const Hello = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        style={styles.background}
        source={IMG_BACKGROUND}
        resizeMode="contain">
        <View style={styles.content}>
          <FastImage
            source={IMG_LOGO}
            resizeMode="contain"
            style={styles.imgLogo}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.btn}>
            <Text style={styles.txt}>{'Next'}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: height,
    width: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(150),
  },
  imgLogo: {
    height: normalize(400),
    aspectRatio: 1,
  },
  btn: {
    backgroundColor: '#000D3D',
    width: normalize(150),
    aspectRatio: 4,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: normalize(22),
    fontWeight: '500',
    lineHeight: normalize(32),
  },
});
