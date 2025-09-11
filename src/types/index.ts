export interface PromoBannerProps {
  message: string;
  ctaText?: string;
  ctaHref?: string;
};

export interface CardProps {
  imageSrc: string;
  title: string;
  ratings: number;
  price: number;
  priceBefore?: number | null;
  less?: number | null;
  className?: string;
}

export interface SimpleCardProps {
  ratings: number;
  name: string;
  testimonial: string;
  className?: string;
}

export interface DropdownProps {
  label: string;
  items: {
    label: string;
    path: string;
    children?: { label: string; path: string }[];
  }[];
  isMobile?: boolean;
}