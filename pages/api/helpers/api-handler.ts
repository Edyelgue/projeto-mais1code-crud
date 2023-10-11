import type { NextApiRequest, NextApiResponse } from 'next'
import { validarJwt } from './jwtUtils'
import { HttpError } from '../errors/HttpError';
import NextCors from 'nextjs-cors';
import { Response } from '../types/Response';

export default apiHandler;

function apiHandler(handler: (req: NextApiRequest, res: NextApiResponse<Response<any>>) => void) {
    return async (req: NextApiRequest, res: NextApiResponse<Response<any>>) => {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: 'http://localhost:3005',
            optionsSuccessStatus: 200,
        });
        
        try {
            validarJwt(req);

            handler(req, res);
        } catch (exception) {
            //Verifica se exception é uma instância de HttpError
            if(exception instanceof HttpError) {
                const excecaoTipada = (exception as HttpError);
                const {code, message} = excecaoTipada
                res.status(excecaoTipada.httpStatus).json({error: {code, message}})
            } else {
                res.status(500).json({})
            }            
        }
    }
}