import type { NextApiRequest } from 'next'
import jwt from 'jsonwebtoken'
import moment from 'moment';
const CHAVE_ASSINATURA = "123456";
const ISSUER = "Aula Nicholas"
const VALIDADE_TOKEN_MINUTOS = 5;

function validarJwt(req: NextApiRequest): void {
    const jwtToken = req.headers['authorization'] as string

    //Se não tiver passado o token JWT, não deixa continuar a validação
    if(!jwtToken) {
        //Throw = Lançamento de exceção
        //new = Instanciação (Criação) de um objeto baseado na classe HttpError
        throw new HttpError(401, ErrorCode.ACCESS_TOKEN_NAO_INFORMADO, 'Access token não informado');
    }

    try {
        jwt.verify(jwtToken.replace("Bearer ", ""), CHAVE_ASSINATURA);
    } catch(exception) {
        throw new HttpError(401, ErrorCode.JWT_INVALIDO, 'JWT Inválido')
    }
}

function gerarJwt(payload: any): JwtResponse {
    const dataExpiracao = moment().add(VALIDADE_TOKEN_MINUTOS, 'minutes')

    const p = {
        iss: ISSUER,
        exp: Math.round(dataExpiracao.valueOf() / 1000),
        ...payload
    };

    const tokenAssinado = jwt.sign(
        p,
        CHAVE_ASSINATURA
    );

    return {
        access_token: tokenAssinado,
        expiresAt: dataExpiracao.toISOString()
    };
}

export { validarJwt, gerarJwt };