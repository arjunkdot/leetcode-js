/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let fullCircleCount = 0;
  while (students.length > 0) {
    const currentStudent = students.shift();

    if (currentStudent === sandwiches[0]) {
      sandwiches.shift();
      fullCircleCount = 0;
    } else {
      students.push(currentStudent);
      fullCircleCount++;
    }

    if (fullCircleCount === students.length) break;
  }

  return students.length;
};
