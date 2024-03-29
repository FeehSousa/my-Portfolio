import React, {useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { save } from '../services/Sheet'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sucesso, setSucesso] = useState ('');
    const [erro, setErro] = useState ('');

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }
    const contectMeHandler = async (e) => {
        e.preventDefault()
        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format("DD/MM/YYYY")
        }

        const result = await save(data);

        if(result){
            setSucesso(result);
            resetForm();
        }else {
            setErro(!result)
        }
    } 

    return  (
        <Form onSubmit={contectMeHandler}>
            <Input>
                <label>Nome:</label>
                <input 
                    type="text"
                    value= {name}
                    onChange= {(e) => {setName(e.target.value)}}
                />
            </Input>
            <Input>
                <label>Email:</label>
                <input 
                    type="email"
                    value= {email}
                    onChange= {(e) => {setEmail(e.target.value)}}
                />
            </Input>
            
            <Input> 
            <label>Message:</label>
                <textarea 
                    rows="5"
                    value= {message}
                    onChange= {(e) => {setMessage(e.target.value)}}
                />
            </Input>
           
            <button type="submit">Submit</button>
            {sucesso && <h4>Mensagem enviada com sucesso!</h4>}
            {erro && <h4>Ocorreu um erro, Por favor tente novamente!</h4>}
        </Form>
    )
}

const Input = styled.div`
    display:flex;
    flex-direction: column;
    min-width: 90vh;
    label{
        color: white;
        padding-top: 1rem;
    }
    input{
        border: 2px  solid yellow;
        padding: 10px 20px;
        border-radius: 4px;
        width: 100%;
        height: 100%
    }
    input:focus{
        background-color: #416CD5;
        color: yellow;
    }
    textarea{
        width: 100%;
        height: 150%;
        padding: 10px 20px;
        box-align: boirder-box;
        boder: 2px solid #ccc
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
    textarea:focus{
        background-color: #416CD5;
        color: yellow;
    }
`;

const Form = styled.form`
    button{
        margin-top: 1rem;
    }
    h4{
        margin-top: 1rem;
    }
`;

export default ContactForm