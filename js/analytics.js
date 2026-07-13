new Chart(document.getElementById("attendanceChart"),{

type:"line",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"Attendance %",

data:[92,94,96,95,97,98],

borderColor:"#004aad",

fill:false

}]

}

});

new Chart(document.getElementById("classChart"),{

type:"bar",

data:{

labels:["VI","VII","VIII","IX","X","XI","XII"],

datasets:[{

label:"Students",

data:[280,290,310,330,300,270,240],

backgroundColor:[
"#004aad",
"#2196f3",
"#4caf50",
"#ff9800",
"#9c27b0",
"#f44336",
"#009688"
]

}]

}

});

new Chart(document.getElementById("feeChart"),{

type:"doughnut",

data:{

labels:["Collected","Pending"],

datasets:[{

data:[92,8],

backgroundColor:["#4caf50","#f44336"]

}]

}

});

new Chart(document.getElementById("resultChart"),{

type:"pie",

data:{

labels:["A+","A","B+","B","C"],

datasets:[{

data:[150,220,180,80,25],

backgroundColor:[
"#4caf50",
"#2196f3",
"#ff9800",
"#9c27b0",
"#f44336"
]

}]

}

});