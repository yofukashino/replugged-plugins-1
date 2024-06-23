interface ColorResponse {
  hex: () => string;
  hsl: () => string;
  int: () => number;
  spring: () => string;
}

interface Color {
  css: string;
  resolve: (theme: { theme: string; saturation: number }) => ColorResponse;
}

export type DefaultIconProps = React.ComponentPropsWithoutRef<"svg"> & {
  color?: string | Color;
  colorClass?: string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "custom";
};
