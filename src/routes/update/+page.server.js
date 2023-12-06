import PocketBase from 'pocketbase';


export async function load({ }) {
    const pb = new PocketBase('https://task.pockethost.io');
    const records = await pb.collection('tasklist').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record) => { return { task: record.task, date: record.date, id: record.id } })

    return {
        records: results
    }
}


export const actions = {
    update: async ({ request }) => {
        const pb = new PocketBase('https://task.pockethost.io');

        const form = await request.formData();

        const task = form.get('task') ?? '';
        const date = form.get('date') ?? ''; 
        const id = form.get('id') ?? '';

        const data = {
            task,
            date, 
        }
        await pb.collection('tasklist').update(id, data);

    }
}