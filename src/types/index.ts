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