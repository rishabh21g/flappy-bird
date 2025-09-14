import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <StatusBar
        backgroundColor={"black"}
        translucent={false}
        barStyle={"light-content"}
        animated={true}
      />
      <Stack.Screen name="index" />
    </Stack>
  );
}
