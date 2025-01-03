prompt("What İs Your Name");
prompt("What İs Their Name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);

if(loveScore > 70){
    alert("Your love score is"+ loveScore + "%" + "You love each other like Ferhat and Şirin");
}
else {
    alert("Your love score is"+ loveScore + "%");
}

alert("Your love score is"+ loveScore + "%");


//----VKİ----
function bmiCalculator(weight, height) {
    var vki = weight / Math.pow(height , 2);
    var vki2 = Math.round(vki);
    
    if (vki2 < 18.5) {
      return "Your BMI is " + vki2 + ", so you are underweight.";
    } else if (vki2 >= 18.5 && vki2 <= 24.9) {
      return "Your BMI is " + vki2 + ", so you have a normal weight.";
    } else {
      return "Your BMI is " + vki2 + ", so you are overweight.";
    }
  }
  
  var bmiMessage = bmiCalculator(65, 1.8);
  console.log(bmiMessage); // Output: "Your BMI is 20, so you have a normal weight."
  