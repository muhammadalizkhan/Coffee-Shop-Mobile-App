import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchBar}>
      <Text style={styles.searchText}>Search your favorite Coffee</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchText: {
    color: 'gray',
    marginLeft: 10,
    flex: 1,
  },
});

export default SearchBar;
