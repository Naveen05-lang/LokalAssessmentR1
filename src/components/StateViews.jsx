import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';

export const LoadingFooter = () => (
  <ActivityIndicator style={{ margin: 16 }} size="large" color="#007AFF" />
);

export const EmptyView = () => (
  <View style={styles.center}>
    <Text>No jobs available.</Text>
  </View>
);

export const ErrorView = ({ error, onRetry }) => (
  <View style={styles.center}>
    <Text style={styles.errorText}>{error}</Text>
    <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
      <Text style={styles.retryText}>Retry</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80,
      paddingHorizontal: 20,
    },
    errorText: {
      color: '#D7263D',
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 12,
      textAlign: 'center',
    },
    retryButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 24,
      paddingVertical: 10,
      borderRadius: 8,
      shadowColor: '#007AFF',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 2,
    },
    retryText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: '600',
    },
  });
  