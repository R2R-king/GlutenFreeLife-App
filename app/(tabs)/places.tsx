import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

// Define the Place type for better type safety
type Place = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
};

// Only try to import MapView for native platforms
let MapView: any, Marker: any;
if (Platform.OS !== 'web') {
  try {
    const Maps = require('react-native-maps');
    MapView = Maps.default;
    Marker = Maps.Marker;
  } catch (error) {
    console.error('Failed to load react-native-maps:', error);
  }
}

const INITIAL_REGION = {
  latitude: 55.7558,
  longitude: 37.6173,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const SAMPLE_PLACES: Place[] = [
  {
    id: '1',
    name: 'GF Кафе',
    latitude: 55.7558,
    longitude: 37.6173,
    description: 'Кафе с безглютеновым меню',
  },
];

// Web-specific component that doesn't use react-native-maps
function WebPlacesView() {
  return (
    <View style={styles.container}>
      <Text style={styles.webWarning}>
        Карта доступна только в мобильной версии приложения
      </Text>
      <View style={styles.placesList}>
        {SAMPLE_PLACES.map(place => (
          <View key={place.id} style={styles.placeItem}>
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeDescription}>{place.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// Native-specific component that uses react-native-maps
function NativePlacesView() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_REGION}>
        {SAMPLE_PLACES.map((place) => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            title={place.name}
            description={place.description}
            onPress={() => setSelectedPlace(place)}
          />
        ))}
      </MapView>
      {selectedPlace && (
        <View style={styles.placeInfo}>
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
          <Text style={styles.placeDescription}>{selectedPlace.description}</Text>
        </View>
      )}
    </View>
  );
}

// Main component that decides which version to render
export default function PlacesScreen() {
  // For web version, show alternative UI without maps
  if (Platform.OS === 'web') {
    return <WebPlacesView />;
  }
  
  // For native versions, show the map if it's available
  return <NativePlacesView />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  placeInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  webWarning: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    padding: 20,
  },
  placesList: {
    padding: 20,
  },
  placeItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  placeDescription: {
    fontSize: 14,
    color: '#666',
  },
});