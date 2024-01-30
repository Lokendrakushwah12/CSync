import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./AppNavigator";
import "./FirebaseConfig";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Load custom fonts
    async function loadFonts() {
      await Font.loadAsync({
        'Inter100': require('./assets/fonts/Inter-ExtraLight.ttf'),
        'Inter200': require('./assets/fonts/Inter-Light.ttf'),
        'Inter300': require('./assets/fonts/Inter-Regular.ttf'),
        'Inter400': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter500': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter600': require('./assets/fonts/Inter-Bold.ttf'),
        'Inter700': require('./assets/fonts/Inter-ExtraBold.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
