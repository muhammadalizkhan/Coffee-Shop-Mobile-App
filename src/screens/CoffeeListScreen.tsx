import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const CoffeeListScreen = ({ navigation }) => {
  const coffeeData = [
    { id: 1, name: 'Cappuccino', price: '$10', image: 'https://roviandaplus.com/wp-content/uploads/2022/06/Cafe-Latte.jpg' },
    { id: 2, name: 'Latte Coffee', price: '$10', image: 'https://majestycoffee.com/cdn/shop/articles/americano_b74a8154-454b-4f74-9a6c-95fbc4152ed3_600x600_crop_center.jpg?v=1684048195' },
    { id: 3, name: 'Americano', price: '$10', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg' },
    { id: 4, name: 'Café Latte', price: '$10', image: 'https://diethood.com/wp-content/uploads/2023/08/iced-americano-7-1-500x500.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>It's A Great Day For Coffee</Text>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search your favorite Coffee</Text>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {coffeeData.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.coffeeCard} 
            onPress={() => navigation.navigate('CoffeeDetails', { coffee: item })}
          >
            <Image source={{ uri: item.image }} style={styles.coffeeImage} />
            <View style={styles.coffeeInfo}>
              <Text style={styles.coffeeName}>{item.name}</Text>
              <Text style={styles.coffeePrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  searchText: {
    color: '#aaa',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  coffeeCard: {
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    marginVertical: 10,
    width: '47%',
    padding: 10,
  },
  coffeeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  coffeeInfo: {
    marginTop: 10,
  },
  coffeeName: {
    color: '#fff',
    fontSize: 16,
  },
  coffeePrice: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CoffeeListScreen;
