```javascript
//Incorrect usage of $inc operator
db.collection.updateOne({"_id":1},{$inc:{x:1,y:abc}});
```