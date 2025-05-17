declare module 'framer-motion' {
  type AnimationProps = {
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    opacity?: number;
    [key: string]: number | string | undefined;
  };

  type TransitionProps = {
    duration?: number;
    delay?: number;
    ease?: string | number[];
    type?: 'tween' | 'spring' | 'inertia';
    [key: string]: number | string | number[] | undefined;
  };

  export interface Variants {
    [key: string]: AnimationProps;
  }

  export interface MotionProps {
    initial?: AnimationProps | Variants;
    animate?: AnimationProps | Variants;
    exit?: AnimationProps | Variants;
    variants?: Variants;
    transition?: TransitionProps;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => void;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
  }

  export const motion: {
    div: React.FC<MotionProps>;
    span: React.FC<MotionProps>;
    [key: string]: React.FC<MotionProps>;
  };
} 