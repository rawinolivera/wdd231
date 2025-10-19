const quotes = [
  {
    "quote": "Programs are primarily meant to be read and understood by humans first, and only incidentally executed by computers for results.",
    "author": "Donald Knuth"
  },
  {
    "quote": "There are only two kinds of programming languages: those that people always complain about endlessly and those that nobody ever actually uses.",
    "author": "Bjarne Stroustrup"
  },
  {
    "quote": "The most dangerous phrase in the programming language is always, 'We have always done it this way,' which stops innovation and learning.",
    "author": "Grace Hopper"
  },
  {
    "quote": "Talk is cheap and anyone can say many things, but what truly matters in software development is to actually show me the working code.",
    "author": "Linus Torvalds"
  },
  {
    "quote": "Writing good code is not only about functionality but también about readability and maintainability, because good code is its own best documentation.",
    "author": "Steve McConnell"
  },
  {
    "quote": "First, fully understand and solve the problem at hand with clear thinking, and only afterwards proceed to write the actual code implementation efficiently.",
    "author": "John Johnson"
  }
];


export function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
