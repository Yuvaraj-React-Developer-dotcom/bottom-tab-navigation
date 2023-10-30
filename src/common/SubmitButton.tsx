import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SubmitButton = ({handleSubmit, value}) => {
  const buttonName = value ? 'sign up' : 'sign in';
  const style = [
    {
      color: ['#26b5b5', '#4eba83'],
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      width: 390,
      height: 60,
      marginTop: 20,
      marginLeft: 10,
      fontSize: 25,
      fontWeight: '400',
    },
    {
      color: ['#a2aba5', '#f7b5f5'],
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      width: 390,
      height: 60,
      marginTop: 20,
      marginLeft: 10,
      fontSize: 25,
      fontWeight: '400',
    },
  ];
  return (
    <LinearGradient
      colors={style[value]?.color}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={{
        alignItems: style[value]?.alignItems,
        justifyContent: style[value]?.justifyContent,
        borderRadius: style[value]?.borderRadius,
        width: style[value]?.width,
        height: style[value]?.height,
        marginTop: style[value]?.marginTop,
        marginLeft: style[value]?.marginLeft,
      }}>
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text
          style={{
            fontSize: style[value]?.fontSize,
            fontWeight: style[value]?.fontWeight,
          }}>
          {buttonName}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  buttonGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 390,
    height: 60,
    marginTop: 20,
    marginLeft: 10,
  },
});
