import { StyleSheet } from "react-native";
import colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: colors.background, 
  },
  background: {
    flex: 1,
    width: "100%",  
    height: "100%",
    justifyContent: "center", 
    alignItems: "center", 
  },
  image: {
    width: "100%", 
    height: "100%", 
  },
  card: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.inputBackground, 
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: colors.textPrimary,
    fontSize: 16,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    shadowColor: colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 3,
  },

  buttonPressed: {
    backgroundColor: colors.primaryDark,
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },

  error: {
    color: colors.error,
    fontSize: 14,
    marginBottom: 10,
  },

  forgotPassword: {
    marginTop: 10,
    color: colors.secondary,
    fontSize: 14,
    textDecorationLine: "underline",
  },

  linkText: {
    marginTop: 20,
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  slider: {
    width: "100%",
    height: 80,
  },
  sliderContainer: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  track: {
    height: 300,
    backgroundColor: colors.TrackColor,
    left: 0,
    top: "50%",
    borderRadius: 3,
  },
});

export default styles;