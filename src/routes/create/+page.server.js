import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export const actions={
    create: async ({request})=>{
        const pb = new PocketBase('https://task.pockethost.io');
        const form = await request.formData();

        const task = form.get('task')?? '';

        const data = {
            task,
            
        };
        
        await pb.collection('tasklist').create(data);


    }
}