
const baseUrl = "https://9kz55vsud1.execute-api.us-east-1.amazonaws.com/dev";

class HttpCommon {
    get = <T>(path: string): Promise<T> => fetch(`${baseUrl}/${path}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    post = <T>(path: string, data: T) => {

    }
    put = <T>(path: string, data: T) => {

    }
    delete = <T>(path: string) => {

    }
}

export default new HttpCommon()
