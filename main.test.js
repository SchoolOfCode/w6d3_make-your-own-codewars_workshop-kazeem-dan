import { createUsername } from "./main.js";

//👉 Write your tests below here:


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

