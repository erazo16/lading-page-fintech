/**
 * Componente Gráfico de barras que muestra una simulacion de comparativas de tasas según el tipo de producto.
 */

import { ChartProps, ProductCategory } from '@/types'
import React from 'react'
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer 
  } from 'recharts';
import { ChartContainer, ChartTitle } from '../styled';

interface ChartDataItem {
    name: string;
    value: number;
  }

const Chart: React.FC<ChartProps> = ({product }) => {

    let data: ChartDataItem[] = [];
    let title = '';
  
    if (product.category === ProductCategory.ACCOUNT) {
      title = 'Comparativa de tasas de interés (%)';
      data = [
        { name: 'Banco Tradicional', value: 0.5 },
        { name: 'Promedio del mercado', value: 1.0 },
        { name: product.name, value: product.interestRate || 1.2 },
        { name: 'Mejor del mercado', value: 2.0 }
      ];
    } else if (product.category === ProductCategory.CARD) {
      title = 'Comparativa de tasas anuales (%)';
      data = [
        { name: 'Tarjeta Premium', value: 24.9 },
        { name: 'Promedio del mercado', value: 27.5 },
        { name: product.name, value: product.interestRate || 29.9 },
        { name: 'Tarjeta básica', value: 32.5 }
      ];
    }

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#64748b' }} 
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis 
            tick={{ fill: '#64748b' }} 
            axisLine={{ stroke: '#cbd5e1' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            formatter={(value: number) => [`${value}%`, 'Tasa']}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e2e8f0',
              borderRadius: '0.25rem'
            }}
          />
          <Bar 
            dataKey="value" 
            name="Tasa" 
            fill="#3b82f6"
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart