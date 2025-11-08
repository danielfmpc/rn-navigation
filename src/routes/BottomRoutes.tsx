import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
export type BottomTabRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type BottomRoutesProps<T extends keyof BottomTabRoutesList> =
  BottomTabScreenProps<BottomTabRoutesList, T>;

const Bottom = createBottomTabNavigator<BottomTabRoutesList>();

export function BottomRoutes() {
  return (
    <Bottom.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2C46B1",
        tabBarInactiveTintColor: "#444444",
      }}
    >
      <Bottom.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="add-circle" size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
