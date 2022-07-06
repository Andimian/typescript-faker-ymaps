import { faker } from '@faker-js/faker';

export class User {
    name: string;
    location: {
        // lat: number;
        // lng: number;
        lat: any;
        lng: any;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
        }
    }
}
