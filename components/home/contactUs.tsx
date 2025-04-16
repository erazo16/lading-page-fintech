/**
 * Componente para la seccion de Contacto
 */

import React from "react";
import {
  ContactContainer,
  ContactForm,
  ContactInfo,
  ContactInfoText,
  ContactInfoTitle,
  ContactMethod,
  ContactSection,
  FormGroup,
  FormInputContact,
  FormLabel,
  FormTextarea,
  SectionDescription,
  SectionTitleContacUs,
} from "../styled";
import { FormInput } from "lucide-react";
import Button from "../common/button";

const ContactUs: React.FC = () => {
  return (
    <ContactSection id="contact">
      <div className="container mx-auto">
        <SectionTitleContacUs>Contáctanos</SectionTitleContacUs>
        <SectionDescription>
          ¿Tienes preguntas sobre nuestros productos? Estamos aquí para ayudarte
        </SectionDescription>

        <ContactContainer>
          <ContactInfo>
            <ContactInfoTitle>Estamos para ayudarte</ContactInfoTitle>
            <ContactInfoText>
              Nuestro equipo de atención al cliente está disponible para
              resolver tus dudas y brindarte la información que necesitas sobre
              nuestros productos y servicios.
            </ContactInfoText>

            <ContactMethod>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+34 900 123 456</span>
            </ContactMethod>

            <ContactMethod>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@fintechbank.com</span>
            </ContactMethod>

            <ContactMethod>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Calle Financiera 123, Madrid</span>
            </ContactMethod>
          </ContactInfo>

          <ContactForm>
            <FormGroup>
              <FormLabel htmlFor="name">Nombre completo</FormLabel>
              <FormInputContact type="text" id="name" />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Correo electrónico</FormLabel>
              <FormInputContact type="email" id="email" />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="product">Producto de interés</FormLabel>
              <FormInputContact as="select" id="product">
                <option value="">Selecciona un producto</option>
                <option value="accounts">Cuentas</option>
                <option value="cards">Tarjetas</option>
              </FormInputContact>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Mensaje</FormLabel>
              <FormTextarea
                id="message"
                placeholder="¿En qué podemos ayudarte?"
              />
            </FormGroup>

            <Button size="large" fullWidth>
              Enviar mensaje
            </Button>
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default ContactUs;
