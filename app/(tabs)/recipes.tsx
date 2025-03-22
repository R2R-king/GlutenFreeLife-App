import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Clock, ChevronRight, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FEATURED_RECIPES = [
  {
    id: '1',
    title: 'Безглютеновые блинчики',
    category: 'Завтраки',
    time: '30 мин',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500',
  },
  {
    id: '2',
    title: 'Рисовая лапша с овощами',
    category: 'Обеды',
    time: '45 мин',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1547928576-965be7f5f6a2?w=500',
  },
];

const NEW_RECIPES = [
  {
    id: '3',
    title: 'Безглютеновый шоколадный торт',
    category: 'Десерты',
    time: '60 мин',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
  },
  {
    id: '4',
    title: 'Киноа с овощами',
    category: 'Ужины',
    time: '35 мин',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500',
  },
  {
    id: '5',
    title: 'Кукурузные оладьи',
    category: 'Завтраки',
    time: '25 мин',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500',
  },
];

const CATEGORIES = ['Все', 'Завтраки', 'Обеды', 'Ужины', 'Десерты'];

type Recipe = typeof FEATURED_RECIPES[0];

export default function RecipesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const renderFeaturedRecipe = ({ item }: { item: Recipe }) => (
    <TouchableOpacity style={styles.featuredRecipeCard}>
      <Image source={{ uri: item.image }} style={styles.featuredRecipeImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.featuredRecipeOverlay}>
        <View style={styles.featuredRecipeContent}>
          <View style={styles.featuredRecipeBadge}>
            <Text style={styles.featuredRecipeBadgeText}>{item.category}</Text>
          </View>
          <Text style={styles.featuredRecipeTitle}>{item.title}</Text>
          <View style={styles.featuredRecipeMeta}>
            <View style={styles.featuredRecipeTime}>
              <Clock size={14} color="#FFFFFF" />
              <Text style={styles.featuredRecipeTimeText}>{item.time}</Text>
            </View>
            <View style={styles.featuredRecipeRating}>
              <Star size={14} color="#FFD700" fill="#FFD700" />
              <Text style={styles.featuredRecipeRatingText}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderRecipeCard = ({ item }: { item: Recipe }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeCategory}>{item.category}</Text>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <View style={styles.recipeMetaInfo}>
          <View style={styles.recipeTime}>
            <Clock size={14} color="#757575" />
            <Text style={styles.recipeTimeText}>{item.time}</Text>
          </View>
          <View style={styles.recipeRating}>
            <Star size={14} color="#FFD700" fill="#FFD700" />
            <Text style={styles.recipeRatingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#67B26F', '#4ca2cd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <Text style={styles.title}>Рецепты</Text>
        <Text style={styles.subtitle}>Вкусно и без глютена</Text>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Популярные рецепты</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>Все рецепты</Text>
            <ChevronRight size={16} color="#67B26F" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={FEATURED_RECIPES}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderFeaturedRecipe}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.featuredRecipesList}
        />

        <View style={styles.categoriesContainer}>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === item && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(item)}>
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === item && styles.categoryButtonTextActive,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Новые рецепты</Text>
        </View>

        <FlatList
          data={NEW_RECIPES}
          renderItem={renderRecipeCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.recipesList}
          scrollEnabled={false}
        />
      </ScrollView>
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
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#67B26F',
    fontWeight: '600',
    marginRight: 4,
  },
  featuredRecipesList: {
    paddingHorizontal: 16,
  },
  featuredRecipeCard: {
    width: 300,
    height: 200,
    marginHorizontal: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredRecipeImage: {
    width: '100%',
    height: '100%',
  },
  featuredRecipeOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  featuredRecipeContent: {
    padding: 16,
  },
  featuredRecipeBadge: {
    backgroundColor: 'rgba(103, 178, 111, 0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  featuredRecipeBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  featuredRecipeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  featuredRecipeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredRecipeTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  featuredRecipeTimeText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 4,
  },
  featuredRecipeRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredRecipeRatingText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 4,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryButtonActive: {
    backgroundColor: '#67B26F',
  },
  categoryButtonText: {
    color: '#666666',
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: '#FFFFFF',
  },
  recipesList: {
    padding: 16,
    paddingBottom: 40,
  },
  recipeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  recipeImage: {
    width: '100%',
    height: 160,
  },
  recipeInfo: {
    padding: 16,
  },
  recipeCategory: {
    fontSize: 12,
    color: '#67B26F',
    fontWeight: '600',
    marginBottom: 4,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 12,
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  recipeTimeText: {
    fontSize: 12,
    color: '#757575',
    marginLeft: 4,
  },
  recipeRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeRatingText: {
    fontSize: 12,
    color: '#757575',
    marginLeft: 4,
  },
});