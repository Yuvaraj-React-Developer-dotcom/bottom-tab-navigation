import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface SubmitButtonProps {
  handleSubmit: () => void;
  styleProps: boolean;
}
const CustomButton: React.FC<SubmitButtonProps> = ({
  handleSubmit,
  styleProps,
}) => {
  const buttonName = styleProps ? 'sign up' : 'sign in';
  let buttonStyles: any;
  let buttonNameStyles: any;
  if (styleProps) {
    buttonStyles = [
      {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 60,
        fontSize: 24,
        fontWeight: '400',
      },
    ];
  } else {
    buttonStyles = [
      {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 60,
        fontSize: 24,
        fontWeight: '400',
      },
    ];
  }

  if (styleProps) {
    buttonNameStyles = [
      {
        fontSize: 24,
        fontWeight: '400',
      },
    ];
  } else {
    buttonNameStyles = [
      {
        fontSize: 24,
        fontWeight: '400',
      },
    ];
  }

  return (
    <TouchableOpacity onPress={() => handleSubmit()} style={buttonStyles[0]}>
      <Text style={buttonNameStyles[0]}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
