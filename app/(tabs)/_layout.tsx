import React from 'react';
import { Tabs } from 'expo-router';
import { Book, Chrome as Home, QrCode, UtensilsCrossed, MapPin } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

type TabIconProps = {
  color: string;
  size: number;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#67B26F',
        tabBarInactiveTintColor: '#757575',
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
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
      <Tabs.Screen
        name="places"
        options={{
          title: 'Места',
          tabBarIcon: ({ color, size }: TabIconProps) => <MapPin size={size} color={color} />,
        }}
      />
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