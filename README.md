## 🗃️ 1. Delete a Database

~~~

~~~

🧹 Deletes the **entire database**, including all collections and documents.



## 📁 2. Delete a Collection (Table)

~~~

~~~

🗑️ Removes a **collection** and all of its contents.

---

## 📁 3. Delete Another Collection

~~~

~~~

🗑️ Same operation on a different collection.



## 🧾 4. Delete a Document

~~~

~~~

🧽 Deletes **one** specific document matching the condition.



## 🔍 5. Projection (Incorrect Syntax)

~~~

~~~

⚠️ ❌ Incorrect usage of projection — should be an object, not an array.

---

### 🔎 **6. Projection (Incorrect Again)**

```js
db.degrees.find().projection(['name', 'duration'])
```

⚠️ ❌ Still incorrect — projection must use object format: `{name: 1, duration: 1}`

---

### 🎯 **7. Select Certain Fields**

```js
db.degrees.find({}, {name: 1, _id: 0})
```

📋 Shows only the **`name`** field — similar to SQL `SELECT name`.

---

### ❌ **8. Delete Many Documents**

```js
db.degrees.deleteMany({duration: {$lt: 4}})
```

🧼 Deletes **all** documents where duration is **less than 4**.

---

### ✏️ **9. Update One Document**

```js
db.degrees.updateOne({_id: ObjectId('...')}, {$set: {name: 'BCS', duration: 3}})
```

🔧 Updates specific fields of **one** matching document.

---

### 🔼 **10. Increase Field Value**

```js
db.degrees.updateMany({duration: {$gte: 4}}, {$inc: {duration: 1}})
```

⏫ Increases `duration` by 1 where it's 4 or more.

---

### ➕ **11. Add Value to Array Field**

```js
db.students.updateOne({regno:'2021IT005'}, {$push: {skills:'PHP'}})
```

📦 Adds `'PHP'` to the **`skills`** array of a specific student.

---

Let me know if you'd like this exported to a PDF or Markdown for easy studying!
