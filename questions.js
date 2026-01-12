const questions = {
  gk: [
    { q: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: 0, exp: "New Delhi is capital." },
    { q: "Who is Father of Indian Constitution?", options: ["Gandhi", "Ambedkar", "Nehru", "Patel"], answer: 1, exp: "Dr. B.R. Ambedkar." },
    { q: "National Animal of India?", options: ["Lion", "Tiger", "Elephant", "Leopard"], answer: 1, exp: "Tiger is national animal." },
    { q: "First President of India?", options: ["Rajendra Prasad", "Nehru", "Radhakrishnan", "Gandhi"], answer: 0, exp: "Dr. Rajendra Prasad." },
    { q: "Indian Currency?", options: ["Dollar", "Rupee", "Yen", "Euro"], answer: 1, exp: "Indian Rupee." }
  ],

  math: [
    { q: "5 × 6 = ?", options: ["30", "20", "25", "15"], answer: 0, exp: "5×6=30" },
    { q: "Square of 12?", options: ["124", "144", "132", "156"], answer: 1, exp: "12² = 144" },
    { q: "10% of 200?", options: ["10", "20", "30", "40"], answer: 1, exp: "10% = 20" },
    { q: "Value of π?", options: ["3.14", "2.14", "1.14", "4.14"], answer: 0, exp: "π ≈ 3.14" },
    { q: "15 + 25 = ?", options: ["30", "35", "40", "45"], answer: 2, exp: "15+25=40" }
  ],

  reasoning: [
    { q: "Find odd one out: Dog, Cat, Lion, Car", options: ["Dog", "Cat", "Lion", "Car"], answer: 3, exp: "Car is non-living." },
    { q: "2,4,6,?", options: ["7", "8", "9", "10"], answer: 1, exp: "Even numbers." },
    { q: "Day after Monday?", options: ["Sunday", "Tuesday", "Friday", "Saturday"], answer: 1, exp: "Tuesday." },
    { q: "Opposite of Big?", options: ["Large", "Huge", "Small", "Tall"], answer: 2, exp: "Opposite is Small." },
    { q: "A is father of B, B is father of C. A is ___ of C?", options: ["Father", "Grandfather", "Uncle", "Brother"], answer: 1, exp: "Grandfather." }
  ],

  english: [
    { q: "Synonym of Fast?", options: ["Quick", "Slow", "Late", "Dull"], answer: 0, exp: "Fast = Quick" },
    { q: "Antonym of Hot?", options: ["Warm", "Cold", "Heat", "Cool"], answer: 1, exp: "Hot opposite Cold." },
    { q: "Plural of Child?", options: ["Childs", "Children", "Childes", "Childer"], answer: 1, exp: "Children." },
    { q: "He ___ playing.", options: ["is", "are", "am", "be"], answer: 0, exp: "He is playing." },
    { q: "Correct spelling?", options: ["Definately", "Definitely", "Definetly", "Definately"], answer: 1, exp: "Definitely." }
  ]
};
