import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMugSaucer, faStar } from '@fortawesome/free-solid-svg-icons';
import { ImageSourcePropType } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: { item: CoffeeItem };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type CoffeeItem = {
  id: string;
  name: string;
  price: string;
  image: ImageSourcePropType;
};

const Stack = createStackNavigator<RootStackParamList>();

const coffeeData: CoffeeItem[] = [
  { id: '1', name: 'Cappuccino', price: '$10', image: require('../assests/images/americano.jpg') },
  { id: '2', name: 'Latte Coffee', price: '$10', image: require('../assests/images/CafeLatte.jpg') }, // Corrected path
  { id: '3', name: 'Americano', price: '$10', image: require('../assests/images/Cappuccino.jpg') },
  { id: '4', name: 'Café Latte', price: '$10', image: require('../assests/images/Latte.jpg') },
];


const CoffeeCard: React.FC<{ item: CoffeeItem; onPress: () => void }> = React.memo(({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
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
));

const HomeScreen: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const navigateToDetails = useCallback(
    (item: CoffeeItem) => {
      navigation.navigate('Details', { item });
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello!</Text>
      </View>
      <Text style={styles.title}>It's A Great Day For Coffee</Text>
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Search your favorite Coffee</Text>
      </View>
      <FlatList
        data={coffeeData}
        renderItem={({ item }) => <CoffeeCard item={item} onPress={() => navigateToDetails(item)} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const DetailsScreen: React.FC<{ route: DetailsScreenRouteProp }> = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
      </TouchableOpacity>
      <Image source={item.image} style={styles.detailsImage} />
      <Text style={styles.detailsTitle}>{item.name}</Text>
      <Text style={styles.detailsPrice}>{item.price}</Text>
      <Text style={styles.detailsInfo}>
        A cappuccino is a brewed drink prepared from roasted coffee beans and almond milk.
      </Text>
      <Text style={styles.quantityText}>Quantity</Text>
      <View style={styles.sizeContainer}>
        {['Small', 'Medium', 'Large'].map(size => (
          <TouchableOpacity key={size} style={styles.sizeButton}>
            <Text style={styles.sizeButtonText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add To Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  icon: {
    color: '#49243E',
    marginRight: 10,
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
    padding: 10,
    marginBottom: 20,
    width: '48%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  cardPrice: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  reviewIcon: {
    color: '#ffdd00',
    marginHorizontal: 1,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  detailsImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  detailsTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detailsPrice: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  detailsInfo: {
    color: 'gray',
    marginTop: 20,
    fontSize: 14,
    lineHeight: 22,
  },
  quantityText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  sizeButton: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sizeButtonText: {
    color: 'white',
  },
  addToCartButton: {
    backgroundColor: '#A96B56',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
