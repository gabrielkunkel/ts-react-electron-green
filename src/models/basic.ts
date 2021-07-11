import { Guid } from "guid-typescript";

export interface ITrackable {
    CreationDate: Date
    LastModifiedDate: Date
    FromMachine?: string
}

export interface IIdentifiable {
    id: Guid
    Type?: string
    Name?: string
}

export type Metadata = ITrackable;