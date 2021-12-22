/* 
👉 Write your kata here!
*/
// It takes in three parameters  which is your firstname, lastname and age. It creates a username. The user name is created with the first letter of your first, a dot and then your surname and your age straight after. The first letter in the username has to be lowercase and the remaining letters are uppercase.
// if it is a double barrell name it keeps in the dash.

// For example
// (Dan-martin, martin, 45)  => (dMARTIN45)
// (kaz, MART-WER,80) => (kMART-WER80)

//👉 Write the function your CodeWarriors will start with below here:
export function createUsername(firstname, surname, age) {
  const usernameFirstLetter = firstname[0].toLowerCase();
  const usernameSurname = surname.toUpperCase();
  const yourAge = age;
  const username = String(usernameFirstLetter + usernameSurname + age);
  return username
}

