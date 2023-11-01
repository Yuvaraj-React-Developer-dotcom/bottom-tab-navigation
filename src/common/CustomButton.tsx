import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface SubmitButtonProps {
  handleSubmit?: () => void;
  styleProps: boolean;
  buttonNameStyles: [];
  buttonStyles: [];
  height: number;
}
const CustomButton: React.FC<SubmitButtonProps> = ({
  handleSubmit,
  styleProps,
  height,
}) => {
  const buttonName = styleProps ? 'sign up' : 'sign in';

  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={[styles.buttonStyles, {height: styleProps ? 60 : height}]}>
      <Text style={styles.buttonNameStyles}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonNameStyles: {
    fontSize: 24,
    fontWeight: '400',
  },
});
