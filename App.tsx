import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SkiaShadow} from 'react-native-skia-shadow';

const App = () => {
  return (
    <View style={styles.container}>
      <SkiaShadow blur={5} dx={0} dy={0} color="blue" borderRadius={9999}>
        <TouchableOpacity>
          <View style={styles.circle} />
        </TouchableOpacity>
      </SkiaShadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 9999,
    backgroundColor: 'red',
  },
});
export default App;
