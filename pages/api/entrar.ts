// import { buscaUsuarios } from '@/db/login';
import { buscaUsuarios } from '@/db/login';
import type {NextApiRequest, NextApiResponse} from 'next';


export default async function login(
    req : NextApiRequest,
    res : NextApiResponse<any>
) {
    const dadosLogin: any = req.body;

    try {
        let idUser: number = await buscaUsuarios(dadosLogin.login, dadosLogin.senha)
        resposta(res, 200, idUser)
    } catch(error){
        resposta(res, 500, "Error")
    }
};

function resposta(res: NextApiResponse, status: number, json: any){
    res.status(status).json(json)
}



/*
    if (req.method === 'POST'){
        const {login, senha} = req.body;

        if(login === 'edym@edym.com' && 
            senha === 'edym@123'){
                return res.status(200).json({msg : 'Usuário autenticado com sucesso!'})
            }
        return res.status(405).json({error : 'Método inválido!'})    
    }
    return res.status(405).json({error : 'Método inválido!'})
*/