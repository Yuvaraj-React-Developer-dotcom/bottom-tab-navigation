import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, StyleSheet, View} from 'react-native';
import ProfileScreen from '../modules/ProfileModule/ProfileScreen';
const Stack = createNativeStackNavigator();
function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
export default ProfileStack;

const styles = StyleSheet.create({});
