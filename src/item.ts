import { IPCMessage } from "./entity";

export const saveItem = (...items: Record<string, any>[]) => {
    const msg = new IPCMessage('data', items);
    console.log(msg.toJSON());
};