import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const CameraScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>CameraScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CameraScreen;
