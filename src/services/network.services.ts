export default async function Config(method: string, url: string, body = {}) {
    const app_url = import.meta.env.VITE_APP_URL;
    const api_key = import.meta.env.VITE_API_KEY;

    const config = () => {
        if (method === 'GET') {
            return {
                method: method
            }
        }
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }

    try{

        const api = await fetch(`${app_url}${url}?api_key=${api_key}`, config())
        
        if (!api.ok) { 
            throw new Error(`HTTP error! Status: ${api.status}`);
        }
        const res = await api.json();
        return res;

    }catch(error){

        console.log(error);
        return {}

    }
   
}