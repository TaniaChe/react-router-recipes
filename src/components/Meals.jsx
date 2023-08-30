import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Input,
} from "reactstrap";
export const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("meat");
  const fetchData = async () => {
    // const url = "https://themealdb.com/api/json/v1/1/search.php?f=c";
    const req = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    const data = await req.json();
    setMeals(data.meals);
   //  console.log(req);
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <Input
        style={{ width: "50%", margin: "auto" }}
        name="search"
        placeholder="Search for your dish ..."
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="meals-display">
        {!!meals?.length &&
          meals.map((item) => {
            return (
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{item.strMeal}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.strCategory}
                  </CardSubtitle>
                </CardBody>
                <img alt="Card cap" src={item.strMealThumb} width="100%" />
                <CardBody>
                  <CardText>{item.strArea}</CardText>
                  <CardLink href="#">More information...</CardLink>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </>
  );
};
