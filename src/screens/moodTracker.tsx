import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "../util/styles";
import strings from "../util/Strings";
import images from "../util/Images";
import colors from "../util/Colors";

const MoodTracker: React.FC = ( navigation: any ) => {
  const [mood, setMood] = useState(0); 

  return (
    <View style={styles.container}>
      <ImageBackground 
       source={images.ImageBackground} 
       style={styles.background} 
       resizeMode="cover">
      <View style={styles.card}>
        <Text style={styles.title}>{strings.general.askMood}</Text>

        
        <View style={styles.sliderContainer}>
          
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={mood}
            onValueChange={setMood}
            minimumTrackTintColor={styles.track.backgroundColor}
            maximumTrackTintColor={colors.lightgray}
            thumbImage={images.emoji}
          />
        </View>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.button}>
            <Text style={styles.buttonText}>✔︎</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

export default MoodTracker;

