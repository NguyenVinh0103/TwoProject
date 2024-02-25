import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './src/navigation/RootNavigation';
import {Store} from './src/redux';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
