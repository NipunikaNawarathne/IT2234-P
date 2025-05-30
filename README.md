## Get All Students with Courses and Degree Info


🔍 What It Does: 🧪 Logs "check" to the console when the route is accessed.

 Uses student.find() to get all student documents.

🔗 Uses .populate() to include associated degreeId and enroled_courses details.

📤 Responds with student data if found, otherwise sends a 404.

🛑 Handles any unexpected errors with a 500 response.

![1](https://github.com/user-attachments/assets/e9cb1e37-a032-4250-a618-19bd75b092c7)
