import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "https://th.bing.com/th/id/R.5b58e5b1d01842869060489ffac86869?rik=4Oy36DydduCoQg&pid=ImgRaw&r=0",
  "01n": "https://th.bing.com/th/id/OIP._G-HUc83oaBMqwOOb0y35gHaHa?w=213&h=213&c=7&o=5&pid=1.7",
  "02d": "https://th.bing.com/th/id/OIP.waLdZTArrSO31nWF3QkEvAHaHa?pid=ImgDet&rs=1",
  "02n": "https://th.bing.com/th/id/OIP.hxx601pUP0A3kLtT8dABPgHaHa?pid=ImgDet&rs=1",
  "03d": "https://th.bing.com/th/id/R.8843805c791ff5eb97ad94411f8e6e8f?rik=J564TyXyYQ9gmA&pid=ImgRaw&r=0",
  "03n": "https://th.bing.com/th/id/R.8843805c791ff5eb97ad94411f8e6e8f?rik=J564TyXyYQ9gmA&pid=ImgRaw&r=0",
  "04d": "https://th.bing.com/th/id/OIP.85jGjbGPCJDGteJRzQu78AHaEK?pid=ImgDet&rs=1",
  "04n": "https://th.bing.com/th/id/OIP.hxx601pUP0A3kLtT8dABPgHaHa?pid=ImgDet&rs=1",
  "09d": "https://th.bing.com/th/id/OIP.h1TY9ywceTfDDyym0JUsqQHaHa?pid=ImgDet&rs=1",
  "09n": "https://th.bing.com/th/id/OIP.wo1sLI6HaCUWPo0BYtWe3AHaHa?pid=ImgDet&rs=1",
  "10d": "https://th.bing.com/th/id/OIP.h1TY9ywceTfDDyym0JUsqQHaHa?pid=ImgDet&rs=1",
  "10n": "https://th.bing.com/th/id/OIP.wo1sLI6HaCUWPo0BYtWe3AHaHa?pid=ImgDet&rs=1",
  "11d": "https://th.bing.com/th/id/OIP.uzvpgPl9e3ucvU9A814irAHaHa?pid=ImgDet&rs=1",
  "11n": "https://th.bing.com/th/id/OIP.uzvpgPl9e3ucvU9A814irAHaHa?pid=ImgDet&rs=1",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
