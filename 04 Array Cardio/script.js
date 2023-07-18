console.clear();
const inventors = [
  {
    first: "John",
    last: "Doe",
    year: 1990,
    past: false,
    endYear: null,
  },
  {
    first: "Emily",
    last: "Smith",
    year: 1985,
    past: true,
    endYear: 2022,
  },
  {
    first: "Michael",
    last: "Johnson",
    year: 1978,
    past: false,
    endYear: null,
  },
  {
    first: "Sarah",
    last: "Williams",
    year: 1995,
    past: true,
    endYear: 2023,
  },
  {
    first: "David",
    last: "Brown",
    year: 1982,
    past: false,
    endYear: null,
  },
  {
    first: "Olivia",
    last: "Jones",
    year: 1992,
    past: true,
    endYear: 2021,
  },
  {
    first: "Daniel",
    last: "Davis",
    year: 1989,
    past: false,
    endYear: null,
  },
  {
    first: "Sophia",
    last: "Miller",
    year: 1998,
    past: true,
    endYear: 2024,
  },
  {
    first: "Matthew",
    last: "Wilson",
    year: 1976,
    past: false,
    endYear: null,
  },
  {
    first: "Ava",
    last: "Anderson",
    year: 1991,
    past: true,
    endYear: 2022,
  },
];
//Filter the list of investors who were bon in 1990s
const newInventors = inventors.filter(
  (inventor) => inventor.year >= 1990 && inventor.year < 2000 && inventor.past
);
// console.table(newInventors);

//Print first and last names of inventors
const firstAndLast = inventors.map((inv) => {
  return { first: inv.first, last: inv.last };
});

// console.table(firstAndLast);

//sort by youngest to oldest
const homies = inventors.sort((a, b) => {
  return a.year > b.year ? 1 : -1;
});
// console.table(homies);

//count total age
const ages = inventors.reduce((total, inventor) => {
  return total + inventor.past ? inventor.endYear - inventor.year : 0;
}, 0);
// console.log(ages);

//sort the homies who lived the most
const homies2 = inventors.map((inventor) => {
  return inventor.past ? inventor.endYear - inventor.year : 0;
});
// console.table(homies2);
// console.log(homies2.sort().reverse());

const people = [
  "John, Doe",
  "Emily, Smith",
  "Michael, Johnson",
  "Sarah, Williams",
  "David, Brown",
  "Olivia, Jones",
  "Daniel, Davis",
  "Sophia, Miller",
  "Matthew, Wilson",
  "Ava, Anderson",
];

//sort the inventors alphabetically
const myPpl = people.sort((a, b) => {
  return a.split(",")[1] > b.split(",")[1] ? 1 : -1;
});
// console.table(myPpl);

// sum up the intance of each of these

const words = ["apple", "banana", "cherry", "apple", "banana", "apple"];

const instances = words.reduce((s, e) => {}, 0);

console.table(instances);
