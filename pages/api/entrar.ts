// import { buscaUsuarios } from '@/db/login';
import { buscaUsuarios } from '@/db/login';
import type {NextApiRequest, NextApiResponse} from 'next';
import { gerarJwt } from './helpers/jwtUtils';


export default async function login(
    req : NextApiRequest,
    res : NextApiResponse<any>
) {
    const dadosLogin: any = req.body;

    try {
        let idUser: number = await buscaUsuarios(dadosLogin.login, dadosLogin.senha)
        resposta(res, 200, gerarJwt({idUser}))
    } catch(error){
        resposta(res, 500, "Erro ao autenticar o usuário")
        console.log(JSON.stringify(error))
    }
};

function resposta(res: NextApiResponse, status: number, json: any){
    res.status(status).json(json)
}