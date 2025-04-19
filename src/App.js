import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, StatusBar, StyleSheet,Text } from 'react-native';
import useJobStore from './store/useJobStore';
import JobCard from './components/JobCard';
import { ErrorView, EmptyView, LoadingFooter } from './components/StateViews';

const App = () => {
  const { jobs, fetchJobs, error, loading } = useJobStore();

  useEffect(() => {
    fetchJobs();
  }, []);

  const renderItem = ({ item }) => (
    <JobCard
      title={item.title}
      location={item.primary_details?.Place}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',padding:10,margin:5}}>
        <Text style={{ color: 'red' }}>Job</Text>
        <Text style={{ color: '#007BFF' }}>Details</Text>
      </Text>
      {error ? (
        <ErrorView error={error} onRetry={fetchJobs} />
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item, index) => item.id?.toString() || index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={!loading && <EmptyView />}
          ListFooterComponent={loading && <LoadingFooter />}
          onEndReached={fetchJobs}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  
});

export default App;
