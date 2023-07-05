/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RtnTurboHelper from 'rtn-turbo-modules-helper/src/NativeHelper';
import {Data} from './data';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const string = JSON.stringify(Data);
    console.log('string length:', string.length);
    console.log('data length:', Data.length);

    setTimeout(() => {
      console.log('^^^^^^^^^^^^^^^RtnTurboHelper string^^^^^^^^^^^^^^^');
      const timeA = Date.now();
      RtnTurboHelper.transmitString(string).then(res => {
        console.log(Date.now() - timeA);
        console.log('^^^^^^^^^^^^^^^RtnTurboHelper string^^^^^^^^^^^^^^^');
      });
    }, 1000);
    setTimeout(() => {
      console.log('^^^^^^^^^^^^^^^NativeModules string^^^^^^^^^^^^^^^');
      const timeB = Date.now();
      NativeModules.EdisonRCTBridge?.transmitString(string).then(res => {
        console.log(Date.now() - timeB);
        console.log('^^^^^^^^^^^^^^^NativeModules string^^^^^^^^^^^^^^^');
      });
    }, 2000);
    setTimeout(() => {
      console.log('^^^^^^^^^^^^^^^RtnTurboHelper json^^^^^^^^^^^^^^^');
      const timeA = Date.now();
      RtnTurboHelper.transmitJSON(Data).then(res => {
        console.log(Date.now() - timeA);
        console.log('^^^^^^^^^^^^^^^RtnTurboHelper json^^^^^^^^^^^^^^^');
      });
    }, 4000);
    setTimeout(() => {
      console.log('^^^^^^^^^^^^^^^NativeModules json^^^^^^^^^^^^^^^');
      const timeB = Date.now();
      NativeModules.EdisonRCTBridge?.transmitJSON(Data).then(res => {
        console.log(Date.now() - timeB);
        console.log('^^^^^^^^^^^^^^^NativeModules json^^^^^^^^^^^^^^^');
      });
    }, 6000);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
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
