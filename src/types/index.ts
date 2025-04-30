export interface Feature {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export interface Statistic {
    id: number;
    value: string;
    label: string;
}

export interface Step {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export interface Partner {
    id: number;
    name: string;
    logo: string;
}

export interface AppScreen {
    id: number;
    image: string;
    alt: string;
}