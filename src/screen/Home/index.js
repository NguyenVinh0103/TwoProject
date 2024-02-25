import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import {IC_BACK, IMG_AVATAR, IMG_FLORIDA} from '../../assets';
import {normalize, normalizeHorizontal} from '../../helper';
import {useNavigation} from '@react-navigation/native';
import {Onboarding} from '../../component';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View style={styles.flex}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.borderIcBack}>
            <FastImage
              source={IC_BACK}
              style={styles.icBack}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.txtContent}>{'Hi, Alvia!'}</Text>
          <Text style={styles.txtSayHello}>
            {'Where are you thinking of going?'}
          </Text>
        </View>
        <View style={styles.img}>
          <FastImage
            source={IMG_AVATAR}
            style={styles.imgAvatar}
            resizeMode="contain"
          />
        </View>
      </View>
      <Onboarding />
      <Text style={styles.txtExplore}>{'Explore'}</Text>
      <FastImage source={IMG_FLORIDA} style = {styles.imgExplore} resizeMode = 'contain' /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  borderIcBack: {
    height: normalize(40),
    aspectRatio: 1,
    borderRadius: 100 / 2,
    backgroundColor: '#d97000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icBack: {
    height: normalize(32),
    aspectRatio: 1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(50),
    marginLeft: normalizeHorizontal(20),
    alignItems: 'center',
  },
  imgAvatar: {
    height: normalize(60),
    aspectRatio: 1,
    borderRadius: 100 / 2,
    borderWidth: 1,
    marginRight: normalizeHorizontal(20),
  },
  txtContent: {
    fontSize: normalize(30),
    fontWeight: '500',
    lineHeight: normalize(46),
    color: '#000',
    marginTop: normalize(10),
  },
  txtSayHello: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: '#000',
    lineHeight: normalize(22),
  },
  txtExplore: {
    fontSize: normalize(20),
    fontWeight: '500',
    color: '#000',
    lineHeight: normalize(22),
    marginLeft: normalizeHorizontal(20),
  },
  imgExplore:{
    height: normalize(300),
    aspectRatio: 1,
    alignSelf: 'center',
    marginTop: normalize(20)
  }
});
