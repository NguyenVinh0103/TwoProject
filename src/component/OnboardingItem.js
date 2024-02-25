import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  useWindowDimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../helper';
import LinearGradient from 'react-native-linear-gradient';

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['#000C35', '#C4C4C4']}
        style={styles.linearGradient}>
        <View style={styles.flex}>
          <View style = {styles.txt}>
            <Text style={styles.txtName}>{item.name}</Text>
            <Text style={styles.txtPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style = {styles.btn}>
            <Text style = {styles.txtBook}>{item.btnBook}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient:{
    borderRadius: 12,
    width: normalizeHorizontal(300),
    marginTop: normalize(20),
    height: normalize(150)
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: normalizeHorizontal(20)
  },
  txt:{
    marginTop: normalize(20),
  },
  txtName: {
    width: normalizeHorizontal(250),
    fontSize: normalize(22),
    lineHeight: normalize(32),
    fontWeight: '500',
    color: '#fff'
  },
  txtPrice:{
    fontSize: normalize(30),
    lineHeight: normalize(46),
    fontWeight: '500',
    color: '#fff'
  },
  btn:{
    backgroundColor: '#fff',
    width: normalizeHorizontal(80),
    alignItems:'center',
    height: normalize(30),
    justifyContent: 'center',
    borderRadius: 16,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: normalize(20)
  },
  txtBook:{
    fontSize: normalize(16),
    fontWeight: '500',
    lineHeight: normalize(22),
    color: '#000C35'
  }
});
