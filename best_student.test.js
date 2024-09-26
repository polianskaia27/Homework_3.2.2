const { findBestStudent } = require("./best_student");
const { studentsData } = require("./students_data");

describe("Тестирование функции по поиску лучшего студента", () => {
  it("Поздравление для студентов первой группы", () => {
    const result = [
      "Поздравляем вас, Ivan, вы набрали наибольшее количество баллов: 35.",
      "Поздравляем вас, Stepan, вы набрали наибольшее количество баллов: 35.",
    ];
    expect(findBestStudent(studentsData[0])).toEqual(result);
  });
  it("Поздравление для студентов второй груупы", () => {
    const result = [
      "Поздравляем вас, Natalia, вы набрали наибольшее количество баллов: 25.",
      "Поздравляем вас, Marina, вы набрали наибольшее количество баллов: 25.",
      "Поздравляем вас, Dmitry, вы набрали наибольшее количество баллов: 25.",
    ];
    expect(findBestStudent(studentsData[1])).toEqual(result);
  });

  it("В третьей группе никто не отличился", () => {
    const result = ["В группе никто не отличился."];
    expect(findBestStudent(studentsData[2])).toEqual(result);
  });
});
