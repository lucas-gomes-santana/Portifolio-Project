declare module 'framer-motion' {
  type AnimationProps = {
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    opacity?: number | number[];
    transition?: TransitionProps;
    [key: string]: number | number[] | string | TransitionProps | undefined;
  };

  type TransitionProps = {
    duration?: number;
    delay?: number;
    ease?: string | number[];
    type?: 'tween' | 'spring' | 'inertia';
    staggerChildren?: number;
    [key: string]: number | string | number[] | undefined;
  };

  export interface Variants {
    hidden?: AnimationProps;
    visible?: AnimationProps;
    [key: string]: AnimationProps | undefined;
  }

  export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    initial?: string | AnimationProps | Variants;
    animate?: string | AnimationProps | Variants;
    exit?: string | AnimationProps | Variants;
    variants?: Variants;
    transition?: TransitionProps;
    whileHover?: string | AnimationProps;
    whileTap?: string | AnimationProps;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const motion: {
    div: React.FC<MotionProps>;
    span: React.FC<MotionProps>;
    a: React.FC<MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;
    img: React.FC<MotionProps & React.ImgHTMLAttributes<HTMLImageElement>>;
    [key: string]: React.FC<MotionProps>;
  };
} 