const baseUrl = process.env.ticketApiUrl || "http://localhost:3000/dev";
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

class HttpCommon {
    get = <T>(path: string): Promise<T> => fetch(`${baseUrl}/${path}`, {
        method: 'GET',
        headers
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })

    post = <T>(path: string, data: T): Promise<T> => fetch(`${baseUrl}/${path}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })

    put = <T>(path: string, data: T): Promise<T> => fetch(`${baseUrl}/${path}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })

    delete = <T>(path: string): Promise<T> => fetch(`${baseUrl}/${path}`, {
        method: 'DELETE',
        headers
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
}

export default new HttpCommon()
