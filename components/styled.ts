import { ButtonProps, ButtonSize, ButtonVariant } from "@/types";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary.main};
`;

export const NavLinks = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }

  &.mobile-menu-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 20;
  }
`;

export const NavLink = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive',
  })<{ isActive: boolean }>`
  font-weight: ${props => (props.isActive ? '600' : '400')};

  a {
    color: ${props => (props.isActive ? props.theme.colors.primary.main : props.theme.colors.neutral[700])};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.primary.main};
    }
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.neutral[700]};

  @media (min-width: 768px) {
    display: none;
  }
`;

/* footer*/
export const Container = styled.footer`
 background-color: #f8fafc;
 border-top: 1px solid #e2e8f0;
 padding: 2rem 2.5rem;
 margin-top: 3rem;
`
export const FooterContent = styled.div`
 display: flex;
 flex-direction: column;
 @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
 }
`

export const FooterSection = styled.div`
    margin-bottom: 1.5rem;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`

export const FooterLink = styled(Link)`
    display: block;
    margin-bottom: 0.5rem;
    color: #64748b;
    text-decoration: none;
    transition: color 0.2s;

    &:hover{
        color: #0056b3;
    }
`

export const Copyright = styled.div`
    text-align: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
    color: #64748b;
    font-size: 0.875rem;
`

export const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0f172a;
`;

export const LinkStyle = styled(Link)<{ $variant?: ButtonVariant; $size?: ButtonSize; $fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;

  /* Tamaños */
  ${props => {
    switch (props.$size) {
      case 'small':
        return `
          padding: 0.25rem 0.75rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
        `;
      default: // medium
        return `
          padding: 0.5rem 1rem;
          font-size: 1rem;
        `;
    }
  }}

  /* Variantes */
  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: #00aa55;
          color: white;
          &:hover {
            background-color: #008c46;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border: 1px solid white;
          color: white;
          &:hover {
            background-color: rgba(0, 86, 179, 0.05);
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: #0056b3;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          &:hover {
            text-decoration: underline;
          }
        `;
      default: // primary
        return `
          background-color: #0056b3;
          color: white;
          &:hover {
            background-color: #004494;
          }
        `;
    }
  }}

  /* Width */
  ${props => props.$fullWidth && `
    width: 100%;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonStyled = styled.button<{ $variant?: ButtonVariant; $size?: ButtonSize; $fullWidth?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: all 0.2s;
    border-radius: 0.375rem;
    cursor: pointer;

    ${props => {
        switch (props.$size) {
            case 'small':
                return `
                    padding: 0.25rem 0.75rem;
                    font-size: 0.875rem;
                `;
                case 'large':
                    return `
                    padding: 0.75rem 1.5rem;
                    font-size: 1.125rem;
                    `;
            default:
                return `
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `;
        }
    }}

${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: #00aa55;
          color: white;
          &:hover {
            background-color: #008c46;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border: 1px solid #00aa55;
          color: #00aa55;
          &:hover {
            background-color: rgba(0, 86, 179, 0.05);
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: #0056b3;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          &:hover {
            text-decoration: underline;
          }
        `;
      default:
        return `
          background-color: #0056b3;
          color: white;
          &:hover {
            background-color: #004494;
          }
        `;
    }
  }}

${props => props.$fullWidth && `
    width: 100%;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

/* PRODUCT GRID STYLES */

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

/* PRODUCT CARD STYLE */

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.div`
  height: 160px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardContent = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
`;

export const CategoryBadge = styled.span`
  padding: 0.25rem 0.5rem;
  //background-color: #f1f5f9;
  color: #64748b;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const ProductFeature = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #475569;
`;

export const BadgeContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Badge = styled.span<{ variant?: 'new' | 'popular' }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  
  ${props => {
    switch (props.variant) {
      case 'new':
        return `
          background-color: #ecfdf5;
          color: #10b981;
        `;
      case 'popular':
        return `
          background-color: #eff6ff;
          color: #3b82f6;
        `;
      default:
        return `
          background-color: #f1f5f9;
          color: #64748b;
        `;
    }
  }}
`;

export const CardFooter = styled.div`
  padding: 1.25rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: center;
`;

/* PRODUCT DETAILS STYLES */

export const DetailContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProductHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #f1f5f9;
`;

export const ProductCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #f1f5f9;
  color: #64748b;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
`;

export const ProductDescription = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
`;

export const ProductImage = styled.div`
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
`;

export const ProductBody = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoCard = styled.div`
  background-color: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const InfoLabel = styled.h3`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const InfoValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: flex-start;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: "✓";
    color: #10b981;
    margin-right: 0.75rem;
    font-weight: bold;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #f1f5f9;
  color: #64748b;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const BadgeContainerDetail = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const BadgeDetail = styled.span<{ variant?: 'new' | 'popular' }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.variant) {
      case 'new':
        return `
          background-color: #ecfdf5;
          color: #10b981;
        `;
      case 'popular':
        return `
          background-color: #eff6ff;
          color: #3b82f6;
        `;
      default:
        return `
          background-color: #f1f5f9;
          color: #64748b;
        `;
    }
  }}
`;

/*CHART STYLE */

export const ChartContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

export const ChartTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1e293b;
`;

/* CATEGORY FILTER STYLES */

export const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;

    @media (min-width: 640px) {
        gap: 1rem;
    }
`


export const FilterButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive',
  })<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props =>
    props.isActive
      ? `
        background-color: #0056b3;
        color: white;
      `
      : `
        background-color: #f1f5f9;
        color: #64748b;
        
        &:hover {
          background-color: #e2e8f0;
        }
      `}
`;

/* WHYECHOOSEUS STYLE*/

export const TrusSection = styled.div`
  padding: 4rem 3rem;
  background-color: #f8fafc;
  text-align: center;
`

export const SectionTitleWhyChooseUs = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
`

export const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #64748b;
  font-size: 1.125rem;
`

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #eff6ff;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
  color: #0056b3;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #0f172a;
`;

export const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

/* STATS SECTION STYLE */

export const StatsSection = styled.section`
  padding: 3rem 1.5rem;
  background-color: #0056b3;
  color: white;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;


/* TESTIMONIALS SECTION STYLES */

export const TestimonialsSection = styled.section`
  padding: 4rem 3.5rem;
`;

export const SectionTitleTestimonials = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
`;

export const SectionDescriptionTestimonials = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #64748b;
  font-size: 1.125rem;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  font-size: 5rem;
  color: #e2e8f0;
  line-height: 1;
  z-index: 0;
`;

export const TestimonialText = styled.p`
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomerName = styled.h4`
  font-weight: 600;
  color: #0f172a;
  font-size: 1rem;
`;

export const CustomerRole = styled.span`
  color: #64748b;
  font-size: 0.875rem;
`;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  overflow: hidden;
  margin-right: 1rem;
  position: relative;
`;

/* FAQ SECTION STYLE */
export const FAQSection = styled.section`
  padding: 4rem 1.5rem;
`;

export const SectionTitleFaq = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
`;

export const SectionDescriptionFaq = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #64748b;
  font-size: 1.125rem;
`;

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: ${props => props.$isOpen ? '#0056b3' : '#1e293b'};
`;

export const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  padding: 0 0 1rem;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  color: #64748b;
  line-height: 1.6;
`;

/* CONTACT US SECTION */

export const ContactSection = styled.section`
  padding: 4rem 1.5rem;
  background-color: #f8fafc;
`;

export const SectionTitleContacUs = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
  background-color: #0056b3;
  color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const ContactInfoText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

export const ContactMethod = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 1rem;
  }
`;

export const ContactForm = styled.form`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #0f172a;
`;

export const FormInputContact = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.2);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem;
  font-size: 1rem;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.2);
  }
`;


