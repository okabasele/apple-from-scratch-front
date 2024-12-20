import { FastAverageColor } from "fast-average-color";

export const isImageDark = async (image: string) => {
const fac = new FastAverageColor();
const isDark = await fac
.getColorAsync(image)
.then((color) => color.isDark);
return isDark;
}

export const formatPrice = (price: number) => {
  if (!price) {
    return "0,00 €";
  }
  return price.toFixed(2).replace(".", ",") + " €";
}

export const generateBlurPlaceholder = (color = 'black') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <filter id="blur">
        <feGaussianBlur stdDeviation="10" />
      </filter>
      <rect width="100%" height="100%" filter="url(#blur)" fill="${color}"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};