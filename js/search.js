const pages=[

{name:"Home",link:"index.html"},

{name:"About",link:"about.html"},

{name:"Admissions",link:"admission-form.html"},

{name:"Students",link:"students.html"},

{name:"Teachers",link:"teachers.html"},

{name:"Parent Portal",link:"parent-portal.html"},

{name:"ERP Dashboard",link:"erp-dashboard.html"},

{name:"Results",link:"result.html"},

{name:"Report Card",link:"report-card.html"},

{name:"Attendance",link:"attendance.html"},

{name:"Library",link:"library.html"},

{name:"Gallery",link:"gallery.html"},

{name:"Events",link:"events.html"},

{name:"Achievements",link:"achievements.html"},

{name:"Notifications",link:"notifications.html"},

{name:"Analytics",link:"analytics.html"},

{name:"Contact",link:"contact.html"}

];

function searchWebsite(){

const input=document.getElementById("globalSearch").value.toLowerCase();

const results=document.getElementById("searchResults");

results.innerHTML="";

if(input===""){

results.style.display="none";

return;

}

pages.forEach(page=>{

if(page.name.toLowerCase().includes(input)){

results.innerHTML+=`

<a href="${page.link}">

${page.name}

</a>

`;

}

});

results.style.display=results.innerHTML?"block":"none";

}