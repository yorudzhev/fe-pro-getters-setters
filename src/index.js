function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    get() {
      return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    },
  });
}

export const school = {
  students: {
    0: new Student("Maria", [45, 76, 45, 98, 90, 87, 56]), // 71
    1: new Student("Dmytro", [67, 34, 87, 34, 98, 76]), // 66
    2: new Student("Anton", [45, 34, 87, 34, 23, 76]), // 49.83
    3: new Student("Olha", [67, 34, 34, 23, 98, 76]), // 55.33
    4: new Student("Anna", [67, 34, 85, 34, 85, 76]), // 63.5
    5: new Student("Bohdan", [67, 25, 87, 34, 25, 76]), // 52.33
    6: new Student("Eugene", [97, 34, 78, 85, 98, 65]), // 76.16
    7: new Student("Ivan", [76, 89, 78, 98, 98, 99, 89, 96]), // 90.38
  },

  get aGradeStudents() {
    let arrayStudents = Object.values(this.students);
    // return arrayStudents;
    let result = [];
    arrayStudents.forEach((item, index, arr) => {
      if (arr[index][`averageGrade`] >= 90 && arr[index][`averageGrade`] <= 100)
        result.push(item.name);
    });
    return result.join(`, `);
  },

  get bGradeStudents() {
    let arrayStudents = Object.values(this.students);
    let result = [];
    arrayStudents.forEach((item, index, arr) => {
      if (arr[index][`averageGrade`] >= 75 && arr[index][`averageGrade`] < 90)
        result.push(item.name);
    });
    return result.join(`, `);
  },

  get cGradeStudents() {
    let arrayStudents = Object.values(this.students);
    let result = [];
    arrayStudents.forEach((item, index, arr) => {
      if (arr[index][`averageGrade`] >= 60 && arr[index][`averageGrade`] < 75)
        result.push(item.name);
    });
    return result.join(`, `);
  },

  get dGradeStudents() {
    let arrayStudents = Object.values(this.students);
    let result = [];
    arrayStudents.forEach((item, index, arr) => {
      if (arr[index][`averageGrade`] < 60) result.push(item.name);
    });
    return result.join(`, `);
  },
};
