import { studentsData } from "./students_data.mjs";

export function findBestScore(array) {
  let bestScore;
  const scors = [];
  array.forEach((element) => {
    scors.push(element.score);
  });
  bestScore = Math.max.apply(null, scors);
  return bestScore;
}

export function findBestStudent(findBestScoreFunc, arr) {
  let theBestScore = findBestScoreFunc(arr);
  if (arr.every((student) => student.score === 0)) {
    console.log(`В группе никто не отличился.`);
  } else
    arr.forEach((element) => {
      if (element.score === theBestScore) {
        console.log(
          `Поздравляем вас, ${element.name}, вы набрали наибольшее количество баллов: ${element.score}.`
        );
      }
    });
}
// console.log(findBestStudent(findBestScore, studentsData[2]));


