import { store } from "../../app/store";
import { mockLocalCityName, mockLocalWeather, mockLocation } from "../../mocks/responses";
import { screen, render, waitFor } from "../../test-utils/testing-library-utils";
import convertTempFromK from "../../utils/convertTemp";
import LocalWeather from "./LocalWeather";

test("shows current local temperature with drawing and city name", async () => {
  render(<LocalWeather />, { preloadedState: {}, store });
  const weather = await screen.findByText(
    convertTempFromK(mockLocalWeather.current.temp)
  );
  expect(weather).toBeInTheDocument();

  const cityName = await screen.findByRole('heading', {level:2, name: mockLocalCityName[0].name})
  expect(cityName).toBeInTheDocument();
});
