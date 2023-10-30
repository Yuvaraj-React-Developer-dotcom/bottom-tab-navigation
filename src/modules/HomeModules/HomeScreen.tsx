import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import CardItems from './CardItems';

const HomeScreen = () => {
  const departmentNames = [
    'General care',
    'Pediatrics',
    'Cardiology',
    'Oncology',
    'Orthopedics',
    'Neurology',
    'Dermatology',
    'Gynecology',
    'Urology',
    'ENT',
    'Ophthalmology',
    'Radiology',
    'Psychiatry',
    'Dentistry',
    'Emergency Medicine',
    'Anesthesiology',
    'Surgery',
    'Nephrology',
    'Gastroenterology',
    'Pulmonology',
    'Endocrinology',
    'Rheumatology',
    'Hematology',
    'Infectious Disease',
    'Geriatrics',
    'Physical Therapy',
    'Occupational Therapy',
    'Dietetics',
    'Speech Therapy',
    'Radiation Oncology',
  ];

  const departmentItems = [];

  for (let i = 1; i <= 30; i++) {
    const randomIndex = Math.floor(Math.random() * departmentNames.length);
    const department = departmentNames[randomIndex];
    const doctorsCount = Math.floor(Math.random() * 1000);
    const relatedImage =
      'https://i.ibb.co/BcQkpQp/doctor-icon-vector-blue-PMM9-TJ.jpg';

    departmentItems.push({
      id: i,
      departmentName: department,
      doctorsCount: doctorsCount,
      relatedImage: relatedImage,
    });
  }

  console.log(departmentItems);

  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage}>
            <Image
              source={{uri: 'https://i.ibb.co/5FqdZ0B/e1.jpg'}}
              style={styles.userImage}
            />
            <View style={styles.userTextContainer}>
              <Text style={styles.userName}>Hi Enid</Text>
              <Text style={styles.userCaption}>Welcome back !</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.ibb.co/HhLWNm7/images-1-removebg-preview.png',
              }}
              style={styles.searchImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.userOptions}>
          <View style={styles.columnContainer}>
            <View style={styles.iconCaptionContainer}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/fSKnSD4/h11-removebg-preview.png',
                }}
                style={styles.columnImage}
              />
              <Text style={styles.iconCaption}>Clinic Visit</Text>
            </View>
            <View style={styles.iconCaptionContainer}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/PjJW0vk/h12-removebg-preview.png',
                }}
                style={styles.columnImage}
              />
              <Text style={styles.iconCaption}>Home Visit</Text>
            </View>
            <View style={styles.iconCaptionContainer}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/YNYg4yz/h17-removebg-preview.png',
                }}
                style={styles.columnImage}
              />
              <Text style={styles.iconCaption}>Video Consult</Text>
            </View>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.iconCaptionContainer}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/XVZdYWq/h14-removebg-preview.png',
                }}
                style={styles.columnImage}
              />
              <Text style={styles.iconCaption}>Pharmacy</Text>
            </View>
            <View style={styles.iconCaptionContainer}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/6yGWCfF/h15-removebg-preview.png',
                }}
                style={styles.columnImage}
              />
              <Text style={styles.iconCaption}>Diseases</Text>
            </View>
            <View style={styles.iconCaptionContainer}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/yBLshGr/h16-removebg-preview.png',
                }}
                style={styles.columnImage}
              />
              <Text style={styles.iconCaption}>Find Location</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.departmentContainer}>
        <Text style={styles.headline}>Departments</Text>
        <FlatList
          data={departmentItems}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => <CardItems listItem={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#38b89f',
    height: 300,
    // borderBottomRightRadius: 40,
    // borderBottomLeftRadius: 40,
    overflow: 'visible',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  userImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  profileImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userCaption: {
    color: '#FFF',
    fontSize: 14,
  },
  userTextContainer: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  searchImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  iconContainer: {
    marginTop: -180,
    marginHorizontal: 30,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  userOptions: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  columnImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  iconCaption: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 6,
  },
  iconCaptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    height: '100%',
    // borderWidth: 0.5,
  },
  departmentContainer: {
    // marginHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headline: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
