## 🗃️ 1. Delete a Database

~~~
db.dropDatabase()
~~~

🧹 Deletes the **entire database**, including all collections and documents.

![1 Delete DB Shell](https://github.com/user-attachments/assets/8af8739c-3095-4fe3-ab39-4546ff36be64)


## 📁 2. Delete a Collection (Table)

~~~
db.sampledata.drop()
~~~

🗑️ Removes a **collection** and all of its contents.

![2 Delete Collection Shell](https://github.com/user-attachments/assets/93e5b677-fc34-441b-93ca-2deb3670dcc1)


## 📁 3. Delete Another Collection Among Two Collections

~~~
db.sample1.drop()
~~~

🗑️ Same operation on a different collection.

![3 Delete Collection Shell](https://github.com/user-attachments/assets/bbf4c334-485a-49cf-8534-261b9e177e9c)


## 🧾 4. Delete a Document

~~~
db.degrees.deleteOne({_id:ObjectId('681857939a9091b61ab1f082')})
~~~

🧽 Deletes **one** specific document matching the condition.

![4 Delete document Shell](https://github.com/user-attachments/assets/b4e99036-2ac2-4fc7-9fdb-e824773acee7)


## 🔍 5. Field Projection

~~~
db.degrees.find({}, {name: 1, _id: 0})
~~~

📋 Shows only the name field from each document.

🚫 Hides the _id field.

🧠 Equivalent to: SELECT name FROM degrees in SQL.

**If you want to show multiple fields, use:**
~~~
db.degrees.find({}, {name: 1, duration: 1, _id: 0})
~~~

![5](https://github.com/user-attachments/assets/a664090e-879b-4fb3-b073-510d2df02a87)


## 🔎 6. Field Projection

~~~
db.degrees.find({}, {name: 1, duration: 1, _id: 0})
~~~

📋 Shows both name and duration fields for each document.

🚫 Hides the _id field.

🧠 Equivalent to: SELECT name, duration FROM degrees in SQL.

![6](https://github.com/user-attachments/assets/13b4e74e-0be6-4884-8a4d-dce935e6c2b6)


## 🎯 7. Select Certain Fields

~~~
db.degrees.find({}, {name: 1, _id:0}).pretty()
~~~

🔍 What it does:

Finds all documents in the degrees collection.

📋 Shows only the **`name`** field — similar to SQL `SELECT name`.

Uses **.pretty()** to make the output easier to read.

![7](https://github.com/user-attachments/assets/3640ffcf-68a0-4e7a-afcd-46343d021c18)


## ❌ 8. Delete Many Documents

~~~
db.degrees.deleteMany({duration: {$lt:4}})
~~~

🧼 Deletes **all** documents where duration is **less than 4**.

![8 Delete all degrees duration 4](https://github.com/user-attachments/assets/5ada4af8-32a0-41d9-9d4a-5eee78a8a220)


## ✏️ 9. Update One Document

~~~
db.degrees.updateOne({_id: ObjectId('68186757f9d8bb57d5f62e44')}, {$set:{name:'BCS', duration: 3}})
~~~

🔧 Updates specific fields of **one** matching document.

![9 Update One](https://github.com/user-attachments/assets/e9615bfb-c3cd-4760-8480-f1c6beb6d3fe)


## 🔼 10. Increase Field Value

~~~
db.degrees.updateMany({duration: {$gte: 4}}, {$inc: {duration: 1}})
~~~

⏫ Increases `duration` by 1 where it's 4 or more.

![10 Increasing duration by 1 of duration 4 or more](https://github.com/user-attachments/assets/ecab972a-7aaa-4ce4-809d-3cbd206d4b40)


## ➕ 11. Add Value to Array Field

~~~
db.students.updateOne({regno:'2021IT005'}, {$push: {skills:'PHP'}})
~~~

📦 Adds `'PHP'` to the **`skills`** array of a specific student.

![11 push details (Update)](https://github.com/user-attachments/assets/783e3128-6af0-4cc6-92a6-b13ec1e2a51a)

