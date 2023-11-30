import PocketBase from 'pocketbase';


export async function load({}){
    const pb = new PocketBase('https://task.pockethost.io');
    const records = await pb.collection('tasklist').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record)=> {return {task:record.task}})

    return{
        records: results
    }
}