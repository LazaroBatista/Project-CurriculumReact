// app/(tabs)/_layout.tsx

import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1C4ED8",
        tabBarInactiveTintColor: "#8E8E8E",
        tabBarStyle: {
          backgroundColor: "#F2F7FF",
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="projetos"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color, size }) => (
            <Feather name="code" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiência",
          tabBarIcon: ({ color, size }) => (
            <Feather name="briefcase" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="habilidades"
        options={{
          title: "Habilidades",
          tabBarIcon: ({ color, size }) => (
            <Feather name="star" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
