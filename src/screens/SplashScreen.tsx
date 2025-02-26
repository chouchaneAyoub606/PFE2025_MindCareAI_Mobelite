import { useEffect } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";
import styles from "../util/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation";
import { useNavigation } from "@react-navigation/native";
import images from "../util/Images";
// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();
export default function SplashScreenComponent() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "SignUp">>(); 
  useEffect(() => {
    const startAnimation = () => {
      // Start animation for 1.5 seconds
      scale.value = withRepeat(withTiming(1.2, { duration: 1500 }), -1, true); 
    };

    startAnimation();

    // Simulate delay before hiding the splash screen and navigating to SignUp
    const hideSplash = setTimeout(() => {
      SplashScreen.hideAsync();
      navigation.replace("SignUp"); // Navigate to SignUp
    }, 4000); // 4 seconds delay to match animation duration

    // Cleanup timeout when the component unmounts
    return () => clearTimeout(hideSplash);
  }, []);
  // Animated styles using Reanimated
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images.splashScreen}
        style={[styles.image, animatedStyle]}
        resizeMode="cover"
      />
    </View>
  );
}
