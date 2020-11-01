import React from 'react';
import { QuestionView } from './views/QuestionView';

export const App = () => {

  const question = "What was Tandem previous name?";
  const choices = ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"];

  return (
    <>
      <QuestionView question={question} choices={choices}/>
    </>
  )
}