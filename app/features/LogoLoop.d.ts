declare module './LogoLoop' {
  interface LogoItem {
    node?: React.ReactElement;
    src?: string;
    alt?: string;
    title?: string;
    href?: string;
    ariaLabel?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
  }

  interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
    width?: string | number;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    renderItem?: (item: LogoItem, key: string) => React.ReactElement;
    ariaLabel?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  const LogoLoop: React.ComponentType<LogoLoopProps>;
  export default LogoLoop;
}
