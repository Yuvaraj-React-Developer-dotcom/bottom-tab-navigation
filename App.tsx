import React from 'react';
import {View, Text, Platform} from 'react-native';
import CustomStatusBar from './src/common/CustomStatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProvider from './src/navigation/AppProvider';
import AppLayout from './src/navigation/AppLayout';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>{Platform.OS === 'ios' && <CustomStatusBar />}
      <AppLayout/>
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
