import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import { Search } from 'lucide-react-native';

const CATEGORIES = [
  { id: '1', name: 'Крупы', icon: '🌾' },
  { id: '2', name: 'Выпечка', icon: '🥖' },
  { id: '3', name: 'Сладости', icon: '🍫' },
  { id: '4', name: 'Напитки', icon: '🥤' },
  { id: '5', name: 'Снеки', icon: '🥨' },
];

export default function ProductsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategory = ({ item }) => (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Безглютеновые продукты</Text>
        <View style={styles.searchContainer}>
          <Search size={20} color="#757575" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Поиск продуктов..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Категории</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoriesList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 16,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  categoriesList: {
    padding: 10,
  },
  categoryCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});