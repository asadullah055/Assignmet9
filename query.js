// Create a new collection.
db.createCollection("admin")

// Removes a collection from the database.
db.admin.drop()
// Inserts a single document into a collection.
db.users.insertOne({
    name: "Asadullah Ahmed",
    email: "abc@gmail.com"
  })
//   Delete/remove a single document from the collection.
db.user.deleteOne({
    "name": "Asadullah Ahmed"
})
