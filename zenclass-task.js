// database: //  zen> show collections
// attendance
// codekata
// companydrives
// mentor
// tasks
//topics
// users

// zen> 
db.createCollection("users")
//insert data 
db.users.insertMany([{"studentID":1,"name":"Ashwin"},{"studentID":2,"name":"Anand"},{"studentID":3,"name":"Aishwarya"},{"studentID":4,"name":"Bindu"},{"studentID":5,"name":"Bindu"}]);

// zen> 
db.createCollection("codekata")
//
db.codekata.insertMany([{"studentID":1,"solved":233,"total":500},{"studentID":2,"solved":280,"total":500},{"studentID":3,"solved":183,"total":500},{"studentID":4,"solved":350,"total":500},{"studentID":5,"solved":335,"total":500}]);
db.codekata.insertMany([{"studentID":6,"solved":335,"total":500},{"studentID":7,"solved":335,"total":500},{"studentID":8,"solved":335,"total":500},{"studentID":9,"solved":335,"total":500},{"studentID":10,"solved":335,"total":500},{"studentID":11,"solved":229,"total":500},{"studentID":12,"solved":229,"total":500},{"studentID":13,"solved":229,"total":500},{"studentID":14,"solved":229,"total":500},{"studentID":15,"solved":229,"total":500},{"studentID":16,"solved":229,"total":500},{"studentID":17,"solved":229,"total":500},{"studentID":18,"solved":229,"total":500},{"studentID":19,"solved":229,"total":500},{"studentID":20,"solved":401,"total":500},{"studentID":21,"solved":401,"total":500},{"studentID":22,"solved":401,"total":500},{"studentID":23,"solved":401,"total":500},{"studentID":24,"solved":401,"total":500},{"studentID":25,"solved":401,"total":500},]);

//zen> 
db.createCollection("attendance")
//([
    db.attendance.insertMany([{"attendanceDate":"20201005","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"topic":"JavascriptBasics","absentees":[21,23,25]},{"attendanceDate":"20201010","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,20],"topic":"JavascriptArraymethods","absentees":[20,14,15]},{"attendanceDate":"20201015","studentsPresent":[2,3,4,5,6,7,8,9,10,11,12,13,14,15],"topic":"JavascriptHTMLDOM","absentees":[1,17]},{"attendanceDate":"20201020","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,21,23],"topic":"JavascriptFetchAPI","absentees":[19,22]},{"attendanceDate":"20201023","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,22,25],"topic":"JavascriptAsync","absentees":[20,16]},{"attendanceDate":"20201025","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19,20,21,22],"topic":"ReactBasics","absentees":[24,25]},{"attendanceDate":"20201029","studentsPresent":[1,2,3,4,5,6,7,8,10,11,12,13,14,15],"topic":"Reactstateandprops","absentees":[9,19]},{"attendanceDate":"20201030","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,14,15],"topic":"ReactRouterDOM","absentees":[13,17]},{"attendanceDate":"20201101","studentsPresent":[1,2,3,4,6,7,8,9,10,11,12,13,14,15,20,23,22,25,17],"topic":"ReactReduxStore","absentees":[5,21]},])
    db.attendance.insertMany([{"attendanceDate":"20200910","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"topic":"HTML5Basics","absentees":[21,23,25]},{"attendanceDate":"20200920","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,20],"topic":"CSSFlexBox","absentees":[20,14,15]}])

//zen> 
db.createCollection("tasks")
//
db.tasks.insertMany([{"taskDate":"20201005","task":"variablesandoperatorspractice","taskSubmitted":[1,2,3],"taskPending":[7,8,9]},{"taskDate":"20201010","task":"Arraymethodspractice","taskSubmitted":[1,2],"taskPending":[10,5,4]},{"taskDate":"20201015","task":"forms,calculatorusingDOM","taskSubmitted":[2,3,5],"taskPending":[1,11,13]},{"taskDate":"20201020","task":"DisplayflagsfromRestcountryAPI","taskSubmitted":[1,3,4,8,9],"taskPending":[11,21,22]},{"taskDate":"20201023","task":"TimerCountdown","taskSubmitted":[3,4,5],"taskPending":[6,16]},{"taskDate":"20201025","task":"Reactcomponentpractice","taskSubmitted":[1,2,3,4,5],"taskPending":[13,17]},{"taskDate":"20201029","task":"Displaydashboardincards","taskSubmitted":[5,2,3],"taskPending":[17,18,19]},{"taskDate":"20201030","task":"CRUDimplementationusingRoutes","taskSubmitted":[2,3,10,21,4],"taskPending":[6,19]},{"taskDate":"20201101","task":"FoodApp","taskSubmitted":[11,12,13,14],"taskPending":[16,1,23]}]);
db.tasks.insertMany([{"taskDate":"20200910","task":"HTML5Forms","taskSubmitted":[1,2,3,12,15,15],"taskPending":[10,8,9]},{"taskDate":"20200920","task":"Resume Using Flexbox","taskSubmitted":[1,2],"taskPending":[10,5,4]},])


//zen>
 db.createCollection("mentor");
 //
 db.mentor.insertMany([{"mentorID":1,"mentor":"Sanjay","mentee":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},{"mentorID":2,"mentor":"Vishnu","mentee":[6,7,8,9,10,21,22,23,24,25]},{"mentorID":3,"mentor":"Farook","mentee":[1,2,3,4,5,18,19,20]},]); 

//  zen> 
db.createCollection("companydrives");
//
db.companydrives.insertMany([{"drive":"Amazon","dateHeld":"20200909","attendedStudents":[1,2,3,4,5]},{"drive":"Meta","dateHeld":"20201019","attendedStudents":[6,7,8,9,10]},{"drive":"Google","dateHeld":"20201029","attendedStudents":[11,12,13,14,15]},{"drive":"Myntra","dateHeld":"20201110","attendedStudents":[16,17,18,19,20]},]);

// zen> 
db.createCollection("topics");
//
db.topics.insertMany([{"topicDate":"20201005","topic":"JavascriptBasics"},{"topicDate":"20201010","topic":"JavascriptArraymethods"},{"topicDate":"20201015","topic":"JavascriptHTMLDOM",},{"topicDate":"20201020","topic":"JavascriptFetchAPI"},{"topicDate":"20201023","topic":"JavascriptAsync"},{"topicDate":"20201025","topic":"ReactBasics",},{"topicDate":"20201029","topic":"Reactstateandprops",},{"topicDate":"20201030","topic":"ReactRouterDOM",},{"topicDate":"20201101","topic":"ReactReduxStore",},]);
db.topics.insertMany([{"topicDate":"20200910","topic":"HTML5Basics"},{"topicDate":"20200920","topic":"CSSFlexBox"},])

//---------------------------------------------------------------------------
//QUERIES: 
//---------------------------------------------------------------------------
// Find all the topics and tasks which are thought in the month of October 
db.tasks.aggregate([{$match:{taskDate:/202010/}},{$lookup:{from:"topics",localField:"taskDate",foreignField:"topicDate",as:"topics"}},{$project:{"taskDate":1, "task":1,"topics.topic":1,_id:0,}}]);

 db.tasks.aggregate([{$match:{taskDate:/202010/}},{$lookup:{from:"topics",localField:"taskDate",foreignField:"topicDate",as:"topics"}},]); 

 db.tasks.aggregate([{$match:{taskDate:/202010/}},{$lookup:{from:"topics",localField:"taskDate",foreignField:"topicDate",as:"topics"}}]).forEach((doc)=>{print("Date:",doc.taskDate,"Task:",doc.task,"Topic:",doc.topics[0].topic)});

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companydrives.find({dateHeld:{$gte:"20201015",$lte:"20201030"}},{_id:0}).toArray();

// Find all the company drives and students who are appeared for the placement.
db.companydrives.find().toArray().forEach((doc)=>{print("\nDate:",doc.dateHeld,"\nCompany:",doc.drive,"\nparticipants:"),doc.attendedStudents.forEach((val)=>{db.users.find({studentID:val},{_id:0}).toArray().forEach((x)=>print("ID:",x.studentID,"Name:",x.name))})})

// Find the number of problems solved by the user in codekata
db.users.aggregate([{$lookup:{from:"codekata",localField:"studentID",foreignField:"studentID",as:"codekata"}},{$project:{"studentID":1,"name":1,"codekata.solved":1,_id:0,}}])

// Find all the mentors with who has the mentee's count more than 15
db.mentor.aggregate([{$project:{mentor:1,_id:0,mentees:{$size:"$mentee"}}},{$match:{mentees:{$gt:15}}}]);

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.tasks.aggregate([{$match:{taskDate:{$gte:"20201015",$lte:"20201030"}}},{$lookup:{from:"attendance",localField:"taskDate",foreignField:"attendanceDate",as:"attendance"}},{$project:{"taskDate":1,"task":1,"taskPending":1,_id:0,"attendance.topic":1,"attendance.absentees":1}}]).toArray().forEach((doc)=>{print("\nDate:",doc.taskDate,"\nTask:",doc.task,"\nTask not submitted by:"),doc.taskPending.forEach((val)=>{db.users.find({studentID:val},{_id:0}).toArray().forEach((x)=>print("ID:",x.studentID,"Name:",x.name))}),print("Topic:",doc.attendance[0].topic,"\nAbsent for class:"),doc.attendance[0].absentees.forEach((abs)=>{db.users.find({studentID:abs},{_id:0}).toArray().forEach((y)=>print("ID:",y.studentID,"Name:",y.name))})});