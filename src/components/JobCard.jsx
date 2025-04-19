import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ title, location }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.location}>{location || 'Location not specified'}</Text>
  </View>
);


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      padding: 18,
      borderRadius: 16,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 3,
      borderLeftWidth: 5,
      borderLeftColor: 'red',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: 6,
    },
    location: {
      fontSize: 14,
      color: '#5c5c5c',
    },
  });


export default JobCard;
