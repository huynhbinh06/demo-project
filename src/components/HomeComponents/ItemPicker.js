import moment from 'moment';
import React from 'react';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

const ItemPicker = ({pressItem, data}) => {
  const _onCheckedItem = (item, index) => {
    pressItem(item, index);
  };
  return data.map((item, index) => (
    <Pressable
      key={index}
      style={
        item?.users[0]?.id === 32964 ? styles.itemRowChecked : styles.itemRow
      }
      onPress={() => _onCheckedItem(item, index)}>
      {item?.users[0]?.id === 32964 ? (
        <View style={styles.firstSection}>
          <FastImage
            source={require('../../assets/images/random.jpeg')}
            style={styles.imgUser}
          />
          <Text style={styles.textStyle}>{'Huỳnh Bình'}</Text>
        </View>
      ) : (
        <View style={styles.firstSection}>
          <Text style={styles.textStyle}>{`${
            item?.work_shift_session?.name
          }: ${moment
            .unix(item?.work_shift_session?.start_time)
            .format('HH:MM')} - ${moment
            .unix(item?.work_shift_session?.end_time)
            .format('HH:MM')}`}</Text>
        </View>
      )}
      <View style={styles.firstSection}>
        <FastImage
          source={require('../../assets/images/random.jpeg')}
          style={styles.img}
        />
        <FastImage
          source={require('../../assets/images/random.jpeg')}
          style={styles.imgSec}
        />
        <View style={styles.badge}>
          <Text>{'+6'}</Text>
        </View>
      </View>
    </Pressable>
  ));
};

const styles = StyleSheet.create({
  itemRow: {
    width: screenWidth - 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#28B463',
    paddingHorizontal: screenWidth * 0.02,
    height: screenHeight * 0.06,
    borderRadius: screenWidth * 0.015,
    marginTop: screenHeight * 0.015,
  },
  itemRowChecked: {
    width: screenWidth - 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E74C3C',
    paddingHorizontal: screenWidth * 0.02,
    height: screenHeight * 0.06,
    borderRadius: screenWidth * 0.015,
    marginTop: screenHeight * 0.015,
  },
  firstSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgUser: {
    width: screenWidth * 0.07,
    height: screenWidth * 0.07,
    borderRadius: (screenWidth * 0.07) / 2,
  },
  img: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
    borderRadius: (screenWidth * 0.04) / 2,
  },
  imgSec: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
    borderRadius: (screenWidth * 0.04) / 2,
    marginHorizontal: screenWidth * 0.02,
  },
  badge: {
    backgroundColor: 'white',
    paddingHorizontal: screenWidth * 0.02,
    borderRadius: screenWidth * 0.018,
    marginRight: screenWidth * 0.02,
  },
  textStyle: {
    marginLeft: screenWidth * 0.02,
    color: 'white',
  },
});

export default ItemPicker;
