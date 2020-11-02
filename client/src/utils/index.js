import { Apprentice_TandemFor400_Data } from '../data/questionData';

export const questionParser = (index) => {
  const { question, incorrect, correct } = Apprentice_TandemFor400_Data[index];
  let choices = [...incorrect, correct];

  for (let i = 0; i < choices.length; i++) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    [choices[i], choices[randomIndex]] = [choices[randomIndex], choices[i]];
  }

  return { question, choices };
};

export const answerVerifier = (index, choice) => {
  return choice === Apprentice_TandemFor400_Data[index].correct;
};

export const getAnswer = (index) => {
  return Apprentice_TandemFor400_Data[index].correct;
};

export const questionCount = Apprentice_TandemFor400_Data.length;
