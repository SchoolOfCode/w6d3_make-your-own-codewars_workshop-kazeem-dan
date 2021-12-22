// const { TestWatcher } = require("jest")
import { createUsername } from "./main.js";

//👉 Write your tests below here:
// It takes in three parameters  which is your firstname, lastname and age. It creates a username. The user name is created with the first letter of your first, a dot and then your surname and your age straight after. The first letter in the username has to be lowercase and the remaining letters are uppercase.
// if it is a double barrell name it keeps in the dash.

// For example
// (Dan-martin, martin, 45)  => (dMARTIN45)
// (kaz, MART-WER,80) => (kMART-WER80)

describe(`Username Function for Kata`, function () {
  test(`Should create a username out of the 3 paramaters given. For example (Dan, martin, 23) => dMARTIN23`, function () {
    const firstname = "Dan";
    const surname = "Martin";
    const age = 23;
    const expected =
      firstname[0].toLowerCase() + surname.toUpperCase() + Number(age);
    console.log(expected);
    const actual = createUsername(firstname, surname, age);
    expect(actual).toEqual(expected);
  });
  test(`Should create a username out of the 3 paramaters given. For example (Dan, martin, 23) => dMARTIN23`, function () {
    const firstname = "Bob";
    const surname = "kazeem-mali";
    const age = 34;
    const expected =
      String(firstname[0].toLowerCase()) +
      String(surname.toUpperCase()) +
      Number(age);
    const actual = createUsername(firstname, surname, age);
    expect(actual).toBe(expected);
  });
});

