import React from 'react';
import { Tabs } from 'expo-router';
import { Book, Chrome as Home, QrCode, UtensilsCrossed } from 'lucide-react-native';

type TabIconProps = {
  color: string;
  size: number;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#757575',
        tabBarStyle: {
          borderTopColor: '#E0E0E0',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Продукты',
          tabBarIcon: ({ color, size }: TabIconProps) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: 'Сканер',
          tabBarIcon: ({ color, size }: TabIconProps) => <QrCode size={size} color={color} />,
        }}
      />
      {/* Временно отключена вкладка places
      <Tabs.Screen
        name="places"
        options={{
          title: 'Места',
          tabBarIcon: ({ color, size }: TabIconProps) => <MapPin size={size} color={color} />,
        }}
      />
      */}
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Рецепты',
          tabBarIcon: ({ color, size }: TabIconProps) => <UtensilsCrossed size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'FAQ',
          tabBarIcon: ({ color, size }: TabIconProps) => <Book size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}