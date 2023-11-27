import PocketBase from 'pocketbase';


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
    delete: async({request})=>{
        const pb = new PocketBase('https://task.pockethost.io');

        const form = await request.formData();
        const id = form.get('id')??'';

        await pb.collection('tasklist').delete(id);

    }
}