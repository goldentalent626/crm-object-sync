import {faker} from '@faker-js/faker';
import { PrismaClient } from "@prisma/client";
import{ contacts } from './contacts';

const prisma = new PrismaClient();

async function main() {
    for(let contact of contacts) {
        await prisma.contacts.create({
            data: contact
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
    }).finally(() => {
        prisma.$disconnect();
    }) 




/*Create dataset, mapping over an array*/
// const data = Array.from({ length:100 }).map(() => ({
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     email: faker.internet.email()
// }));


/*Run seed command and the function below inserts data in the database*/
// async function main(){
//     await prisma.contacts.createMany({
//         data
//     });
// }

// main()
// .catch((e) => {
//     console.log(e);
//     process.exit(1)
// })
// .finally(() => {
//     prisma.$disconnect();
// })
 



