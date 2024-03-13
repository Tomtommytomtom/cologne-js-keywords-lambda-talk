import { faker } from '@faker-js/faker';

faker.seed(123);

const createPerson = () => Object.keys(faker.person).reduce((acc, cur) => {
    if(cur === 'faker') return acc;
    acc[cur] = faker.person[cur]();
    return acc;
},{});

const people = Array.from({ length: 100 }, createPerson);

const callPerson = (person) => {
    console.log(`Promoting ${person.firstName}...`);
    return person;
}

const negotiateSalary = (person) => {
    return person.jobTitle.length * 1000;
}

const firePerson = (person) => {
    console.log(`Firing ${person.firstName}...`);
}

const shouldFirePerson = (person) => {
    return person.sex === "male" || person.zodiacSign == "Taurus"
}

const newSalaries = []

for(const person of people){
    const zodiacSign = person.zodiacSign;

    if(person.sex === "male" || zodiacSign == "Taurus"){
        callPerson(person)
        negotiateSalary(person)
        newSalaries.push({
            ...person,
            salary: negotiateSalary(person)
        })
    } else {
        firePerson(person)
        newSalaries.push({
            ...person,
            salary: 0
        })
    }
}

const fired = people.filter(shouldFirePerson)
const kept = people.filter(p => !shouldFirePerson(p))

fired.forEach(firePerson)

const firedPeopleSalary = fired.map(callPerson).map(p => ({...p, salary: 0}))
const keptPeopleSalary = kept.map(callPerson).map(p => ({...p, salary: negotiateSalary(p)}))

const newSalariesFunctional = [...firedPeopleSalary, ...keptPeopleSalary]





