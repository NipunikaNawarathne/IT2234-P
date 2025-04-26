**🛠️ 1. What is MongoDB?**

MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents.
It is used widely in modern web and mobile applications.
* MongoDB Compass: A graphical interface for database management.
* MongoDB Shell (mongosh): A command-line tool to interact with MongoDB.

**📂 2. Create a Database**

**Using Compass**

Open MongoDB Compass ➡️ Click Create Database.

* Database Name: **unidb**
* Collection Name: **students**

Click Create Database.
![0 Create DB](https://github.com/user-attachments/assets/feff0def-322b-4fb5-9e57-e71ff4b0d419)

**Using Shell**

✅ This will create (or switch to) **unidb**.
~~~
use unidb
~~~

![0 0](https://github.com/user-attachments/assets/0441f324-4201-476b-b211-ae36d503ddfd)

**🗂️ 3. Create a Collection**

**Using Compass**

Inside your database, click Create Collection ➡️ Name it **students**.
![0 1](https://github.com/user-attachments/assets/0674fd87-8a9a-4ff6-80cc-e96c030bd8bd)

**Using Shell**

~~~
db.createCollection("students")
~~~

![0 Create Collection](https://github.com/user-attachments/assets/12f73b1e-60bc-4f80-9e3c-3f402ca343af)

**➕ 5. Insert Data**

**Insert One Document**

**Using Compass**

Go to users collection ➡️ Click Insert Document ➡️ Add:

**insertOne** Before Formatting
![0 6 insertOne Compass](https://github.com/user-attachments/assets/10eefcd2-2cae-48fc-92a8-e9c55bd5cb56)

**insertOne** After Formatting
![0 6 insertOne Compass After Format](https://github.com/user-attachments/assets/6452b9de-5cf2-4ad5-b1ba-cd988544d770)


**Using Shell**

~~~
db.students.insertOne({student_id:"2021SSM004", name:"Keshan", age:27 ,gpa:3.7, degree:"SSM", skills:["MongoDB", "CSS", "JAVA"]})
~~~

![0 5 insertOne After Enter](https://github.com/user-attachments/assets/97131784-388e-4e0e-adcb-a058a7754935)


**Insert Multiple Documents**

**Using Compass**

~~~
db.students.insertMany([{student_id:"2021IT003", name:"Sila", age:39 ,gpa:3.1, degree:"IT", skills:["MongoDB", "JAVA"]},{student_id:"2021SSM002", name:"Nanda", age:38 ,gpa:3.8, degree:"SSM", skills:["MongoDB", "NoSQL", "CSS", "JAVA"]}, {student_id:"2021IT004", name:"Kumari", age:20 ,gpa:3.3, degree:"IT", skills:["MongoDB", "CSS"]}])
~~~

![1 5 insertMany Query](https://github.com/user-attachments/assets/a8cd64eb-435f-41a0-9220-322c8c617f1b)

![1 6 insertMany Output](https://github.com/user-attachments/assets/106a44f6-2945-4517-9ff9-ef75242b52c8)




