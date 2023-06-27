import type {NextApiRequest, NextApiResponse} from 'next';

export default (
    req : NextApiRequest,
    res : NextApiResponse
) => {
    if (req.method === 'POST'){
        const {login, senha} = req.body;

        if(login === 'edym@edym.com' && 
            senha === 'edym@123'){
                return res.status(200).json({msg : 'Usuário autenticado com sucesso!'})
            }
        return res.status(405).json({error : 'Método inválido!'})    
    }
    return res.status(405).json({error : 'Método inválido!'})
}