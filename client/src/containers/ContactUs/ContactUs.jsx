import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { socialMedia } from '../../utils/reparAppInfo';
import Form from 'react-bootstrap/Form'
import { StyledForm, ContactUsContainer } from './stylesContactUs';

const ContactUs = () => {
    const {instagram, facebook, linkedin, github} =  socialMedia

    return (
        <>
       <ContactUsContainer>
            <h1>Seguinos en nuestras redes sociales!</h1>
            <div className='socialContact'>
                <SocialLinks instagram={instagram} facebook={facebook} linkedin={linkedin} github={github} />
            </div>
            <Form>
            <StyledForm>
                <h3>Envianos un mensaje</h3>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="tu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje </Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </StyledForm>
            </Form>
            </ContactUsContainer>
    </>
    );
};

export default ContactUs;