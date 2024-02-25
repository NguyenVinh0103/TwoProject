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

import {
  IMG_BACKGROUNDLOGIN,
  IMG_LOGOLOGIN,
  IC_FACEBOOK,
  IC_TWITTER,
} from '../../assets';
import {normalize, normalizeHorizontal} from '../../helper';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

export const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        style={styles.background}
        source={IMG_BACKGROUNDLOGIN}
        resizeMode="contain">
        <View style={styles.content}>
          <FastImage
            source={IMG_LOGOLOGIN}
            resizeMode="contain"
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.txt}>
          <Text style={styles.txtWelcome}>{'Welcome,'}</Text>
          <Text style={styles.txtSayHello}>
            {'Let’s explore your next trip!'}
          </Text>
        </View>
        <View style={styles.border}>
          <TextInput
            placeholder="Phone, email or username"
            placeholderTextColor="#727272"
            style={styles.tipUsername}
          />
        </View>
        <View style={styles.border}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#727272"
            style={styles.tipPassword}
          />
        </View>
        <Text style={styles.txtLoginAccount}>{'Login with account'}</Text>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.borderLogo}>
            <FastImage
              source={IC_FACEBOOK}
              resizeMode="contain"
              style={styles.imgFacebook}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.borderLogo}>
            <FastImage
              source={IC_TWITTER}
              resizeMode="contain"
              style={styles.imgTwitter}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.btnSignIn}>
          <Text style={styles.txtSignIn}>{'Sign in'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.txtAcc}>
          <Text style={styles.txtCreateAccount}>
            {'Don’t have any account? '}
            <Text style={styles.txtRegister}>{'Register'}</Text>
          </Text>
        </TouchableOpacity>
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
  imgLogo: {
    height: normalize(400),
    aspectRatio: 1,
    alignSelf: 'center',
  },
  txt: {
    position: 'absolute',
    marginTop: normalize(300),
    marginLeft: normalizeHorizontal(40),
  },
  txtWelcome: {
    fontSize: normalize(28),
    fontWeight: '400',
    lineHeight: normalize(42),
    color: '#000',
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: normalizeHorizontal(20),
    marginBottom: normalize(40),
  },
  tipUsername: {
    width: '90%',
    alignSelf: 'center',
    height: normalize(50),
    fontSize: normalize(16),
  },
  tipPassword: {
    width: '90%',
    alignSelf: 'center',
    height: normalize(50),
    fontSize: normalize(16),
  },
  txtLoginAccount: {
    fontSize: normalize(18),
    fontWeight: '500',
    lineHeight: normalize(26),
    marginLeft: normalizeHorizontal(20),
  },
  flex: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  borderLogo: {
    borderWidth: 1,
    borderColor: '#000',
    width: normalizeHorizontal(80),
    alignItems: 'center',
    borderRadius: 10,
    height: normalize(50),
    justifyContent: 'center',
    marginHorizontal: normalizeHorizontal(20),
    marginTop: normalize(20),
  },
  imgFacebook: {
    height: normalize(28),
    aspectRatio: 1,
  },
  imgTwitter: {
    height: normalize(28),
    aspectRatio: 1,
  },
  btnSignIn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000D3D',
    width: normalizeHorizontal(200),
    height: normalize(40),
    borderRadius: 20,
    marginTop: normalize(20),
  },
  txtSignIn: {
    color: '#fff',
    fontSize: normalize(18),
    lineHeight: normalize(26),
    fontWeight: '500',
  },
  txtAcc: {
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  txtCreateAccount: {
    color: '#000',
    fontSize: normalize(14),
    lineHeight: normalize(20),
    fontWeight: '500',
  },
  txtRegister: {
    fontSize: normalize(14),
    fontWeight: '700',
    lineHeight: normalize(20),
    color: '#000',
  },
});
