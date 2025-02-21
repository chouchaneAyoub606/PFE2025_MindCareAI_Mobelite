import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#F5F7FF", 
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
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: "#6C63FF", // Ombre bleutée pour cohérence
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6C63FF",
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(230, 232, 255, 0.6)", 
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#4B5563",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#6C63FF",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 3,
  },

  buttonPressed: {
    backgroundColor: "#4A47D2",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },

  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },

  forgotPassword: {
    marginTop: 10,
    color: "#7D89E6",
    fontSize: 14,
    textDecorationLine: "underline",
  },

  linkText: {
    marginTop: 20,
    color: "#7D89E6",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default styles;
