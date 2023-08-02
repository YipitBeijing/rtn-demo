/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  NativeModules,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RtnTurboHelper from 'rtn-turbo-modules-helper/src/NativeHelper';
import {Data} from './data';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="NativeModules string"
        onPress={() => {
          const string = JSON.stringify(Data);
          console.log(
            '^^^^^^^^^^^^^^^^^ NativeModules string ^^^^^^^^^^^^^^^^^',
          );
          const time = Date.now();
          NativeModules.EdisonRCTBridge?.transmitString(string).then(res => {
            const passTime = Date.now() - time;
            console.log(
              `---> transmit data to native and receive response for ${passTime}ms`,
            );
            console.log(
              '^^^^^^^^^^^^^^^^^ NativeModules string ^^^^^^^^^^^^^^^^^',
            );
          });
        }}
      />
      <Button
        title="TurboNativeModules string"
        onPress={() => {
          const string = JSON.stringify(Data);
          console.log(
            '^^^^^^^^^^^^^^^ TurboNativeModules string ^^^^^^^^^^^^^^^',
          );
          const time = Date.now();
          RtnTurboHelper.transmitString(string).then(res => {
            const passTime = Date.now() - time;
            console.log(
              `---> transmit data to native and receive response for ${passTime}ms`,
            );
            console.log(
              '^^^^^^^^^^^^^^^ TurboNativeModules string ^^^^^^^^^^^^^^^',
            );
          });
        }}
      />
      <Button
        title="NativeModules json"
        onPress={() => {
          console.log('^^^^^^^^^^^^^^^ NativeModules json ^^^^^^^^^^^^^^^');
          const time = Date.now();
          NativeModules.EdisonRCTBridge?.transmitJSON(Data).then(res => {
            const passTime = Date.now() - time;
            console.log(
              `---> transmit data to native and receive response for ${passTime}ms`,
            );
            console.log('^^^^^^^^^^^^^^^ NativeModules json ^^^^^^^^^^^^^^^');
          });
        }}
      />
      <Button
        title="TurboNativeModules json"
        onPress={() => {
          console.log(
            '^^^^^^^^^^^^^^^ TurboNativeModules json ^^^^^^^^^^^^^^^',
          );
          const time = Date.now();
          RtnTurboHelper.transmitJSON(Data).then(res => {
            const passTime = Date.now() - time;
            console.log(
              `---> transmit data to native and receive response for ${passTime}ms`,
            );
            console.log(
              '^^^^^^^^^^^^^^^ TurboNativeModules json ^^^^^^^^^^^^^^^',
            );
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
