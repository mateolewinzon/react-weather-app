const getLargeImage = (weatherData) => {
  const weatherId = weatherData.weather[0].id;

  const imagesMapById = {
    300: "storm",
    600: "rain",
    800: "mist",
    801: "sunny",
    803: "sunny-clouds",
    810: "cloudy",
  };

  for (let key in imagesMapById) {
    if (weatherId < key) {
        return imagesMapById[key]
    }
  }
};

export default getLargeImage;
