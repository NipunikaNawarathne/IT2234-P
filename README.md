## 🗃️ 1. Delete a Database

~~~
db.dropDatabase()
~~~

🧹 Deletes the **entire database**, including all collections and documents.



## 📁 2. Delete a Collection (Table)

~~~
db.sampledata.drop()
~~~

🗑️ Removes a **collection** and all of its contents.



## 📁 3. Delete Another Collection Among Two Collections

~~~
db.sample1.drop()
~~~

🗑️ Same operation on a different collection.



## 🧾 4. Delete a Document

~~~
db.degrees.deleteOne({_id:ObjectId('681857939a9091b61ab1f082')})
~~~

🧽 Deletes **one** specific document matching the condition.



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



## 🔎 6. Field Projection

~~~
db.degrees.find({}, {name: 1, duration: 1, _id: 0})
~~~

📋 Shows both name and duration fields for each document.

🚫 Hides the _id field.

🧠 Equivalent to: SELECT name, duration FROM degrees in SQL.




## 🎯 7. Select Certain Fields

~~~
db.degrees.find({}, {name: 1, _id:0}).pretty()
~~~

🔍 What it does:

Finds all documents in the degrees collection.

📋 Shows only the **`name`** field — similar to SQL `SELECT name`.

Uses **.pretty()** to make the output easier to read.





## ❌ 8. Delete Many Documents

~~~

~~~

🧼 Deletes **all** documents where duration is **less than 4**.


## ✏️ 9. Update One Document

~~~

~~~

🔧 Updates specific fields of **one** matching document.



## 🔼 10. Increase Field Value

~~~

~~~

⏫ Increases `duration` by 1 where it's 4 or more.



## ➕ 11. Add Value to Array Field

~~~

~~~

📦 Adds `'PHP'` to the **`skills`** array of a specific student.



Let me know if you'd like this exported to a PDF or Markdown for easy studying!
