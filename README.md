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


