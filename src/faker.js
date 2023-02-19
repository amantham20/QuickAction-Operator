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
    uid: i.toString(),
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