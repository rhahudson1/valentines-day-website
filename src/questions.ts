export type QuizOption = {
  value: string;
  label: string;
  traitTag: string;
};

export type Question = {
  id: string;
  question: string;
  options: QuizOption[];
};

export const questions: Question[] = [
  {
    id: 'ideal-date',
    question: 'What sounds like the perfect weekend plan?',
    options: [
      { value: 'adventure', label: 'Something spontaneous and adventurous', traitTag: 'Adventurous' },
      { value: 'cozy', label: 'Staying in, cozy and low-key', traitTag: 'Cozy' },
      { value: 'fancy', label: 'A fancy dinner out', traitTag: 'Classic' },
      { value: 'creative', label: 'Something creative or hands-on together', traitTag: 'Creative' }
    ]
  },
  {
    id: 'dog-cat',
    question: 'Dog or cat person?',
    options: [
      { value: 'dog', label: 'Dog person', traitTag: 'Loyal' },
      { value: 'cat', label: 'Cat person', traitTag: 'Independent' },
      { value: 'both', label: 'Both', traitTag: 'Open-minded' },
      { value: 'neither', label: 'Neither', traitTag: 'Unconventional' }
    ]
  },
  {
    id: 'love-language',
    question: 'How do you usually show someone you care?',
    options: [
      { value: 'words', label: 'Words of affirmation', traitTag: 'Expressive' },
      { value: 'quality', label: 'Quality time together', traitTag: 'Present' },
      { value: 'gifts', label: 'Thoughtful gifts', traitTag: 'Thoughtful' },
      { value: 'acts', label: 'Acts of service', traitTag: 'Reliable' }
    ]
  },
  {
    id: 'vibe',
    question: 'What vibe best describes you in a relationship?',
    options: [
      { value: 'playful', label: 'Playful and lighthearted', traitTag: 'Playful' },
      { value: 'deep', label: 'Deep and introspective', traitTag: 'Magnetic' },
      { value: 'warm', label: 'Warm and nurturing', traitTag: 'Warm' },
      { value: 'bold', label: 'Bold and passionate', traitTag: 'Bold' }
    ]
  },
  {
    id: 'mornings',
    question: 'Best way to start your mornings?',
    options: [
      { value: 'coffee', label: 'Coffee and bagels', traitTag: 'Energetic' },
      { value: 'lazy', label: 'Be lazy in bed', traitTag: 'Cozy' },
      { value: 'depends', label: 'Depends on the day', traitTag: 'Adaptable' }
    ]
  },
  {
    id: 'conflict',
    question: 'When things get tense, you tend to:',
    options: [
      { value: 'talk', label: 'Talk it out right away', traitTag: 'Direct' },
      { value: 'cool', label: 'Take space and revisit later', traitTag: 'Thoughtful' },
      { value: 'humor', label: 'Lighten the mood with humor', traitTag: 'Playful' },
      { value: 'listen', label: 'Listen first before responding', traitTag: 'Present' }
    ]
  },
  {
    id: 'airport',
    question: 'Have you ever said "I love you" to someone when they dropped you off at the airport?',
    options: [
      { value: 'yes', label: 'Yes', traitTag: 'Romantic' },
      { value: 'no', label: 'No', traitTag: 'Grounded' },
      { value: 'almost', label: 'Almost', traitTag: 'Sentimental' }
    ]
  },
  {
    id: 'energy',
    question: 'Your ideal social energy level is:',
    options: [
      { value: 'crowd', label: 'Big groups and lots of people', traitTag: 'Adventurous' },
      { value: 'small', label: 'Small group of close friends', traitTag: 'Warm' },
      { value: 'one', label: 'One-on-one or solo time', traitTag: 'Magnetic' },
      { value: 'mix', label: 'A mix depending on the day', traitTag: 'Adaptable' }
    ]
  },
  {
    id: 'hedgehogs',
    question: 'What are your thoughts on hedgehogs?',
    options: [
      { value: 'love', label: 'I love them', traitTag: 'Whimsical' },
      { value: 'hate', label: 'I hate them', traitTag: 'Practical' }
    ]
  },
  {
    id: 'surprise',
    question: 'How do you feel about surprises?',
    options: [
      { value: 'love', label: 'Love giving and receiving them', traitTag: 'Thoughtful' },
      { value: 'give', label: 'Prefer giving over receiving', traitTag: 'Generous' },
      { value: 'heads-up', label: 'A little heads-up is nice', traitTag: 'Grounded' },
      { value: 'spontaneous', label: 'The best surprises are spontaneous', traitTag: 'Adventurous' }
    ]
  },
  {
    id: 'goodbye',
    question: 'When someone says "goodbye forever," do you take it personally or think it\'s cute?',
    options: [
      { value: 'personally', label: 'Take it personally', traitTag: 'Sensitive' },
      { value: 'cute', label: 'Think it\'s cute', traitTag: 'Playful' },
      { value: 'context', label: 'Depends on the context', traitTag: 'Thoughtful' }
    ]
  },
  {
    id: 'growth',
    question: 'You\'re most motivated when:',
    options: [
      { value: 'challenge', label: 'Facing a new challenge', traitTag: 'Bold' },
      { value: 'support', label: 'Someone believes in you', traitTag: 'Collaborative' },
      { value: 'curious', label: 'Learning something new', traitTag: 'Creative' },
      { value: 'routine', label: 'You have a steady routine', traitTag: 'Reliable' }
    ]
  },
  {
    id: 'communication',
    question: 'Your favorite way to stay connected with a long distance partner is:',
    options: [
      { value: 'text', label: 'Quick texts throughout the day', traitTag: 'Present' },
      { value: 'call', label: 'Voice or video calls', traitTag: 'Expressive' },
      { value: 'plan', label: 'Planning the next time to meet', traitTag: 'Thoughtful' },
      { value: 'memes', label: 'Sharing memes and little things', traitTag: 'Playful' }
    ]
  }
];
