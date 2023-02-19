import { db } from './firebase.js';
import { faker } from '@faker-js/faker';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { Random } from "random-js";

const random = new Random();

const reportRef = collection(db, "Report");

// auto generate 10 reports
for (let i = 0; i < 10; i++) {
    const reportRef = collection(db, "Report");
    await setDoc(doc(reportRef, i.toString()), {
    name: faker.name.firstName(),
    floor: faker.random.numeric({ min: 1, max: 5 }),
    isBarricaded: random.pick([true, false]),
    location: random.pick(['STEM', 'Business', 'Art']),
    numberOfPeople: faker.random.numeric({ min: 1, max: 10 }),
    phoneNum: faker.phone.number('##########'),
    room: faker.random.numeric({ min: 1000, max: 9999 }),
    safe: false,
    time: new Date(faker.date.past(1)),
    });
}

// // Define a function to generate a single record
// function generateRecord() {
//   return {
//     name: faker.name.firstName(),
//     floor: faker.random.number({ min: 1, max: 5 }),
//     isBarricaded: faker.random.boolean(),
//     location: faker.random.arrayElement(['STEM', 'Business', 'Art']),
//     numberOfPeople: faker.random.number({ min: 1, max: 10 }),
//     phoneNum: faker.phone.phoneNumber('##########'),
//     room: faker.random.number({ min: 1000, max: 9999 }),
//     safe: faker.random.boolean(),
//     time: new Date(faker.date.past(1)),
//   };
// }

// // Define a function to add the generated records to Firestore
// async function addRecords() {
//   const recordsCollection = db.collection('Records');
//   const batch = db.batch();

//   // Generate 10 records and add them to a batch write
//   for (let i = 0; i < 10; i++) {
//     const record = generateRecord();
//     const newRecordRef = recordsCollection.doc();
//     batch.set(newRecordRef, record);
//   }

//   // Commit the batch write
//   await batch.commit();
// }

// // Call the addRecords function to add the fake data to Firestore
// addRecords()
//   .then(() => console.log('Fake data added to Firestore'))
//   .catch(error => console.error('Error adding fake data to Firestore:', error));
