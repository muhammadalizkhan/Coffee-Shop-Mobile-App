import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/Searchbar';
import Tabs from '../components/Tabs';
import KaffeeCards from '../Products/KaffeeCards';
const coffeeData = require('../Json_Data/Data.json').coffeeData;
const coldCoffeeData = require('../Json_Data/Data.json').coldCoffeeData;

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Hot Coffee' | 'Cold Coffee'>('Hot Coffee');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      {selectedTab === 'Hot Coffee' ? <KaffeeCards data={coffeeData} /> : <KaffeeCards data={coldCoffeeData} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingTop: 1,
  },
});

export default App;
