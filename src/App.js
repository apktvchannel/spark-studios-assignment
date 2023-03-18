import { useEffect, useState } from "react";
import AgeCategory from "./components/AgeCategory";
import CourseData from "./Data/sameple-response.json";
import Card from "./components/card/Card";

function App() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    setRandomIndex(num);
    let tabsArr = [];

    CourseData[num].forEach((element) => {
      let isExist = tabsArr.find(
        (item) =>
          item.max_age === element.max_age && item.min_age === element.min_age
      );
      if (!isExist) {
        tabsArr.push({
          max_age: element.max_age,
          min_age: element.min_age,
        });
      }
    });

    setTabs(tabsArr);
  }, []);

  return (
    <div>
      <div className="container">
        {tabs.map((item, index) => (
          <AgeCategory
            key={index}
            id={index}
            isActive={index === currentTab}
            minAge={item.min_age}
            maxAge={item.max_age}
            onClick={setCurrentTab}
            category={item.category_name}
          />
        ))}
      </div>
      <div className="container">
        {tabs[currentTab] &&
          CourseData[randomIndex]
            .filter(
              (item) =>
                item.min_age === tabs[currentTab].min_age &&
                item.max_age === tabs[currentTab].max_age
            )
            .map((item) => (
              <Card
                name={item.name}
                session={item.num_classes}
                review={item.rating}
                pitch={item.pitch}
                description={item.curriculum_outcomes}
                originalPrice={item.original_price}
                discountPrice={item.discounted_price}
                game={item.games_count}
                certificate={item.certificate_count}
                category={item.category_name}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
