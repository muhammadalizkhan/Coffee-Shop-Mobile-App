import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer, faStar } from '@fortawesome/free-solid-svg-icons';

type CoffeeItem = {
  id: string;
  name: string;
  price: string;
  image: any;
};

const coffeeData: CoffeeItem[] = [
  { id: '1', name: 'Cappuccino', price: '$10', image: require('../assests/images/americano.jpg') },
  { id: '2', name: 'Latte Coffee', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
  { id: '3', name: 'Americano', price: '$10', image: require('../assests/images/Cappuccino.jpg') },
  { id: '4', name: 'Café Latte', price: '$10', image: require('../assests/images/Latte.jpg') },
  { id: '5', name: 'Café Mocha', price: '$10', image: require('../assests/images/americano.jpg') },
  { id: '6', name: 'Espresso', price: '$10', image: require('../assests/images/americano.jpg') },
];

const coldCoffeeData: CoffeeItem[] = [
  { id: '7', name: 'Cold Brew', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
  { id: '8', name: 'Iced Latte', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
  { id: '9', name: 'Frappuccino', price: '$10', image: require('../assests/images/coldimagethree.jpg') },
  { id: '10', name: 'Iced Americano', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
  { id: '11', name: 'Iced Tea', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
  { id: '12', name: 'Iced Chai Latte', price: '$10', image: require('../assests/images/CafeLatte.jpg') },
];

const CoffeeCard: React.FC<{ item: CoffeeItem }> = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.image} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <FontAwesomeIcon icon={faMugSaucer} size={20} style={styles.icon} />
      </View>
      <View style={styles.reviewContainer}>
        <FontAwesomeIcon icon={faStar} size={15} style={styles.reviewIcon} />
        <FontAwesomeIcon icon={faStar} size={15} style={styles.reviewIcon} />
        <FontAwesomeIcon icon={faStar} size={15} style={styles.reviewIcon} />
        <FontAwesomeIcon icon={faStar} size={15} style={styles.reviewIcon} />
        <FontAwesomeIcon icon={faStar} size={15} style={styles.reviewIcon} />
      </View>
    </View>
  </TouchableOpacity>
);

const CoffeeList: React.FC<{ data: CoffeeItem[]; title: string }> = ({ data, title }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CoffeeCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Hot Coffee' | 'Cold Coffee'>('Hot Coffee');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello!</Text>
      </View>
      <Text style={styles.title}>It's A Great Day For Coffee</Text>
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Search your favorite Coffee</Text>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Hot Coffee' ? styles.activeTab : null,
          ]}
          onPress={() => setSelectedTab('Hot Coffee')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Hot Coffee' ? styles.activeTabText : null,
            ]}
          >
            Hot Coffee
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Cold Coffee' ? styles.activeTab : null,
          ]}
          onPress={() => setSelectedTab('Cold Coffee')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Cold Coffee' ? styles.activeTabText : null,
            ]}
          >
            Cold Coffee
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'Hot Coffee' ? (
        <CoffeeList data={coffeeData} title="Hot Coffee" />
      ) : (
        <CoffeeList data={coldCoffeeData} title="Cold Coffee" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 26,
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
    height: Dimensions.get('window').height * 0.25,
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
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#A96B56',
  },
  tabText: {
    color: 'gray',
    fontSize: 16,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    color: '#49243E',
    marginRight: 10,
  },
});

export default App;