import {getConnection, defaultOptions, testConnection, getRepository, closeConnection} from '../../src/db/database'
import { TimetableRepository } from '../../src/db/repositories/timetable-repostiory'
import {testTimetable} from './testEntities'

const testOptions = {
    ...defaultOptions,    
    database: "unittest",
    synchronize: true,  
    dropSchema: true,
}

beforeAll(async ()=>{
    await getConnection(testOptions);
})

afterAll(async ()=>{
    closeConnection();
})

test('test connection', async ()=>{
   return testConnection().then(res=>{
        expect(res.length).toBe(1);
        expect(res[0].sum).toBe(2);
    });    
});

test('insert timetable', async ()=>{
    const timetableRepo: TimetableRepository = getRepository(TimetableRepository);
   return timetableRepo.save(testTimetable).then(res=>{
        expect(res.id).toBe(1);    
        return timetableRepo.findOne(1).then((res)=>{
            if(!res){
                throw 'No entity found';
            }
            expect(res.id).toBe(1);
            expect(res.name).toBe('Test name for time table');
        })   
    })
});
