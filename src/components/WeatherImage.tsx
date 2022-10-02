
import { Image } from "react-bootstrap";
import getLargeWeatherImage from "utils/getLargeWeatherImage";
import { URL_PARAMS } from "config/endpoints";
import "styles/WeatherImage.css";

type Props = {
  weatherData: { [key: string]: any },
  size?: 'lg'
}

export const WeatherImage = ({ weatherData, size }: Props) => {

  const isLarge = size === "lg"
  const iconId = weatherData.weather[0].icon

  const src =
    isLarge
      ? `images/weather/${getLargeWeatherImage(weatherData)}.png`
      : URL_PARAMS.icons(iconId);

  return (
    <Image
      alt={isLarge ? getLargeWeatherImage(weatherData) : iconId}
      className={`image-${size}`}
      src={src}
    />
  );
};