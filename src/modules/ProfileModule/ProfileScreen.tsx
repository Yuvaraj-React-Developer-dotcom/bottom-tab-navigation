import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
interface ScreenOne {
  navigation: any;
}
const ProfileScreen: React.FC<ScreenOne> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <Image
            source={{uri: 'https://i.ibb.co/5FqdZ0B/e1.jpg'}}
            style={styles.userImage}
          />
        </View>
        <View style={styles.userInfo}>
          <View style={styles.infoCounts}>
            <View style={styles.imageControl}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/934ntsP/j1-removebg-preview.png',
                }}
                style={styles.profileIcon}
              />
            </View>
            <Text style={styles.countName}>Heart rate</Text>
            <Text style={styles.countValue}>215bpm</Text>
          </View>
          <View style={styles.infoCounts}>
            <View style={styles.imageControl}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/XbXrZyD/fire-white.png',
                }}
                style={styles.profileIcon}
              />
            </View>
            <Text style={styles.countName}>calories</Text>
            <Text style={styles.countValue}>756cal</Text>
          </View>
          <View style={styles.infoCounts}>
            <View style={styles.imageControl}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/MftxbVK/n4-removebg-preview.png',
                }}
                style={styles.profileIcon}
              />
            </View>
            <Text style={styles.countName}>Weight</Text>
            <Text style={styles.countValue}>103lbs</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('screenOne');
          }}
          activeOpacity={0.7}
          style={styles.naviagationContainer}>
          <Text style={styles.userInfoOption}>MY Medical Record</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/rMQLY9B/w3-removebg-preview.png',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('screenOne');
          }}
          activeOpacity={0.7}
          style={styles.naviagationContainer}>
          <Text style={styles.userInfoOption}>Order a Mediscoot</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/rMQLY9B/w3-removebg-preview.png',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('screenOne');
          }}
          activeOpacity={0.7}
          style={styles.naviagationContainer}>
          <Text style={styles.userInfoOption}>Health Courage Repayment</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/rMQLY9B/w3-removebg-preview.png',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('screenOne');
          }}
          activeOpacity={0.7}
          style={styles.naviagationContainer}>
          <Text style={styles.userInfoOption}>Choice Your Assistant</Text>
          <Image
            source={{
              uri: 'https://i.ibb.co/rMQLY9B/w3-removebg-preview.png',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  profileContainer: {
    height: '50%',
    backgroundColor: '#38b89f',
  },
  profileImage: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  imageControl: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  countName: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  countValue: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoCounts: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContainer: {
    marginTop: -22,
    height: '54%',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  naviagationContainer: {
    height: '16%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  userInfoOption: {
    fontSize: 18,
    color: '#000000',
  },
  navIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
