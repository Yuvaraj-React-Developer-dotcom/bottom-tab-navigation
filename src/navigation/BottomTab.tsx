import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import ListStack from './ListStack';
import DetailStack from './DetailStack';
import ProfileStack from './ProfileStack';
import SettingStack from './SettingStack';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 80,
            backgroundColor: '#38b89f',
            borderRadius: 40,
            paddingBottom: 10,
            margin: 10,
            background: 'red',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/s6z1wMh/hh1-removebg-preview.png'}
                : {uri: 'https://i.ibb.co/r7XX1RP/Hos-removebg-preview.png'};
            } else if (route.name === 'ListTab') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/F3WvrM0/l1-removebg-preview.png'}
                : {uri: 'https://i.ibb.co/GvpCTWt/list-removebg-preview.png'};
            } else if (route.name === 'DetailTab') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/R67cKVW/d1-removebg-preview.png'}
                : {uri: 'https://i.ibb.co/C1HLzVX/Det-removebg-preview.png'};
            } else if (route.name === 'ProfileTab') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/Bf4ZGQQ/p12-removebg-preview.png'}
                : {
                    uri: 'https://i.ibb.co/FDdKFdx/profs-removebg-preview.png',
                  };
            } else if (route.name === 'SettingTab') {
              iconName = focused
                ? {
                    uri: 'https://i.ibb.co/sVfwg0H/s1-removebg-preview.png',
                  }
                : {
                    uri: 'https://i.ibb.co/D5FCjPX/sets-removebg-preview-1.png',
                  };
            }
            return <Image style={{height: 40, width: 40}} source={iconName} />;
          },
        })}>
        <Tab.Screen
          name="HomeTab"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Home
              </Text>
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="ListTab"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                List
              </Text>
            ),
          }}
          component={ListStack}
        />
        <Tab.Screen
          name="DetailTab"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Detail
              </Text>
            ),
          }}
          component={DetailStack}
        />
        <Tab.Screen
          name="ProfileTab"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Profile
              </Text>
            ),
          }}
          component={ProfileStack}
        />
        <Tab.Screen
          name="SettingTab"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Setting
              </Text>
            ),
          }}
          component={SettingStack}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
