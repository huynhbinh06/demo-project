import {Dimensions, StyleSheet} from 'react-native';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    width: screenWidth - 30,
    alignItems: 'flex-start',
    paddingHorizontal: screenWidth * 0.02,
    paddingVertical: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.02,
    backgroundColor: '#BDC3C7',
  },
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
  textDate: {
    fontWeight: "500",
    marginTop: screenHeight * 0.02,
  }
});
