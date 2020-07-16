import { getConnection, defaultOptions, testConnection, closeConnection } from '../../src/db/database'
import { timetableRepositoryTestSuite } from './repositories/timetableRepositoryTest'
import { appointmentRepositoryTestSuite } from './repositories/appointmentRepositoryTest';

const testOptions = {
    ...defaultOptions,
    database: "unittest",
    synchronize: true,
    dropSchema: true,
}

beforeAll(async () => {
    await getConnection(testOptions);
})

afterAll(async () => {
    closeConnection();
})

test('test connection', async () => {
    return testConnection().then(res => {
        expect(res.length).toBe(1);
        expect(res[0].sum).toBe(2);
    });
});

describe('timetable repo test', timetableRepositoryTestSuite);
describe('appointment repo test', appointmentRepositoryTestSuite);
