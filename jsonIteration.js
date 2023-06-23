let studentDetails = [{
    "name" : "Nagapriyanka",
    "personal details" : {"age":25, "gender":"female", "city":"Madurai"},
    "marks" : [{"Maths":85},{"Physics":86},{"chemistry":87}],
    "cutoff" : 99,
    "iseligible" : "True"
},
{
    "name" : "Dhinesh",
    "personal details" : {"age":25, "gender":"male", "city":"Chennai"},
    "marks" : [{"Maths":85},{"Physics":86},{"chemistry":87}],
    "cutoff" : 55,
    "iseligible" : "False"

},
{
    "name" : "Ridhin",
    "personal details" : {"age":22, "gender":"male", "city":"Trichy"},
    "cutoff" : 86,
    "iseligible" : "True"
}]


// For Loop

for(i=0;i<studentDetails.length;i++){
    console.log(studentDetails[i].name)
    console.log(`   Personal Details      `);
    console.log(`age : ${studentDetails[i]["personal details"]["age"]}`)
    console.log(`gender : ${studentDetails[i]["personal details"]["gender"]}`)
    console.log(`city : ${studentDetails[i]["personal details"]["city"]}`)
    console.log(`Cutoff : ${studentDetails[i].cutoff}`)
    console.log(`Eligibility : ${studentDetails[i].iseligible}`)
}


//For in Loop

for(value in studentDetails){

    console.log(studentDetails[value].name)
    console.log(`   Personal Details      `);
    console.log(`age : ${studentDetails[value]["personal details"]["age"]}`)
    console.log(`gender : ${studentDetails[value]["personal details"]["gender"]}`)
    console.log(`city : ${studentDetails[value]["personal details"]["city"]}`)
   
}

//for  of loop


for(value of studentDetails){
   

    console.log(value.name)
    console.log(`   Personal Details      `);
    console.log(`age : ${value["personal details"]["age"]}`)
    console.log(`gender : ${value["personal details"]["gender"]}`)
    console.log(`city : ${value["personal details"]["city"]}`)
   
}

// For each loop

studentDetails.forEach((value) => {
    console.log(value.name)
    console.log(`   Personal Details      `);
    console.log(`age : ${value["personal details"]["age"]}`)
    console.log(`gender : ${value["personal details"]["gender"]}`)
    console.log(`city : ${value["personal details"]["city"]}`)
   

}) 