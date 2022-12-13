import { Key } from "react"

interface TodoType {
    createdAt: Date,
    createdBy: String,
    description: String,
    needsReminder: boolean,
    title: String,
    id: Key
}

export type {TodoType}