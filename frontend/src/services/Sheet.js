import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/fcf4a154-dc08-4ce7-9e71-e6a641f407e7',
        headers: {
            "Content-Type": "application/json"
        },
        data
    };

    return axios(config)
        .then(res => {
            console.log("Dados da planilha", res)
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })

}