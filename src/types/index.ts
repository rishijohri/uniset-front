import { Key } from "react"

interface TodoState {
    createdAt: Date,
    createdBy: String,
    description: String,
    needsReminder: boolean,
    title: String,
    id: Key
}

export type {TodoState}