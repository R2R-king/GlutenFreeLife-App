import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const RECIPES = [
  {
    id: '1',
    title: 'Безглютеновые блинчики',
    category: 'Завтраки',
    time: '30 мин',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500',
  },
  {
    id: '2',
    title: 'Рисовая лапша с овощами',
    category: 'Обеды',
    time: '45 мин',
    image: 'https://images.unsplash.com/photo-1547928576-965be7f5f6a2?w=500',
  },
];

const CATEGORIES = ['Все', 'Завтраки', 'Обеды', 'Ужины', 'Десерты'];

export default function RecipesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <View style={styles.recipeMetaInfo}>
          <Text style={styles.recipeCategory}>{item.category}</Text>
          <Text style={styles.recipeTime}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Рецепты</Text>
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
      <FlatList
        data={RECIPES}
        renderItem={renderRecipeCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.recipesList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    marginTop: 60,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  categoryButtonActive: {
    backgroundColor: '#4CAF50',
  },
  categoryButtonText: {
    color: '#666666',
  },
  categoryButtonTextActive: {
    color: '#FFFFFF',
  },
  recipesList: {
    padding: 20,
  },
  recipeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeInfo: {
    padding: 15,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeCategory: {
    color: '#666666',
  },
  recipeTime: {
    color: '#666666',
  },
});