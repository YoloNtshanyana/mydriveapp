import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const age = 22; 
  const licenseYears = 5;
  let feedback = '';

  if (age >= 18) 
    if (licenseYears >= 3)
    {
      feedback = 'You are a qualified and safe driver.';
    } else



      {
        feedback = 'You are allowed to drive. YAY!'
        } 
        else 
        {
          feedback = 'You are not allowed to drive yet.'
        }

  return (
    <View style={styles.container}>
      <Text style={styles.response}>
        {feedback} {/* This is my message to the user */}
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38040E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response: {
    fontSize: 28,
    color: '#FFFEE5'

  }
});
