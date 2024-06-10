import { FastAverageColor } from "fast-average-color";

export const isImageDark = async (image: string) => {
const fac = new FastAverageColor();
const isDark = await fac
.getColorAsync(image)
.then((color) => color.isDark);
return isDark;
}
