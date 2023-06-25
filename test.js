// Default port : 27017
// Db->Collections->Document

// commad to see the databases 
// show dbs

// to create a DB or use a DB
// use `DB-NAME`

// see the collections 
// show collections

// to create a collections 
// two possible ways 

// 1. createCollection
// 2. directly insert query 

db.createCollection("mentors")

const mentorList = [
   {
    "name" : "Sanjay",
    "batch" : "b47WD",
    "stack" :  "MERN"
   },
   {
    "name" : "Ragav",
    "batch" : "b45WD",
    "stack" :  "MERN"
   },
   {
    "name" : "Sangeetha",
    "batch" : "b43WD",
    "stack" :  "MERN"
   },
   {
    "name" : "Nagaraj",
    "batch" : "b42WD",
    "stack" :  "MERN"
   }
]

// insert query to create ot add data
db.mentors.insertMany(
    [
        {
         "name" : "Sanjay",
         "batch" : "b47WD",
         "stack" :  "MERN"
        },
        {
         "name" : "Ragav",
         "batch" : "b45WD",
         "stack" :  "MERN"
        },
        {
         "name" : "Sangeetha",
         "batch" : "b43WD",
         "stack" :  "MERN"
        },
        {
         "name" : "Nagaraj",
         "batch" : "b42WD",
         "stack" :  "MERN"
        }
     ]
)

// find query to find all the mentors
db.mentors.find()
// creating a collection type 2 by directly inserting data into a collection
db.students.insertMany(
    [
        {
            "name" : "Anbu",
            "batch":"b43WD",
            "task":80,
            "experience":5
        },
        {
            "name" : "Aravinth",
            "batch":"b42WD",
            "task":70,
            "experience":4
        },
        {
            "name" : "Chandru",
            "batch":"b47WD",
            "task":65,
            "experience":3
        },
        {
            "name" : "Dinesh",
            "batch":"b45WD",
            "task":50,
            "experience":2
        },
        {
            "name" : "Kalaivani",
            "batch":"b43WD",
            "task":95,
            "experience":1
        },
        {
            "name" : "Anbu",
            "batch":"b43WD",
            "task":80,
            "experience":5
        },
        {
            "name" : "Aravinth",
            "batch":"b42WD",
            "task":70,
            "experience":4
        },
        {
            "name" : "Chandru",
            "batch":"b47WD",
            "task":65,
            "experience":3
        },
        {
            "name" : "Dinesh",
            "batch":"b45WD",
            "task":50,
            "experience":2
        },
        {
            "name" : "Kalaivani",
            "batch":"b43WD",
            "task":95,
            "experience":1
        },
        {
            "name" : "Anbu",
            "batch":"b43WD",
            "task":80,
            "experience":5
        },
        {
            "name" : "Aravinth",
            "batch":"b42WD",
            "task":70,
            "experience":4
        },
        {
            "name" : "Chandru",
            "batch":"b47WD",
            "task":65,
            "experience":3
        },
        {
            "name" : "Dinesh",
            "batch":"b45WD",
            "task":50,
            "experience":2
        },
        {
            "name" : "Kalaivani",
            "batch":"b43WD",
            "task":95,
            "experience":1
        },
        {
            "name" : "Anbu",
            "batch":"b43WD",
            "task":80,
            "experience":5
        },
        {
            "name" : "Aravinth",
            "batch":"b42WD",
            "task":70,
            "experience":4
        },
        {
            "name" : "Chandru",
            "batch":"b47WD",
            "task":65,
            "experience":3
        },
        {
            "name" : "Dinesh",
            "batch":"b45WD",
            "task":50,
            "experience":2
        },
        {
            "name" : "Kalaivani",
            "batch":"b43WD",
            "task":95,
            "experience":1
        },
        {
            "name" : "Anbu",
            "batch":"b43WD",
            "task":80,
            "experience":5
        },
        {
            "name" : "Aravinth",
            "batch":"b42WD",
            "task":70,
            "experience":4
        },
        {
            "name" : "Chandru",
            "batch":"b47WD",
            "task":65,
            "experience":3
        },
        {
            "name" : "Dinesh",
            "batch":"b45WD",
            "task":50,
            "experience":2
        },
        {
            "name" : "Kalaivani",
            "batch":"b43WD",
            "task":95,
            "experience":1
        }
    ]
)

db.students.find() // gives docs as per limitations (here 20 docs at a time), 
//type "it" for more, next set of data and so on..
db.students.find().toArray() // gives all docs in the collectiion

db.students.find().forEach(function(stud){print("student name "+ stud.name)})

db.students.find().forEach(function (s){ print( "name is: " + s.name + " task score is: " + s.task) } );  

//to count docs in a collection
zenclass> db.students.count();  
// DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
25
zenclass> db.students.estimatedDocumentCount();
25
zenclass> db.students.countDocuments();
25
//find disctinct vals based on a key 
zenclass> db.students.distinct("name");
[ 'Anbu', 'Aravinth', 'Chandru', 'Dinesh', 'Kalaivani' ]

//find a specific search 
zenclass> db.students.find({name:"Kalaivani"});

//find one result for a search 
zenclass> db.students.findOne({name:"Kalaivani"});
// {
//   _id: ObjectId("648997f674fc886e99b1f2ab"),
//   name: 'Kalaivani',
//   batch: 'b43WD',
//   task: 95,
//   experience: 1
// }

// find string pattern while specific search 
zenclass> db.students.find({name:/dru/}); // Chandru
zenclass> db.students.find({name:/Kal.*/}); // kalai
zenclass> db.students.find({name:/Kal/}); // kalai

//aggregations
// specific find
db.students.find({name:"Chandru"})
db.students.findOne({_id:ObjectId("64854c2e34d8ded8befd5f0e")})

// sorting-------------- 
//ascending 
db.students.find().sort({name:1}).toArray(); 
//toArray() is usually at last as it only decides to fetch all the found results 
db.students.find().sort({experience:1}).toArray()
//descending
db.students.find().sort({name:1}).limit(6).skip(2)
// count
db.students.find({experience:2}).count();
zenclass> db.students.find({experience:5}).count();
6
// greater than
db.students.find({task:{$gt:90}})
db.students.find({task:{$gt:70}})
// greater then or equla to lessthan or equal to
db.students.find({task:{$gte:70}})
db.students.find({task:{$lte:70}})
//less than
db.students.find({task:{$lt:70}})
db.students.find({task:{$gt:90}})
db.students.find({experience:{$lt:3}}); 
db.students.find({experience:{$lt:3,$gt:1}});
// equal to operator
db.students.find({task:{$eq:95}});
// not operator
db.students.find({experience:{$not:{$lt:3,$gt:1}}}); // 1 3 4 5
db.students.find({experience:{$not:{$gt:1, $lt:4}}}) // 1, 4, 5
//in operator 
db.students.find({task:{$in:[65,95]}}); //in requires values in array 
// agrregate in between values 
db.students.find({experience:{$gt:1, $lt:4}}) // 2, 3
// and logical operator 
db.students.find({$and:[{task:{$gt:50}}, {experience: {$lt:3}}] }); 
// or agggregations
db.students.find({$or:[{task:{$gt:50}}, {experience: {$lt:3}}]});
db.students.find({$or:[{task:70}, {experience : 5}]})

// staging in aggregations
// 1. relations in embedded - nesting upto 100 levels

db.mentors.aggregate([
   {
    $lookup:{
        from: "students",
        localField:"batch",
        foreignField:"batch",
        as : "student_list"
    }
   }
])

// lookup 
db.mentors.aggregate([ { $lookup : { from:"students", localField: "batch", foreignField: "batch", as: "mentors-students" } } ]);

// aggregation 
// db.collections.aggregate([stage1, stage2, stage3]) 

db.mentors.aggregate([ 
    {$match:{name:"Sanjay"}}, 
{ $lookup : { from:"students", localField: "batch", foreignField: "batch", as: "mentors-students" } } ]);

//group
db.students.aggregate([ { $match: { batch: "b42WD" } }, { $group: { _id: "$task", name:{$addToSet :"$name" } } }])
//op
[ { _id: 70, name: [ 'Aravinth' ] } ]
// group w counting documents
db.students.aggregate([ { $match: { batch: "b42WD" } }, { $group: { _id: "$task", name:{$addToSet :"$name" },Totalcount : {$sum :1} } }])
//op
[ { _id: 70, name: [ 'Aravinth' ], Totalcount: 6 } ]

db.students.aggregate([
    {$match:{batch:"b43WD"}},
    {$group:{_id:"$name", totalExperience:{$sum:"$experience"}}},
])

// delete dupilcates

db.students.aggregate([
    {$group :{
        _id:"$name", 
        duplicate:{$addToSet:"$_id"},
        Totalcount : {$sum :1}
    }},
    {
        $match : {
            Totalcount : {$gt:1} 
        }
    }
]).forEach((doc)=>{
    doc.duplicate.shift(); 
    db.students.deleteMany({_id:{$in:doc.duplicate}})
})


// update a document
db.students.updateOne({name:"Chandru"}, {$set:{task:75}})