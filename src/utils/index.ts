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
