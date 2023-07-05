//const conn = new Mongo();
//const db = conn.getDB("fruits");

db = db.getSiblingDB('fruits');
db.fruits.drop()

db.fruits.insertMany([
    { "_id": 1, "name": "apples", "qty": 8, "rating": 3 },
    { "_id": 2, "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 },
    { "_id": 3, "name": "oranges", "qty": 6, "rating": 2 },
    { "_id": 4, "name": "avocados", "qty": 3, "rating": 5 }
]);
