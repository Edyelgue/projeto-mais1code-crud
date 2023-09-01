import { ErrorCode } from "./enums/errorcode"

export type Error = {
	code: ErrorCode,
	message: string
}

export type Response<T> = {
	error?: Error,
	body?: T
}