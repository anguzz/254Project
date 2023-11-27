import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export async function load({}){
    const pb = new PocketBase('https://task.pockethost.io');
    const records = await pb.collection('tasklist').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record)=> {return {task:record.task,id: record.id}})

    return{
        records: results
    }
}


export const actions={
    update: async({request})=>{
        const pb = new PocketBase('https://task.pockethost.io');

        const form = await request.formData();

        const task = form.get('task')?? '';
        const id = form.get('id')??'';

        const data={
            task,
        }
        await pb.collection('tasklist').update(id, data);

    }
}