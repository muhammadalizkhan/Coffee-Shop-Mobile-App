import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const CoffeeDetailsScreen = ({ route }) => {
  const { coffee } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: coffee.image }} style={styles.coffeeImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.coffeeName}>{coffee.name}</Text>
        <Text style={styles.coffeePrice}>{coffee.price}</Text>
        <Text style={styles.productInfo}>Product Info: A cappuccino is a brewed drink prepared from roasted coffee beans and almond milk.</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Quantity</Text>
          <View style={styles.sizeOptions}>
            <Text style={styles.sizeText}>Small</Text>
            <Text style={styles.sizeText}>Medium</Text>
            <Text style={styles.sizeText}>Large</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 20,
  },
  coffeeImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  coffeeName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  coffeePrice: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 10,
  },
  productInfo: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
  },
  quantityContainer: {
    marginVertical: 10,
  },
  quantityText: {
    color: '#fff',
    fontSize: 18,
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sizeText: {
    color: '#fff',
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#ff914d',
    paddingVertical: 15,
    borderRadius: 10,
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoffeeDetailsScreen;
