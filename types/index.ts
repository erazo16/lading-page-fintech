import { ButtonHTMLAttributes } from "react";

export enum ProductCategory {
    ACCOUNT = 'Cuentas',
    CARD = 'Tarjetas'
}

export interface Product {
    id : string;
    name : string;
    description: string;
    category : ProductCategory;
    interestRate?: number;
    annualFee?: number;
    minimunDeposit?: number;
    benefits: string[];
    requirements: string[];
    imageUrl?: string;
    isPopular?: boolean;
    isNew?: boolean;
    tags?: string[]
}

export interface CardPropsProducts {
    product: Product;
}

export interface categoryPropsFilter {
    categories: ProductCategory[];
    selectCategory : ProductCategory | null;
    onSelectCategory: ( category: ProductCategory | null ) => void
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    href?: string;
    as?: React.ElementType;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface ProductGridProps {
    products: Product[];
}

export interface ProductCardProps {
    product : Product
}

export interface ProductDetailProps {
    product: Product
}

export interface ChartProps {
    product: Product;
}

export interface FAQItemProps {
    question: string;
    answer: string;
  }

