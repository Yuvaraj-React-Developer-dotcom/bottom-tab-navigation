import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import CustomButton from '../../common/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import constants from '../../utils/constants';

interface Screen {
  navigation: any;
}

const LoginScreen: React.FC<Screen> = ({navigation}) => {
  console.log(constants, 'find Color');
  const {data} = useSelector(
    ({userregistrationdata}: {userregistrationdata: any}) => {
      console.log(userregistrationdata?.registrationdata, 'show the data');
      return {
        data: userregistrationdata?.registrationdata,
      };
    },
  );

  const navigateToIndex = (values: {email: string; password: string}) => {
    console.log(values, 'match login data');
    const matchingUser = data.find((user: any) => user.email === values?.email);

    if (matchingUser) {
      if (matchingUser.password === values?.password) {
        console.log('Login successful');
        navigation.navigate('BottomNavigation');
      } else {
        console.log('Invalid password');
      }
    } else {
      console.log('User not found');
    }
  };

  const Gotoregistration = () => {
    navigation.navigate('Signup');
  };

  const validationSchema = Yup.object().shape({
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
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('Form values:', values);
        navigateToIndex(values);
      }}>
      {({handleSubmit, handleBlur, handleChange, values, touched, errors}) => (
        <View style={styles.container}>
          <View style={styles.centeredContainer}>
            <Image
              source={require('../../assets/Image/logo.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.centeredContainer}>
            <Text style={styles.TextHeader}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
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
            colors={[
              `${constants.linearstartcolor}`,
              `${constants.linearendcolor}`,
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <CustomButton
              handleSubmit={handleSubmit}
              styleProps={false}
              height={60}
            />
          </LinearGradient>
          <Pressable onPress={Gotoregistration}>
            <Text style={styles.loginLink}>
              New User? Go to <Text style={styles.link}>Register</Text>
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  acceptTermsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
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
    width: 140,
    height: 100,
  },
  TextHeader: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  loginLink: {
    marginTop: 80,
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

export default LoginScreen;
