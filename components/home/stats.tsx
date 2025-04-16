/**
 * Componente Stats
 * Muestra información simulando numero de clientes activos, años de experiencia
 * Disponibilidad y valoracion de la app
 */

import React from "react";
import {
  StatItem,
  StatLabel,
  StatNumber,
  StatsContainer,
  StatsSection,
} from "../styled";

const Stats: React.FC = () => {
  return (
    <StatsSection>
      <div className="container mx-auto">
        <StatsContainer>
          <StatItem>
            <StatNumber>250k+</StatNumber>
            <StatLabel>Clientes activos</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>15+</StatNumber>
            <StatLabel>Años de experiencia</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>Disponibilidad</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>4.8/5</StatNumber>
            <StatLabel>Valoración de app</StatLabel>
          </StatItem>
        </StatsContainer>
      </div>
    </StatsSection>
  );
};

export default Stats;
