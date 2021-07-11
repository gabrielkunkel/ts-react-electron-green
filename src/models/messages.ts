import { IIdentifiable, Metadata } from "./basic";
import { Guid } from "guid-typescript";

export interface IMessage extends IIdentifiable {
    metadata: Metadata
    originUser: Guid
    destinationUser: Guid
    text: string
}

export type MessageState = {
    messages: IMessage[]
}

export type MessageAction = {
    type: string
    message: IMessage
}

export type DispatchType = (args: MessageAction) => MessageAction