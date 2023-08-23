import con from "../middlewares/connectDB";

export function buscaUsuarios(login: string, senha: string): Promise<number> {
    const promessa = new Promise<number>((resolve, reject) => {
        con.query(
            "SELECT ID FROM `FUNCIONARIOS` WHERE EMAIL = ? AND SENHA = ?",
            [login, senha],
            (err, results: any[]) => {
                if(err) {
                    reject("Não foi possível buscar o usuário no momento");
                } else {
                    if (results.length > 0) {
                        resolve(results[0].ID);
                    } else {
                        reject("Usuário ou senha inválida");
                    }
                }
            }
        );
    });

    return promessa;
}