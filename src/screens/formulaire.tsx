import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';

const questions = [
  { id: 'A1', text: 'How often do you feel restless, on edge, or unable to relax?' },
  { id: 'A2', text: 'Do you excessively worry about different things, even if they are not serious?' },
  { id: 'A3', text: 'Do you experience physical symptoms (fast heartbeat, dizziness, shortness of breath) when stressed or anxious?' },
  { id: 'A4', text: 'Do you feel overwhelmed or unable to control your thoughts when anxious?' },
  { id: 'A5', text: 'Do you avoid certain places or social situations due to fear or discomfort?' },
  { id: 'A6', text: 'Do small problems or uncertainties make you extremely nervous or uncomfortable?' },
  { id: 'D1', text: 'How often do you feel down, hopeless, or uninterested in things you usually enjoy?' },
  { id: 'D2', text: 'Do you feel constantly tired or lacking energy, even after resting?' },
  { id: 'D3', text: 'Have you noticed significant changes in your appetite (eating too little or too much)?' },
  { id: 'D4', text: 'Do you struggle to focus or make decisions, even for simple tasks?' },
  { id: 'D5', text: 'Do you often feel guilt, low self-worth, or criticize yourself excessively?' },
  { id: 'D6', text: 'Do you have frequent negative thoughts about the future, feeling things won’t improve?' },
];

const options = [
  { label: 'Rarely', value: '0' },
  { label: 'Sometimes', value: '1' },
  { label: 'Often', value: '2' },
  { label: 'Almost Always', value: '3' },
];

export default function QuestionnaireScreen() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [page, setPage] = useState(0);

  const handleAnswer = (id: string, value: string) => {
    setAnswers({ ...answers, [id]: value });
  };

  const nextPage = () => {
    if (page < questions.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <ImageBackground source={require('../assets/background.png')} style={{ flex: 1,
    width: "100%",  
    height: "100%",
    justifyContent: "center", 
    alignItems: "center", }} resizeMode="cover">
      <View style={styles.card}>
        <Text style={styles.title}> Please complete this survey First 😊 </Text>
        
        <View key={questions[page].id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{questions[page].text}</Text>
          {options.map((option) => (
            <RadioButton.Item
              key={option.value}
              label={option.label}
              value={option.value}
              status={answers[questions[page].id] === option.value ? 'checked' : 'unchecked'}
              onPress={() => handleAnswer(questions[page].id, option.value)}
              labelStyle={styles.radioLabel}
              color="#6C63FF"
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {page > 0 && <Button title="Previous" onPress={prevPage} color="#6C63FF" />}
          {page < questions.length - 1 ? (
            <Button title="Next" onPress={nextPage} color="#6C63FF" />
          ) : (
            <Button title="Finish" onPress={() => alert('Questionnaire completed!')} color="#6C63FF" />
          )}
        </View>
      </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FF', // Light background color for consistency
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: "#6C63FF",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#6C63FF",
    marginBottom: 15,
    textAlign: "center",
  },
  questionContainer: {
    width: "100%",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4B5563',
    textAlign: 'center',
  },
  radioLabel: {
    fontSize: 16,
    color: '#4B5563',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    marginTop: 20,
  },
});
