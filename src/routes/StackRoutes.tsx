import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type StackRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>;

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="product"
        component={Product}
        options={{ animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}
