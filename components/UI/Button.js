// created 141
import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

// 141 added children, onPress, mode, style
function Button({ children, onPress, mode, style }) {
  return (
    // 141 the {style} props is used to customize the button
    // 141 added Pressable and View, onPress is used to pass the function to be executed when the button is pressed
    // 141 added styles.button, styles.flat, styles.buttonText, styles.flatText
    // 141 added styles.pressed, which applies opacity and background color to the button when pressed
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

// 141 button is used to pass common style to the button
// 141 flat is used to make the button flat
// 141 buttonText is used to style the text of the button
// 141 flatText is used to style the text of the flat button
const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});

export default Button;
