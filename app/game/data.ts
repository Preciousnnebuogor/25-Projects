type IGame = {
  question: string;
  answers: string;
  option1: string;
  option2: string;
  option3: string;
  category: "ADD" | "MULTIPLY" | "DIVIDE" | "SUBSTRACT";
};

export const QuestionBank: IGame[] = [
  {
    question: "1 + 2",
    answers: "3",
    option1: "1",
    option2: "0",
    option3: "3",
    category: "ADD",
  },
  {
    question: "2 + 2",
    answers: "4",
    option1: "5",
    option2: "4",
    option3: "6",
    category: "ADD",
  },
  {
    question: "0 + 1",
    answers: "1",
    option1: "0",
    option2: "1",
    option3: "5",
    category: "ADD",
  },
  {
    question: "5 + 4",
    answers: "9",
    option1: "9",
    option2: "8",
    option3: "5",
    category: "ADD",
  },
  {
    question: "4 + 3",
    answers: "7",
    option1: "5",
    option2: "6",
    option3: "7",
    category: "ADD",
  },
  {
    question: "6 + 4",
    answers: "10",
    option1: "9",
    option2: "8",
    option3: "10",
    category: "ADD",
  },
  {
    question: "5 + 7",
    answers: "12",
    option1: "10",
    option2: "11",
    option3: "12",
    category: "ADD",
  },
  {
    question: "2 + 9",
    answers: "11",
    option1: "9",
    option2: "11",
    option3: "10",
    category: "ADD",
  },
  {
    question: "3 + 3",
    answers: "6",
    option1: "8",
    option2: "7",
    option3: "6",
    category: "ADD",
  },
  {
    question: "10 + 2",
    answers: "12",
    option1: "12",
    option2: "0",
    option3: "5",
    category: "ADD",
  },
  {
    question: "4 + 7",
    answers: "11",
    option1: "4",
    option2: "11",
    option3: "7",
    category: "ADD",
  },
  {
    question: "2 - 1",
    answers: "1",
    option1: "4",
    option2: "0",
    option3: "7",
    category: "SUBSTRACT",
  },
  {
    question: "1 - 1",
    answers: "0",
    option1: "4",
    option2: "0",
    option3: "7",
    category: "SUBSTRACT",
  },
  {
    question: "4 - 1",
    answers: "3",
    option1: "2",
    option2: "3",
    option3: "1",
    category: "ADD",
  },
  {
    question: "5 - 3",
    answers: "2",
    option1: "4",
    option2: "0",
    option3: "2",
    category: "SUBSTRACT",
  },
  {
    question: "8 - 4",
    answers: "4",
    option1: "4",
    option2: "0",
    option3: "7",
    category: "SUBSTRACT",
  },
  {
    question: "9 - 5",
    answers: "4",
    option1: "4",
    option2: "0",
    option3: "9",
    category: "SUBSTRACT",
  },
  {
    question: "10 - 3",
    answers: "7",
    option1: "4",
    option2: "10",
    option3: "7",
    category: "SUBSTRACT",
  },
  {
    question: "8 - 7",
    answers: "1",
    option1: "7",
    option2: "1",
    option3: "9",
    category: "SUBSTRACT",
  },
  {
    question: "9 - 3",
    answers: "5",
    option1: "5",
    option2: "9",
    option3: "3",
    category: "SUBSTRACT",
  },
  {
    question: "7 - 3",
    answers: "4",
    option1: "4",
    option2: "5",
    option3: "7",
    category: "SUBSTRACT",
  },
  {
    question: "10 - 4",
    answers: "6",
    option1: "4",
    option2: "6",
    option3: "7",
    category: "SUBSTRACT",
  },
  {
    question: "1 * 0",
    answers: "0",
    option1: "1",
    option2: "0",
    option3: "7",
    category: "MULTIPLY",
  },
  {
    question: "4 * 2",
    answers: "8",
    option1: "1",
    option2: "8",
    option3: "7",
    category: "MULTIPLY",
  },
  {
    question: "5 * 3",
    answers: "15",
    option1: "15",
    option2: "10",
    option3: "12",
    category: "MULTIPLY",
  },
  {
    question: "6 * 4",
    answers: "24",
    option1: "10",
    option2: "14",
    option3: "24",
    category: "MULTIPLY",
  },
  {
    question: "3 * 3",
    answers: "9",
    option1: "3",
    option2: "9",
    option3: "7",
    category: "MULTIPLY",
  },
  {
    question: "2 * 5",
    answers: "10",
    option1: "1",
    option2: "10",
    option3: "27",
    category: "MULTIPLY",
  },
  {
    question: "1 * 1",
    answers: "1",
    option1: "1",
    option2: "10",
    option3: "7",
    category: "MULTIPLY",
  },
  {
    question: "9 * 1",
    answers: "9",
    option1: "1",
    option2: "9",
    option3: "19",
    category: "MULTIPLY",
  },
  {
    question: "3 * 4",
    answers: "12",
    option1: "12",
    option2: "13",
    option3: "7",
    category: "MULTIPLY",
  },
  {
    question: "5 * 4",
    answers: "20",
    option1: "21",
    option2: "10",
    option3: "20",
    category: "MULTIPLY",
  },
  {
    question: "10 * 1",
    answers: "10",
    option1: "1",
    option2: "10",
    option3: "7",
    category: "MULTIPLY",
  },
  {
    question: "3 / 3",
    answers: "1",
    option1: "1",
    option2: "10",
    option3: "7",
    category: "DIVIDE",
  },
  {
    question: "6 / 3",
    answers: "2",
    option1: "3",
    option2: "2",
    option3: "4",
    category: "DIVIDE",
  },
  {
    question: "15 / 3",
    answers: "5",
    option1: "3",
    option2: "4",
    option3: "5",
    category: "DIVIDE",
  },
  {
    question: "20 / 4",
    answers: "5",
    option1: "5",
    option2: "10",
    option3: "7",
    category: "DIVIDE",
  },
  {
    question: "16 / 4",
    answers: "4",
    option1: "5",
    option2: "4",
    option3: "3",
    category: "DIVIDE",
  },
  {
    question: "12 / 3",
    answers: "4",
    option1: "4",
    option2: "5",
    option3: "6",
    category: "DIVIDE",
  },
  {
    question: "10 / 5",
    answers: "2",
    option1: "4",
    option2: "10",
    option3: "2",
    category: "DIVIDE",
  },
  {
    question: "12 / 4",
    answers: "3",
    option1: "3",
    option2: "4",
    option3: "5",
    category: "DIVIDE",
  },
  {
    question: "8 / 2",
    answers: "4",
    option1: "1",
    option2: "0",
    option3: "4",
    category: "DIVIDE",
  },
  {
    question: "9 / 3",
    answers: "3",
    option1: "1",
    option2: "3",
    option3: "9",
    category: "DIVIDE",
  },
  {
    question: "2 / 2",
    answers: "1",
    option1: "1",
    option2: "0",
    option3: "3",
    category: "DIVIDE",
  },
];
