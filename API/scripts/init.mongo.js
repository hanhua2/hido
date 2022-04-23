
db.users.remove({});
db.tasks.remove({});

const tasksDB = [{"date": new Date('2022-04-15'),"name":"tutorial5","color":"#2196f3",
"status":"To do","priority":"Normal","comment":"IT5007","id":"b2b9c260-17b3-462b-99e7-bb1bd933a172"}];

const userDB = {"id":"b2b9c260-17b3-462b-99e7-bb1bd933a172", "lastname":"xinran", "firstname":"ren", "email": "renxrchn@163com", "password": "19981209", "created": new Date('2022-04-15')};

db.tasks.insertMany(tasksDB);
db.users.insertOne(userDB);
/*
const count = db.issues.count();
print('Inserted', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

const initialBlacklist = [{name: 'Darth Vader'}, {name: 'Hannibal Lecter'}, {name: 'The Joker'}];
db.blacklist.remove({});
db.blacklist.insertMany(initialBlacklist);
*/

db.users.createIndex({ id: 1 }, { unique: true });

db.tasks.createIndex({ id: 1 }, { unique: true });
db.tasks.createIndex({ name: 1 });
db.tasks.createIndex({ priority: 1 });
db.tasks.createIndex({ status: 1 });