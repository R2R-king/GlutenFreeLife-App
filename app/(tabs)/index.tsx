import { View, Text, StyleSheet, TextInput, FlatList, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const CATEGORIES = [
  { id: '1', name: 'Крупы', icon: '🌾', count: 24 },
  { id: '2', name: 'Выпечка', icon: '🥖', count: 18 },
  { id: '3', name: 'Сладости', icon: '🍫', count: 32 },
  { id: '4', name: 'Напитки', icon: '🥤', count: 15 },
  { id: '5', name: 'Снеки', icon: '🥨', count: 27 },
];

const POPULAR_PRODUCTS = [
  { id: '1', name: 'Безглютеновая мука', brand: 'GFLife', image: '🌾' },
  { id: '2', name: 'Рисовые хлебцы', brand: 'NaturFood', image: '🍘' },
  { id: '3', name: 'Кукурузные макароны', brand: 'PastaLove', image: '🌽' },
];

export default function ProductsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategory = ({ item }: { item: (typeof CATEGORIES)[0] }) => (
    <Pressable style={styles.categoryCard}>
      <View style={styles.categoryIconContainer}>
        <Text style={styles.categoryIcon}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
      <View style={styles.categoryMeta}>
        <Text style={styles.categoryCount}>{item.count} продуктов</Text>
        <ChevronRight size={16} color="#9E9E9E" />
      </View>
    </Pressable>
  );

  const renderPopularProduct = ({ item }: { item: (typeof POPULAR_PRODUCTS)[0] }) => (
    <Pressable style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Text style={styles.productImage}>{item.image}</Text>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productBrand}>{item.brand}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#67B26F', '#4ca2cd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <Text style={styles.title}>Gluten Free Life</Text>
        <BlurView intensity={80} tint="light" style={styles.searchContainer}>
          <Search size={20} color="#4A4A4A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Поиск продуктов..."
            placeholderTextColor="#9E9E9E"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </BlurView>
      </LinearGradient>

      <FlatList
        data={[]}
        ListHeaderComponent={
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Категории</Text>
              <Pressable>
                <Text style={styles.seeAllText}>Все категории</Text>
              </Pressable>
            </View>
            <FlatList
              data={CATEGORIES}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            />
            
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Популярные продукты</Text>
              <Pressable>
                <Text style={styles.seeAllText}>Все продукты</Text>
              </Pressable>
            </View>
            <FlatList
              data={POPULAR_PRODUCTS}
              renderItem={renderPopularProduct}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productsList}
            />
          </>
        }
        renderItem={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    padding: 12,
    overflow: 'hidden',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#67B26F',
    fontWeight: '600',
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryCard: {
    width: 160,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(103, 178, 111, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  categoryMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryCount: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  productsList: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  productCard: {
    width: 140,
    marginHorizontal: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  productImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(76, 162, 205, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  productImage: {
    fontSize: 32,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 4,
  },
  productBrand: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'center',
  },
});