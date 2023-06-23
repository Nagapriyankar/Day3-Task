let resume = {
 "name" : 'Nagapriyanka.R',
 "email" : 'nagapriyankar@gmail.com',
 "mobile" : 9876543210,
 "summary" : `Programmer analyst with 3+ years of experience in providing customer support and worked in automation tool. Ability to learn new technologies and work in the same`,
 "skills" : ['SQL and Oracle database','UiPath','NoSQL database','Effective communication', 'Technical Writing','Project Management','Customer Service'],
 "workHistory" : {"company" : 'Cognizant Technology Solutions', "Experience" : '3 Years', "Designation" : 'Programmer Analyst'},
 "education" : [{"School":"Vikaasa School", "YearOfPass": 2013},{"Degree" : 'B.E', "Major" : 'ECE', "YearOfPass" : 2017}]
};


//console.log(resume);
console.log(`Name : ${resume.name}`);
console.log(`Email : ${resume.email}`);
console.log(`Mobile : ${resume.mobile}`);
console.log(`Profile summary : ${resume.summary}`);
console.log(`Skills : ${resume.skills}`);
console.log(`Work history`);
console.log(`Company: ${resume.workHistory.company}`);
console.log(`Experience: ${resume.workHistory.Experience}`);
console.log(`Designation: ${resume.workHistory.Designation}`);
console.log(`School: ${resume.education[0].School}`);
console.log(`Year Of Pass: ${resume.education[0].School}`);
console.log(`Degree: ${resume.education[1].Degree}`);
console.log(`major: ${resume.education[1].Major}`);
console.log(`Year of Pass: ${resume.education[1].YearOfPass}`);



