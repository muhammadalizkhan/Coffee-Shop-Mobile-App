import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TabsProps {
  selectedTab: 'Hot Coffee' | 'Cold Coffee';
  onSelectTab: (tab: 'Hot Coffee' | 'Cold Coffee') => void;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, onSelectTab }) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tabItem, selectedTab === 'Hot Coffee' ? styles.activeTab : null]}
        onPress={() => onSelectTab('Hot Coffee')}
      >
        <Text style={[styles.tabText, selectedTab === 'Hot Coffee' ? styles.activeTabText : null]}>
          Hot Kaffee
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, selectedTab === 'Cold Coffee' ? styles.activeTab : null]}
        onPress={() => onSelectTab('Cold Coffee')}
      >
        <Text style={[styles.tabText, selectedTab === 'Cold Coffee' ? styles.activeTabText : null]}>
          Cold Kaffee
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Tabs;
