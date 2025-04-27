## 🛠️ 1. What is MongoDB?

MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents.
It is used widely in modern web and mobile applications.
* MongoDB Compass: A graphical interface for database management.
* MongoDB Shell (mongosh): A command-line tool to interact with MongoDB.

## 📂 2. Create a Database

**🧭 Using Compass**

Open MongoDB Compass ➡️ Click Create Database.

* Database Name: **unidb**
* Collection Name: **students**

Click Create Database.
![0 Create DB](https://github.com/user-attachments/assets/feff0def-322b-4fb5-9e57-e71ff4b0d419)

**🖥️ Using Shell**

✅ This will create (or switch to) **unidb**.
~~~
use unidb
~~~

![0 0](https://github.com/user-attachments/assets/0441f324-4201-476b-b211-ae36d503ddfd)

## 🗂️ 3. Create a Collection

**🧭 Using Compass**

Inside your database, click Create Collection ➡️ Name it **students**.

![0 1](https://github.com/user-attachments/assets/0674fd87-8a9a-4ff6-80cc-e96c030bd8bd)

**🖥️ Using Shell**

~~~
db.createCollection("students")
~~~

![0 Create Collection](https://github.com/user-attachments/assets/12f73b1e-60bc-4f80-9e3c-3f402ca343af)

## ➕ 4. Insert Data

**Insert One Document**

**🧭 Using Compass**

Go to users collection ➡️ Click Insert Document ➡️ Add:

**insertOne** Before Formatting

![0 6 insertOne Compass](https://github.com/user-attachments/assets/10eefcd2-2cae-48fc-92a8-e9c55bd5cb56)

**insertOne** After Formatting

![0 6 insertOne Compass After Format](https://github.com/user-attachments/assets/6452b9de-5cf2-4ad5-b1ba-cd988544d770)


**🖥️ Using Shell**

~~~
db.students.insertOne({student_id:"2021SSM004", name:"Keshan", age:27 ,gpa:3.7, degree:"SSM", skills:["MongoDB", "CSS", "JAVA"]})
~~~

![0 5 insertOne After Enter](https://github.com/user-attachments/assets/97131784-388e-4e0e-adcb-a058a7754935)


**Insert Multiple Documents**

**🖥️ Using Shell**

~~~
db.students.insertMany([{student_id:"2021IT003", name:"Sila", age:39 ,gpa:3.1, degree:"IT", skills:["MongoDB", "JAVA"]},{student_id:"2021SSM002", name:"Nanda", age:38 ,gpa:3.8, degree:"SSM", skills:["MongoDB", "NoSQL", "CSS", "JAVA"]}, {student_id:"2021IT004", name:"Kumari", age:20 ,gpa:3.3, degree:"IT", skills:["MongoDB", "CSS"]}])
~~~

![1 5 insertMany Query](https://github.com/user-attachments/assets/a8cd64eb-435f-41a0-9220-322c8c617f1b)

![1 6 insertMany Output](https://github.com/user-attachments/assets/106a44f6-2945-4517-9ff9-ef75242b52c8)

## 🔄 5. Update Data

**Update One**

**🖥️ Using Shell**

~~~
db.students.updateOne({name:"Nipunika"},{$set:{gpa:3.8}})
~~~

![8 Updated](https://github.com/user-attachments/assets/4a3ccb13-f123-441d-951d-ecd4bbcdd450)

![8 Updated Output](https://github.com/user-attachments/assets/bb4002d6-0c8d-4be8-aada-9b48336041a2)

## 🗑️ 6. Delete Data

**Delete One**

**🖥️ Using Shell**

~~~
db.students.deleteOne({name:"Behan"})
~~~

![10 DeleteOne](https://github.com/user-attachments/assets/776c7e2b-f4da-4e34-87d4-d18e33c65ce3)

![10 DeleteOne output](https://github.com/user-attachments/assets/39ba7915-5210-4091-8bb9-eb36b2e45d64)

**Delete Many**

**🖥️ Using Shell**

~~~
db.students.deleteMany({age:27})
~~~

![10 DeleteMany](https://github.com/user-attachments/assets/77ef703d-20ea-4947-94eb-9299b23dd14e)

![10 DeleteMany Output](https://github.com/user-attachments/assets/8a452160-defa-45f1-854c-5f6aa03c07fb)

## ⚙️ 7. Query Operators

**Operator**

* $gt	Greater than

**🧭 Using Compass**

![14 Greater Than](https://github.com/user-attachments/assets/4b87b6ea-8b52-49c5-a35a-417864de8eca)


**🖥️ Using Shell**

~~~
db.students.find({age:{$gt:29}})
~~~

![15 gt shell](https://github.com/user-attachments/assets/792c5f4d-a3f3-4d93-a2af-5b9cc0643b14)


* $lt	Less than

**🧭 Using Compass**

![14 lt](https://github.com/user-attachments/assets/78ff3c8c-244e-46ba-bf54-f4ada00d09e4)


**🖥️ Using Shell**

~~~
db.students.find({age:{$lt:29}})
~~~

![15 lt shell](https://github.com/user-attachments/assets/2e13e3c8-45f9-46e3-8918-6ba8fcf53cef)


* $gte	Greater than or equal

**🧭 Using Compass**

![14 gte](https://github.com/user-attachments/assets/fd46f89d-e932-4b54-903b-0da022155c88)


**🖥️ Using Shell**

~~~
db.students.find({age:{$gte:29}})
~~~

![15 gte shell](https://github.com/user-attachments/assets/b78f680c-8391-4884-a68a-d5871d97700f)


* $lte	Less than or equal

**🧭 Using Compass**

![14 lte](https://github.com/user-attachments/assets/a3cd146f-fb75-4113-8daf-9115a33f17d2)


**🖥️ Using Shell**

~~~
db.students.find({age:{$lte:29}})
~~~

![15 lte shell](https://github.com/user-attachments/assets/69c56d16-b495-4b7a-b006-37013a188819)


* $eq	Equal to

**🧭 Using Compass**

![14 eq](https://github.com/user-attachments/assets/da1802bd-a331-474e-911f-f4b3b76e6dd9)


**🖥️ Using Shell**

~~~
db.students.find({age:{$eq:29}})
~~~

![15 eq shell](https://github.com/user-attachments/assets/7dabe25d-a3bf-4369-b6ab-40e521b41574)


* $ne	Not equal to

**🧭 Using Compass**

![14 ne](https://github.com/user-attachments/assets/829a9d19-d233-4b57-990d-86d2dc23ddda)


**🖥️ Using Shell**

~~~
db.students.find({age:{$ne:29}})
~~~

![15 ne shell](https://github.com/user-attachments/assets/5e835bbc-c5c9-49fa-898b-bba8fd14a418)


* $in	Value in list

**🧭 Using Compass**

![14 in](https://github.com/user-attachments/assets/11653d3a-09fd-4e9e-9e81-28fea3e599c6)

![14 in OR](https://github.com/user-attachments/assets/5072f685-03cd-41cf-9a16-cd5ec2df3f78)


**🖥️ Using Shell**

~~~
db.students.find({skills:{$in:["JAVA"]}})
~~~

![15 in shell](https://github.com/user-attachments/assets/cdc78fc5-d903-4eb2-9691-3d4170d1a34c)


* $nin	Value not in list

**🧭 Using Compass**

![14 not in](https://github.com/user-attachments/assets/4c2b4070-64f8-46b0-b4fb-dbb3141f4c7c)

![14 not in OR](https://github.com/user-attachments/assets/ab7759ad-90b5-4570-b101-6b16e55a8ed1)


**🖥️ Using Shell**

~~~
db.students.find({skills:{$nin:["JAVA"]}})
~~~

![15 nin shell](https://github.com/user-attachments/assets/a7de8044-ac5f-43c0-ae17-f8e8678e6a3a)


## 🔎 8. Find Data

**Find All Documents**

**🖥️ Using Shell**

~~~
db.students.find()
~~~

![11 Find](https://github.com/user-attachments/assets/3b9712d1-0ce4-4ba6-802e-27eb614b493d)

**Find Specific Documents**

**🧭 Using Compass**

![16 find document compass](https://github.com/user-attachments/assets/1e4be9d4-27e3-440c-9021-26b20b966b8e)


**🖥️ Using Shell**

~~~
db.students.find({degree:"HS"})
~~~

![16 find document](https://github.com/user-attachments/assets/7782f69a-76a5-46df-9fb0-822083b36db6)


**Find Specific Fields Only**

**🖥️ Using Shell**

✅ Shows only the name, hides _id.

![11 FindSpecific](https://github.com/user-attachments/assets/abe16184-e67f-401d-9fdf-7d751250ec1d)

## 🔽 9. Sort Data

**Sort by Ascending Order**

**🧭 Using Compass**

![12 Sort Compass](https://github.com/user-attachments/assets/4a554970-fa29-4445-9d38-e0dc801e8a28)

**🖥️ Using Shell**
~~~
db.students.find().sort({name:1})
~~~

![12 Sort Shell](https://github.com/user-attachments/assets/9f4491d3-354c-4aec-aea5-b6e2b0bec938)

**Sort by Descending Order**

**🧭 Using Compass**

![12 Sort Compass D](https://github.com/user-attachments/assets/0f07718e-813f-4f34-9335-5a268fa6edcc)

**🖥️ Using Shell**
~~~
db.students.find().sort({age:-1})
~~~

![12 Sort Shell D](https://github.com/user-attachments/assets/1a1056b1-ae2a-4fb2-b24b-fdc392eb471a)

## ➡️ 10. Limit and Skip

**Limit the Number of Results**

**🧭 Using Compass**

![13 Limit Compass](https://github.com/user-attachments/assets/6ae16c73-6493-4dbc-9eae-47d17c9161f4)

**🖥️ Using Shell**

~~~
db.students.find().limit(2)
~~~

![13 Limit Shell](https://github.com/user-attachments/assets/3f0c2a8e-0128-49e3-808d-83fcac176d23)

**Skip Some Documents**

**🧭 Using Compass**

![13 1 Skip Compass](https://github.com/user-attachments/assets/1e60471a-e40a-4b5a-9f71-0b4065ae6237)

**🖥️ Using Shell**
~~~
db.students.find().limit(2).skip(1)
~~~

![13 1 Skip Shell](https://github.com/user-attachments/assets/b2e7f8a5-18d0-43f1-ab08-657220828460)






