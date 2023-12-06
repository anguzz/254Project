import PocketBase from 'pocketbase';

export async function load({ }) {
    const pb = new PocketBase('https://task.pockethost.io');
    const records = await pb.collection('tasklist').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record) => {
        // Format the date to 'MM-DD-YY'
        const formattedDate = record.date.slice(5, 10) + '-' + record.date.slice(2, 4);
        return { task: record.task, date: formattedDate, id: record.id };
    });

    return {
        records: results
    };
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
        };
        await pb.collection('tasklist').update(id, data);
    }
};
