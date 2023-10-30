import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../../common/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {userregistrationdata} from './store/registrationMiddleware';
import {AppDispatch} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

interface Screen {
  navigation: any;
}

interface UserData {
  email: string;
  password: string;
  address: string;
  gender: string;
  name: string;
}

const RegistrationScreen: React.FC<Screen> = ({navigation}) => {
  const [isSelected, setSelection] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const dispatch: AppDispatch = useDispatch();

  const navigateToLogin = (values: UserData) => {
    dispatch(userregistrationdata([values]))
      .then((response: any) => {
        if (response.payload) {
          navigation.navigate('Login');
        } else {
          console.log('Data set is not coming');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const Gotologin = () => {
    navigation.navigate('Login');
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        address: '',
        gender: '',
        name: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values: UserData) => {
        setUserData(values);
        navigateToLogin(values);
      }}>
      {({handleSubmit, handleBlur, handleChange, values, touched, errors}) => (
        <View style={styles.container}>
          <View style={styles.imageControl}>
            <View style={styles.imagearea}>
              <Image
                source={require('../../assets/Image/logo.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.centeredContainer}>
            <Text style={styles.TextHeader}>Registration</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.inputField}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <TextInput
              placeholder="Gender"
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              style={styles.inputField}
            />
            {touched.gender && errors.gender && (
              <Text style={styles.errorText}>{errors.gender}</Text>
            )}
            <TextInput
              placeholder="Address"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
              style={styles.inputField}
            />
            {touched.address && errors.address && (
              <Text style={styles.errorText}>{errors.address}</Text>
            )}
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputField}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.inputField}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>
          <LinearGradient
            style={styles.linearButton}
            colors={['#26b5b5', '#4eba83']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <CustomButton handleSubmit={handleSubmit} styleProps={true} />
          </LinearGradient>
          <TouchableOpacity onPress={Gotologin}>
            <Text style={styles.loginLink}>
              Already have an account? <Text style={styles.link}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  centeredContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  inputField: {
    borderRadius: 20,
    borderColor: 'gray',
    marginBottom: 10,
    width: '100%',
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  acceptTermsText: {
    fontSize: 16,
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageControl: {
    width: '100%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagearea: {
    height: '100%',
    width: '40%',
  },
  TextHeader: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  loginLink: {
    marginTop: 40,
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  link: {
    color: '#26b5b5',
    fontWeight: '400',
    fontSize: 16,
  },
  label: {
    margin: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  linearButton: {
    borderRadius: 20,
    marginTop: 20,
  },
});
