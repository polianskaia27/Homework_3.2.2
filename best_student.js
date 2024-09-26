function findBestStudent(arr) {
  const bestScore = Math.max(...arr.map((student) => student.score));
  if (bestScore === 0) {
    return ["В группе никто не отличился."];
  } else {
    const newArr = arr
      .filter((student) => student.score === bestScore)
      .map(
        (student) =>
          `Поздравляем вас, ${student.name}, вы набрали наибольшее количество баллов: ${student.score}.`
      );
    return newArr;
  }
}

module.exports = { findBestStudent };
