import { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function SplashScreenComponent() {
  // Create an animated value for scale
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const prepare = async () => {
      // Start the heart-pumping animation loop
      Animated.loop(
        Animated.sequence([
          // Scale up
          Animated.timing(scale, {
            toValue: 1.2, // Scale to 1.2 times
            duration: 1500, // 500ms to scale up
            useNativeDriver: true,
          }),
          // Scale down
          Animated.timing(scale, {
            toValue: 1, // Scale back to 1
            duration: 1500, // 500ms to scale down
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Simulated delay to mimic loading
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds

      SplashScreen.hide(); // Hide the splash screen once everything is ready
    };

    prepare();
  }, [scale]);

  return (
    <View >
      <Animated.Image
        source={require("../assets/finalSplashScreen.png")}
        style={[styles.image, { transform: [{ scale }] }]} // Apply the scale transformation
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%", // Full width
    height: "100%", // Full height
  },
});