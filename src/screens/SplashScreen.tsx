import { useEffect } from "react";
import { View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";
import styles from "../util/styles";

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const scale = useSharedValue(1); // Shared value for animation

  useEffect(() => {
    const startAnimation = () => {
      scale.value = withRepeat(withTiming(1.2, { duration: 1500 }), -1, true); // Repeats indefinitely
    };

    startAnimation();

    // Simulated delay before hiding the splash screen
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  // Animated styles using Reanimated
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/finalSplashScreen.png")}
        style={[styles.image, animatedStyle]}
        resizeMode="cover"
      />
    </View>
  );
}