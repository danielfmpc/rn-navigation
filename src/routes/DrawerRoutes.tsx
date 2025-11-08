import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
export type DrawerTabRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerTabRoutesList> =
  DrawerScreenProps<DrawerTabRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerTabRoutesList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#2C46B1",
        drawerInactiveTintColor: "#444444",
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="add-circle" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
