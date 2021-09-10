import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Dimensions, FlatList} from 'react-native';
import workShiftApi from '../../api/workShiftApi';
import ItemPicker from '../../components/HomeComponents/ItemPicker';
import {styles} from './homeStyles';

// let screenWidth = Math.round(Dimensions.get('window').width);
// let screenHeight = Math.round(Dimensions.get('window').height);

const HomeScreen = () => {
  const [isCheckedItem, setIsCheckedItem] = useState(false);
  const [data, setData] = useState();

  const _onCheckedItem = async (item, index) => {
    const sub = 'subscribe';
    const unSub = 'unsubscribe';
    try {
      const response = await workShiftApi.updateWorkShift(item.id, unSub);
      console.log('---update----', response);
      getAllList();
      if (response.status === false) {
        const response = await workShiftApi.updateWorkShift(item.id, sub);
        console.log(response);
        getAllList();
      }
      // const response = await workShiftApi.updateWorkShift(item.id, sub);
      // console.log('---update----', response);
      // getAllList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllList();
  }, []);

  const getAllList = async () => {
    try {
      const response = await workShiftApi.getAllWorkShifts(
        1630917646,
        1631436046,
      );
      setData(response.work_shifts);
      //   console.log(response.work_shifts[0].users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <FlatList
          contentContainerStyle={styles.itemContainer}
          data={data}
          keyExtractor={item => item?.id}
          renderItem={({item, index}) => (
            <View>
              <Text style={styles.textDate}>
                {moment
                  .unix(item?.work_shift_session?.start_time)
                  .format('dddd, MM/DD/YYYY')}
              </Text>
              <ItemPicker
                // isChecked={isCheckedItem}
                data={data}
                pressItem={_onCheckedItem}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
