import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';  // Import the hook
import Product from "../Products/Product"

const imageMap: { [key: string]: any } = {
  'americano.jpg': require('../assests/images/americano.jpg'),
  'CafeLatte.jpg': require('../assests/images/CafeLatte.jpg'),
  'Cappuccino.jpg': require('../assests/images/Cappuccino.jpg'),
  'Latte.jpg': require('../assests/images/Latte.jpg'),
};

type CoffeeItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const KaffeeCards: React.FC<{ data: CoffeeItem[] }> = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: CoffeeItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Product', { product: item })}
    >
      <Image source={imageMap[item.image]} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{item.price}</Text>
        </View>
        <View style={styles.reviewContainer}>
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} size={15} style={styles.reviewIcon} />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333333',
    borderRadius: 15,
    width: '48%',
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    color: '#A96B56',
    fontSize: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  reviewIcon: {
    color: '#FFD700',
    marginRight: 3,
  },
});

export default KaffeeCards;
