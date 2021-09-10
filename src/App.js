import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import {RootNavigator} from './routes/RootNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
