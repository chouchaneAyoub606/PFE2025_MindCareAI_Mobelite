import { ImageBackground, View, Text } from "react-native";
import styles from "../util/styles";
export default function HomeScreen(){
  return(
    <View style={{  flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#F5F7FF", }}>
      <Text>Welcome to MindCareAI</Text>
    </View>
  );
}