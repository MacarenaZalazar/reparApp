import React, {useState} from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { socialMedia } from '../../utils/reparAppInfo';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { StyledForm, ContactUsContainer } from './stylesContactUs';
import axios from "axios";
import { CONTACT_URL } from "../../utils/constants";

const ContactUs = () => {
    
    const {instagram, facebook, linkedin, github} =  socialMedia
    const [input, setInput] = useState({mail:'', user:'', description:''})

    function handleChange(e){
        setInput((input) => ({
            ...input, 
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSubmit = async (e) => {
        alert('Su mensaje ha sido enviado')
        e.preventDefault()
        await axios.post(CONTACT_URL, input)
        setInput({mail:'', user:'', description:''})
    }

    return (
        <>
       <ContactUsContainer>
            <h1>Seguinos en nuestras redes sociales!</h1>
            <div className='socialContact'>
                <SocialLinks instagram={instagram} facebook={facebook} linkedin={linkedin} github={github} />
            </div>
            <Form onChange={handleChange} onSubmit={handleSubmit}>
            <StyledForm>
                <h3>Envianos un mensaje</h3>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control name='mail' value={input.mail} type="email" placeholder="Tu email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Control name='user' value={input.user} type="user" placeholder="Tu nombre" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje </Form.Label>
                <Form.Control name='description' value={input.description} as="textarea" rows={3} onChange={handleChange}/>
            </Form.Group>
            <Button type='submit'>Enviar</Button>
            </StyledForm>
            </Form>
        </ContactUsContainer>
    </>
    );
};

export default ContactUs;