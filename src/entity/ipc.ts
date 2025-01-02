export class IPCMessage {
    public type: 'data' | 'log';
    public payload: any;
    public ipc: boolean = true;

    constructor(type: 'data' | 'log', payload: Record<string, any> | Record<string, any>[]) {
        this.type = type;
        this.payload = payload;
    }

    public toJSON() {
        return JSON.stringify({
            type: this.type,
            payload: this.payload,
            ipc: this.ipc,
        });
    }
}
