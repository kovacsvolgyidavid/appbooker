import { TimetableRepository } from "../../../src/db/repositories/timetableRepository";
import { testTimetable } from '../testEntities'
import { getRepository } from "../../../src/db/database";

test.skip('Util class skips', () => {
    expect(1).toBe(1);
});

export const timetableRepositoryTestSuite: () => void = () => {

    let timetableRepo: TimetableRepository;

    beforeAll(() => {
        timetableRepo = getRepository(TimetableRepository);
    });

    test('insert timetable', async () => {
        return timetableRepo.save(testTimetable).then(res => {
            expect(res.id).toBe(1);
            return timetableRepo.findOne(1).then((res) => {
                if (!res) {
                    throw 'No entity found';
                }
                expect(res.id).toBe(1);
                expect(res.name).toBe('Test name for time table');
            })
        })
    });
}

