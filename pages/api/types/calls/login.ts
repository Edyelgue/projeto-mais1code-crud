export type Login = {
	username: string,
	password: string
}

export type JwtResponse = {
    access_token: string,
    expiresAt: string
}