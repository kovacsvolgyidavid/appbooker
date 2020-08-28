import { testAppointment } from '../testEntities'
import { getRepository } from "../../../src/db/database";
import { AppointmentRepository } from "../../../src/db/repositories/appointmentRepository";
import { emptyTest } from '../../emptyTestFile';

emptyTest();

export const appointmentRepositoryTestSuite: () => void = () => {

    let appointmentRepo: AppointmentRepository;

    beforeAll(() => {
        appointmentRepo = getRepository(AppointmentRepository);
    });

    test('insert timetable', async () => {
        return appointmentRepo.save(testAppointment).then(res => {
            expect(res.id).toBe(1);
            return appointmentRepo.findOne(1).then((res) => {
                if (!res) {
                    throw 'No entity found';
                }
                expect(res.id).toBe(1);
                expect(res.title).toBe('Going for a bug hunt');
                expect(res.start.getUTCMilliseconds).toBe(new Date('2019-04-05 23:12:00').getUTCMilliseconds);
                expect(res.end.getUTCMilliseconds).toBe(new Date('2019-04-05 23:33:00').getUTCMilliseconds);
                expect(res.timetable.id).toBe(1);
            })
        })
    });
}

