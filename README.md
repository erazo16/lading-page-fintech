# 🏦 Fintech Landing

> Landing page para una fintech que muestra un catálogo de productos financieros con detalles y filtrado.


## 🚀 Comenzando

### Prerequisitos
- Node.js 18.x o superior
- npm o yarn

### Instalación

1. Instala las dependencias:

bash

npm install
# o
yarn install

2. Inicia el servidor de desarrollo

npm run dev
# o
yarn dev


3. Abre http://localhost:3000 en tu navegador.

🛠️ Construido con

 - Next.js - Framework de React con App Router
 - TypeScript - Tipado estático
 - TailwindCSS - Utilidades CSS
 - Styled Components - Componentes estilizados
 - Recharts - Biblioteca para visualización de dato.

Deploy en:




🔍 Preguntas complementarias
# 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?
Respuesta: Me enfoqué en transmitir confianza y claridad, aspectos fundamentales en finanzas, usando una
paleta de colores con azules y verdes que transmiten confianza. Como tambien una jerarquia visual que destaca
la información mas revelante. Uso de espacio generoso para evitar la saturación y mejorar la legibilidad.

2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?
Respuesta: Opte por un enfoque hibrido aprovechando asi lo mejor de ambas tecnologias. Use Tailwind CSS para layouts,
espaciado y utilidades basicas, ya que es ideal y simplifica la estructuras de paginas y grids, espaciado cosistente y un manejo responsivo rapido y Styled Components para componentes reutilizables que requieren variantes y estilos condicionados a props. Esta combinación ofrece velocidad de desarrollo sin sacrificar la mantenibilidad de componentes complejos.

3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?
Respuesta: Para optimizar rendimiento y monitoreo podria usar Next.js Analytics para performance del servidor o Web Vitals para métricas core. Un monitorio en tiempo real lo ideal seria usar Sentry para tracking de errores, buscando optimizar la carga se usaria code splitting automático con Next.js, carga Lazy de componente no criticos y una optimizacion de imagenes con next/image.




