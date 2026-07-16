function calculateResult(){

let marks=document.querySelectorAll(".mark");

let total=0;

marks.forEach(function(mark){

total+=Number(mark.value);

});

let percentage=(total/500)*100;

let grade="";

if(percentage>=90){

grade="A+";

}

else if(percentage>=80){

grade="A";

}

else if(percentage>=70){

grade="B+";

}

else if(percentage>=60){

grade="B";

}

else if(percentage>=50){

grade="C";

}

else{

grade="Fail";

}

document.getElementById("total").innerHTML=total;

document.getElementById("percentage").innerHTML=percentage.toFixed(2)+"%";

document.getElementById("grade").innerHTML=grade;

}

calculateResult();