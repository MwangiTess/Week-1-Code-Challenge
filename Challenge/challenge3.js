// Net Salary Calculator

const salary = prompt('Enter your gross Salary?'); 

//Net salary Calculation 

function netSalaryCalculator(basicSalary) { 
let  netSalary = basicSalary - PAYE(basicSalary) - nssfRates(basicSalary) - nhifRates(basicSalary);

        return netSalary;
}

netSalaryCalculator(salary);
// console.log(netSalaryCalculator(salary))

//Nhif calculations:

function nhifRates(basicSalary) {
    let  nhifPay = basicSalary
      if (basicSalary > 0 && basicSalary <= 5999) { 
          nhifPay = 150;
     }
         else if (basicSalary > 5999 && basicSalary <=29999) { 
          nhifPay = 850;
      }
      else if (basicSalary > 29999 && basicSalary <=69999) {  
          nhifPay = 1300;
      }
      else {
          nhifPay = 1700; 
      }
      return nhifPay;
  }

      nhifRates(salary);
//  console.log(nhifRates(salary))


  function PAYE(basicSalary) {
      let taxAmount = basicSalary;
          if (basicSalary > 0 && basicSalary < 24000) {
              taxAmount = (basicSalary * (0.01)) 
          } 
          else if (basicSalary >24001 && basicSalary <= 32333) { 
             taxAmount = (basicSalary * (0.25))  
          }
          else {
              taxAmount = (basicSalary * (0.03))  
          }
          return taxAmount
     }
  
      PAYE(salary);
      //console.log(PAYE(salary))


 //Nssf Rates:

 function nssfRates(basicSalary) {
     let nssf = (basicSalary * (0.06));
     return nssf;
 }

    nssfRates(salary);
    //console.log(nssfRates(salary)); 

