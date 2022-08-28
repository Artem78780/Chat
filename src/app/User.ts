export interface User {
    avatar: string;
    name: string;
    latestMessage: string;
    time: any;
    message: message[]
}

interface message {
        id: number,
        body: string,
        time: any,
        me: boolean
    }
