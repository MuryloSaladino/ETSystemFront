import { ButtonContainer, LoginContainer, LoginMain } from "./styled"

import { Title3 } from "../../styles/typography/headers"
import { Paragraph } from "../../styles/typography/text"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

export const Login = () => {

    return (
        <>
            <LoginMain>
                <LoginContainer>
                    <Title3>Iniciar Sessão</Title3>
                    <Paragraph>Use sua conta da ETSystem</Paragraph>

                    <form>
                        <div>
                            <Form.Label htmlFor="inputPassword5">Email</Form.Label>  
                            <Form.Control type="email" id="emailInput"/>
                        </div>
                        <div>
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>  
                            <Form.Control type="password" id="passwordInput"/>
                        </div>
                        <ButtonContainer>
                            <Link to={"/register"}><Button variant="secondary">Cadastro</Button></Link>
                            <Button type="submit" variant="primary">Login</Button>
                        </ButtonContainer>
                    </form>
                </LoginContainer>
            </LoginMain>
        </>
    )
}