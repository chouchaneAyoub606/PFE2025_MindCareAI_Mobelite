import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';
import strings from "../util/Strings";
import images from "../util/Images";
import colors from "../util/Colors";


const questions = [
  { id: strings.form.id1, text: strings.form.q1 },
  { id: strings.form.id2, text: strings.form.q2 },
  { id: strings.form.id3, text: strings.form.q3 },
  { id: strings.form.id4, text: strings.form.q4 },
  { id: strings.form.id5, text: strings.form.q5 },
  { id: strings.form.id6, text: strings.form.q6 },
  { id: strings.form.id7, text: strings.form.q7 },
  { id: strings.form.id8, text: strings.form.q8 },
  { id: strings.form.id9, text: strings.form.q9 },
  { id: strings.form.id10, text: strings.form.q10 },
  { id: strings.form.id11, text: strings.form.q11 },
  { id: strings.form.id12, text: strings.form.q12 },
];

const options = [
  { label: strings.form.lab1, value: strings.form.val1 },
  { label: strings.form.lab2, value: strings.form.val2 },
  { label: strings.form.lab3, value: strings.form.val3 },
  { label: strings.form.lab4, value: strings.form.val4 },
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
       <ImageBackground source={require(images.ImageBackground)} style={{ flex: 1,
    width: "100%",  
    height: "100%",
    justifyContent: "center", 
    alignItems: "center", }} resizeMode="cover">
      <View style={styles.card}>
        <Text style={styles.title}>{strings.form.formTitle}</Text>
        
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
              color={colors.primary}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {page > 0 && <Button title="Previous" onPress={prevPage} color={colors.primary} />}
          {page < questions.length - 1 ? (
            <Button title="Next" onPress={nextPage} color={colors.primary} />
          ) : (
            <Button title="Finish" onPress={() => alert(strings.form.formCompleted)} color={colors.primary} />
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
    backgroundColor: colors.background, // Light background color for consistency
    paddingVertical: 30,
  },
  card: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
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
    color: colors.textPrimary,
    textAlign: 'center',
  },
  radioLabel: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    marginTop: 20,
  },
});
