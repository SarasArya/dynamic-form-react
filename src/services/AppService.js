export default () =>
  Promise.resolve({
    title: 'This is a title for the form Header',
    questions: [
      {
        id: 2447,
        question_type: 'TextQuestion',
        prompt: 'What is your first answer?',
        is_required: false,
        min_char_length: 15,
      },
      {
        id: 2448,
        question_type: 'TextQuestion',
        prompt: 'What is your second answer?',
        is_required: true,
        min_char_length: 100,
      },
      {
        id: 2500,
        question_type: 'TextQuestion',
        prompt: 'What is your third answer?',
        is_required: true,
        min_char_length: 1,
      },
    ],
  });
