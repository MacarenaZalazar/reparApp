import React, {useState} from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { socialMedia } from '../../utils/reparAppInfo';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { StyledForm, ContactUsContainer } from './stylesContactUs';
import { useDispatch } from 'react-redux';

const ContactUs = () => {
    const dispatch = useDispatch()
    const {instagram, facebook, linkedin, github} =  socialMedia
    const [input, setInput] = useState({email:'', name:'', descripcion:''})

    function handleChange(e){
        setInput((input) => ({
            ...input, 
            [e.target.name]: e.target.value
        }))
    }
    
    function handleSubmit(e){
        alert('Su mensaje ha sido enviado')
        e.preventDefault()
        //dispatch(input)
        setInput({email:'', name:'', descripcion:''})
    }
    console.log(input)

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
                <Form.Control name='email' value={input.email} type="email" placeholder="tu email" />
            </Form.Group>
            <Form.Group>
                <Form.Control name='name' value={input.name} type="name" placeholder="Tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje </Form.Label>
                <Form.Control name='descripcion' value={input.descripcion} as="textarea" rows={3} />
            </Form.Group>
            <Button type='submit'>Enviar</Button>
            </StyledForm>
            </Form>
        </ContactUsContainer>
    </>
    );
};

export default ContactUs;