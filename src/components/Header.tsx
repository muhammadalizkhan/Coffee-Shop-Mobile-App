import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <>
      <Text style={styles.title}>It's A Great Day For Kaffee</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
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

export default Header;
