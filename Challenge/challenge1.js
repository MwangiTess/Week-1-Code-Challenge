// Student Grade Generator (Toy Problem)

let score = prompt(`Enter Student grade`);

const gradeGenerator = (value, total)=>{
   let totalPercent = (value/total) *100;
   let grade = ''

    if (totalPercent <= 100 && totalPercent >= 79) {
        grade = "A";
      } else if (totalPercent <= 79 && totalPercent >= 60) {
        grade = "B";
      } else if (totalPercent <= 59 && totalPercent >= 49) {
        grade = "C";
      } else if (totalPercent <= 49 && totalPercent >=40 ) {
        grade = "D"
      } else {
        grade = "F";
      }
      return  `You got a ` +  '' +  grade + '' + ` of `  + `(` + totalPercent + `)` + `%`
    }

let studentGrades = gradeGenerator(score, 100)
console.log(studentGrades);



