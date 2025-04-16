/**
 * Componente whyChooseUs
 * Seccion que muestra y simula los beneficios en la landing page
 */
import React from "react";
import {
  FeatureCard,
  FeatureDescription,
  FeaturesGrid,
  FeatureTitle,
  IconContainer,
  SectionDescription,
  SectionTitle,
  TrusSection,
} from "../styled";
import { Clock, ShieldCheck, Users, Zap } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  return (
    <TrusSection>
      <div className="container mx-auto">
        <SectionTitle>¿Por qué elegirnos?</SectionTitle>
        <SectionDescription>
          Nos esforzamos por ofrecer la mejor experiencia financiera con
          soluciones diseñadas para el mundo digital actual.
        </SectionDescription>

        <FeaturesGrid>
          <FeatureCard>
            <IconContainer>
              <ShieldCheck size={30} />
            </IconContainer>
            <FeatureTitle>Seguridad Garantizada</FeatureTitle>
            <FeatureDescription>
              Tu dinero y datos siempre protegidos con los más altos estándares
              de seguridad y encriptación.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>
              <Clock size={30} />
            </IconContainer>
            <FeatureTitle>Disponibilidad 24/7</FeatureTitle>
            <FeatureDescription>
              Acceso a tus cuentas y servicio al cliente en cualquier momento,
              desde cualquier lugar.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>
              <Zap size={30} />
            </IconContainer>
            <FeatureTitle>Decisiones Rápidas</FeatureTitle>
            <FeatureDescription>
              Aprobaciones y procesos ágiles que te permiten obtener respuestas
              cuando las necesitas.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>
              <Users size={30} />
            </IconContainer>
            <FeatureTitle>Experiencia Personalizada</FeatureTitle>
            <FeatureDescription>
              Productos adaptados a tus necesidades reales y asesoría financiera
              personalizada.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </div>
    </TrusSection>
  );
};

export default WhyChooseUs;
