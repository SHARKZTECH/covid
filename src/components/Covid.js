import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

import FormComp from "./FormComp";

export default function Covid() {
  const [country, setCountry] = useState("");
  const [active, setActive] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [todayDeath, setTodayDeath] = useState("");
  const [todayRecovered, setTodayRecovered] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          country,
          active,
          cases,
          deaths,
          recovered,
          todayCases,
          todayDeaths,
          todayRecovered
        } = data;
        console.log(data);
        setCountry(country);
        setActive(active);
        setCases(cases);
        setDeaths(deaths);
        setRecovered(recovered);
        setTodayCases(todayCases);
        setTodayDeath(todayDeaths);
        setTodayRecovered(todayRecovered);
      });
    setUserInput("");
  };
  return (
    <Card className="m-3">
      <Card.Header>
        <Card.Title className="text-center">
          COVID-19 CASES COUNTRY WISE
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Card.Text>
          <FormComp
            userInput={userInput}
            setUserInput={setUserInput}
            submitHandler={submitHandler}
          />
        </Card.Text>
        <Card.Text>Country Name : {country}</Card.Text>
        <Card.Text>Total Cases : {cases}</Card.Text>
        <Card.Text>Active Cases : {active}</Card.Text>
        <Card.Text>Deaths : {deaths}</Card.Text>
        <Card.Text>Recovered : {recovered}</Card.Text>
        <Card.Text>Cases Today : {todayCases}</Card.Text>
        <Card.Text>Death Today : {todayDeath}</Card.Text>
        <Card.Text>Recovered Today : {todayRecovered}</Card.Text>
      </Card.Body>
    </Card>
  );
}
