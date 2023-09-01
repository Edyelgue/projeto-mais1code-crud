import { NextApiResponse } from "next";
import { Error } from '../types/Response'

export function montarResposta<T>(
    res: NextApiResponse,
    status: number,
    body?: T,
    error?: Error
) {
	return res.status(status).json({
        body,
        error
    });
}