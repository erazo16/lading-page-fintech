import { FAQItemProps, Product, ProductCategory } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const generateMockProducts = (): Product[] => {
  return [
    {
      id: uuidv4(),
      name: "Cuenta Digital",
      description:
        "Cuenta bancaria digital sin comisiones mensuales. Ideal para gestionar tus gastos diarios.",
      category: ProductCategory.ACCOUNT,
      annualFee: 0,
      minimunDeposit: 0,
      benefits: [
        "Sin comisiones mensuales",
        "Retiros gratuitos en cajeros de la red",
        "App móvil intuitiva",
        "Pagos instantáneos",
      ],
      requirements: [
        "Ser mayor de 18 años",
        "Documento de identidad válido",
        "Residencia en el país",
      ],
      isPopular: true,
      tags: ["Sin comisiones", "Digital", "Fácil"],
    },
    {
      id: uuidv4(),
      name: "Cuenta Remunerada",
      description:
        "Cuenta que genera intereses sobre tu saldo. Mantén tu dinero disponible mientras crece.",
      category: ProductCategory.ACCOUNT,
      interestRate: 1.5,
      annualFee: 0,
      minimunDeposit: 500,
      benefits: [
        "Interés del 1.5% anual",
        "Sin comisiones si mantienes el saldo mínimo",
        "Tarjeta débito gratuita",
        "Transferencias sin costo",
      ],
      requirements: [
        "Ser mayor de 18 años",
        "Documento de identidad válido",
        "Saldo mínimo de $500",
      ],
      tags: ["Intereses", "Ahorro", "Rentable"],
    },
    {
      id: uuidv4(),
      name: "Cuenta Nómina Plus",
      description:
        "La cuenta perfecta para recibir tu salario con beneficios exclusivos para empleados.",
      category: ProductCategory.ACCOUNT,
      interestRate: 0.8,
      annualFee: 0,
      minimunDeposit: 0,
      benefits: [
        "Anticipo de nómina hasta 3 días",
        "Descuentos en comercios asociados",
        "Seguro de protección de saldo",
        "Sin comisiones por mantenimiento",
      ],
      requirements: [
        "Domiciliación de nómina",
        "Documento de identidad válido",
      ],
      tags: ["Nómina", "Beneficios", "Sin comisiones"],
    },
    {
      id: uuidv4(),
      name: "Cuenta Joven",
      description:
        "Cuenta diseñada para estudiantes y jóvenes hasta 25 años sin comisiones.",
      category: ProductCategory.ACCOUNT,
      interestRate: 0.5,
      annualFee: 0,
      minimunDeposit: 0,
      benefits: [
        "Sin comisiones hasta los 25 años",
        "Tarjeta débito personalizable",
        "Descuentos en entretenimiento",
        "App con herramientas de educación financiera",
      ],
      requirements: [
        "Edad entre 18 y 25 años",
        "Documento de identidad válido",
      ],
      isNew: true,
      tags: ["Jóvenes", "Estudiantes", "Sin comisiones"],
    },
    {
      id: uuidv4(),
      name: "Tarjeta de Crédito Premium",
      description:
        "Tarjeta de crédito con beneficios exclusivos y programa de puntos premium.",
      category: ProductCategory.CARD,
      interestRate: 24.9,
      annualFee: 120,
      benefits: [
        "Programa de puntos 2x",
        "Acceso a salas VIP en aeropuertos",
        "Seguro de viaje incluido",
        "Descuentos en comercios asociados",
      ],
      requirements: [
        "Ser mayor de 21 años",
        "Ingresos mínimos de $3000 mensuales",
        "Historial crediticio favorable",
      ],
      imageUrl: "/images/products/credit-card-1.jpg",
      isPopular: true,
      tags: ["Premium", "Viajes", "Puntos"],
    },
    {
      id: uuidv4(),
      name: "Tarjeta de Crédito Básica",
      description:
        "Tarjeta de crédito sin comisión anual, ideal para primeros usuarios.",
      category: ProductCategory.CARD,
      interestRate: 29.9,
      annualFee: 0,
      benefits: [
        "Sin comisión anual",
        "Programa de cashback 0.5%",
        "Protección contra fraudes",
        "App móvil para control de gastos",
      ],
      requirements: [
        "Ser mayor de 18 años",
        "Ingresos mínimos de $1000 mensuales",
        "Sin historial crediticio negativo",
      ],
      imageUrl: "/images/products/credit-card-2.jpg",
      isNew: true,
      tags: ["Sin comisión", "Cashback", "Principiantes"],
    },
    {
      id: uuidv4(),
      name: "Tarjeta Rewards",
      description:
        "Acumula puntos con cada compra y canjéalos por productos, viajes o experiencias.",
      category: ProductCategory.CARD,
      interestRate: 26.9,
      annualFee: 80,
      benefits: [
        "Acumulación de 1.5 puntos por cada dólar",
        "Duplica puntos en restaurantes y viajes",
        "Catálogo amplio de recompensas",
        "Bonificación de 10,000 puntos al activar",
      ],
      requirements: [
        "Ser mayor de 21 años",
        "Ingresos mínimos de $2000 mensuales",
        "Buen historial crediticio",
      ],
      imageUrl: "/images/products/credit-card-3.jpg",
      tags: ["Puntos", "Recompensas", "Bonificación"],
    },
    {
      id: uuidv4(),
      name: "Tarjeta Cashback Gold",
      description:
        "Obtén devolución de un porcentaje de tus compras automáticamente cada mes.",
      category: ProductCategory.CARD,
      interestRate: 27.5,
      annualFee: 95,
      benefits: [
        "2% de cashback en todas tus compras",
        "3% en supermercados y farmacias",
        "Seguro de protección de compras",
        "Devolución anual de la comisión si gastas más de $10,000",
      ],
      requirements: [
        "Ser mayor de 21 años",
        "Ingresos mínimos de $2500 mensuales",
        "Sin atrasos en historial crediticio",
      ],
      imageUrl: "/images/products/credit-card-3.jpg",
      isPopular: true,
      tags: ["Cashback", "Devolución", "Ahorro"],
    },
  ];
};

export const faqItems: FAQItemProps[] = [
  {
    question: "¿Cómo puedo abrir una cuenta digital?",
    answer:
      "Puedes abrir una cuenta digital en solo 10 minutos a través de nuestra aplicación móvil. Necesitarás tu documento de identidad y realizaremos una verificación por videollamada para confirmar tu identidad.",
  },
  {
    question: "¿Qué requisitos necesito para solicitar una tarjeta de crédito?",
    answer:
      "Para solicitar una tarjeta de crédito necesitas ser mayor de 18 años, tener residencia en el país, ingresos demostrables y un historial crediticio favorable. El proceso de solicitud es 100% online.",
  },
  {
    question: "¿Hay comisiones por transferencias internacionales?",
    answer:
      "Las transferencias internacionales tienen una comisión del 0.5% sobre el monto enviado, con un mínimo de $5. Los titulares de la Cuenta Premium disfrutan de hasta 5 transferencias internacionales sin comisión al mes.",
  },
  {
    question: "¿Cómo funciona el programa de puntos de las tarjetas?",
    answer:
      "Por cada dólar gastado con tu tarjeta acumulas 1 punto. En comercios seleccionados puedes acumular hasta 3 puntos por dólar. Los puntos pueden canjearse por viajes, experiencias o productos en nuestro catálogo online.",
  },
  {
    question: "¿Qué medidas de seguridad implementan para proteger mis datos?",
    answer:
      "Utilizamos encriptación de última generación, autenticación de dos factores, monitoreo continuo de transacciones y cumplimos con los más altos estándares internacionales de seguridad bancaria.",
  },
];
