# 📦 Create Collections & Insert Documents

**Commands to create "students" and "grades" collections and insert data.**

Create collections:

```
db.createCollection("students")
db.createCollection("grades")
```

 Verify collections:

```
show collections
```

Insert documents:

Use insertMany for both students and grades as you have done.

```
db.students.insertMany([
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a1"),
  name: "Alice Johnson",
  enrollmentYear: 2021,
  major: "Computer Science",
  email: "alice.johnson@example.com",
  gender: "Female",
  age: 20
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a2"),
  name: "Bob Smith",
  enrollmentYear: 2020,
  major: "Mathematics",
  email: "bob.smith@example.com",
  gender: "Male",
  age: 22
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a3"),
  name: "Clara Lee",
  enrollmentYear: 2022,
  major: "Physics",
  email: "clara.lee@example.com",
  gender: "Female",
  age: 19
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a4"),
  name: "Daniel Kim",
  enrollmentYear: 2021,
  major: "Engineering",
  email: "daniel.kim@example.com",
  gender: "Male",
  age: 21
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a5"),
  name: "Eva Chen",
  enrollmentYear: 2020,
  major: "Biology",
  email: "eva.chen@example.com",
  gender: "Female",
  age: 23
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a6"),
  name: "Frank Wright",
  enrollmentYear: 2019,
  major: "Chemistry",
  email: "frank.wright@example.com",
  gender: "Male",
  age: 24
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a7"),
  name: "Grace Liu",
  enrollmentYear: 2022,
  major: "Economics",
  email: "grace.liu@example.com",
  gender: "Female",
  age: 20
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a8"),
  name: "Henry Davis",
  enrollmentYear: 2021,
  major: "Philosophy",
  email: "henry.davis@example.com",
  gender: "Male",
  age: 22
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41a9"),
  name: "Ivy Zhang",
  enrollmentYear: 2020,
  major: "Statistics",
  email: "ivy.zhang@example.com",
  gender: "Female",
  age: 21
},
{
  _id: ObjectId("64b1fcd1f4a13a001e3d41aa"),
  name: "Jack Lee",
  enrollmentYear: 2023,
  major: "Business",
  email: "jack.lee@example.com",
  gender: "Male",
  age: 18
}
])
```

```
db.grades.insertMany([
{ subject: "Mathematics", score: 85, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a1") },
{ subject: "English", score: 90, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a1") },


{ subject: "Mathematics", score: 75, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a2") },
{ subject: "Statistics", score: 80, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a2") },


{ subject: "Physics", score: 92, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a3") },
{ subject: "Mathematics", score: 86, term: "Spring 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41a3") },


{ subject: "Engineering", score: 89, term: "Fall 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a4") },
{ subject: "Mathematics", score: 84, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a4") },


{ subject: "Biology", score: 78, term: "Spring 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a5") },
{ subject: "Chemistry", score: 82, term: "Fall 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a5") },


{ subject: "Chemistry", score: 88, term: "Fall 2021", studentId: ObjectId("64b1fcd1f4a13a001e3d41a6") },
{ subject: "Physics", score: 79, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a6") },


{ subject: "Economics", score: 83, term: "Spring 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41a7") },
{ subject: "English", score: 89, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a7") },


{ subject: "Philosophy", score: 91, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a8") },
{ subject: "History", score: 77, term: "Spring 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41a8") },


{ subject: "Statistics", score: 79, term: "Spring 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a9") },
{ subject: "Data Science", score: 88, term: "Fall 2022", studentId: ObjectId("64b1fcd1f4a13a001e3d41a9") },

{ subject: "Business", score: 87, term: "Fall 2023", studentId: ObjectId("64b1fcd1f4a13a001e3d41aa") },
{ subject: "Finance", score: 82, term: "Spring 2024", studentId: ObjectId("64b1fcd1f4a13a001e3d41aa") }
])
```

# 👁️ View Collections (Table View)

**How to display documents using MongoDB Shell or Compass.**



# 👩‍🎓 Filter Female Students

Query to find female students and show only name, age, and gender.

# 📅 Find Students by Age & Enrollment

Students younger than 22 and enrolled after 2020.

# 🔗 Join Grades with Students ("Alice Johnson")

Use $lookup to find grades of a specific student.

# 🧮 Count Students by Subject ("Mathematics")

Aggregation to count how many students studied Mathematics.

# 🧑‍🏫 Students with Grades in "Fall 2022"
Join and filter to show students with grades in Fall 2022 term.
