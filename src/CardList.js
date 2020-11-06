import React, {useState} from 'react';
import Card from '../src/Card';
import Filter from '../src/Filter';

const productArray = [
  {
    id: 1,
    name: "Apple", 
    group: "fruits", 
    image_url: "images/Apple-1.jpg", 
    isFavorite: false,
    servingSize: "1 large (242 g/8 oz)",
    calories: "130",
    sugars: "25g",
    iron: "2%"
  },
  {
    id: 2,
    name: "Banana", 
    group: "fruits", 
    image_url: "images/Banana-2.jpg", 
    isFavorite: false,
    servingSize: "1 medium (126 g/4.5 oz)",
    calories: "110",
    sugars: "19g",
    iron: "2%"
  },
  {
    id: 3,
    name: "Grapes", 
    group: "fruits", 
    image_url: "images/Grapes-3.jpg", 
    isFavorite: false, 
    servingSize: "3/4 cup (126 g/4.5 oz)",
    calories: "90",
    sugars: "20g",
    iron: "0%"
  },
  {
    id: 4,
    name: "Kiwi", 
    group: "fruits", 
    image_url: "images/Kiwi-4.jpg", 
    isFavorite: false,
    servingSize: "2 medium (148 g/5.3 oz)",
    calories: "90",
    sugars: "13g",
    iron: "2%"
  },
  {
    id: 5,
    name: "Avocado", 
    group: "fruits", 
    image_url: "images/Avocado-5.jpg", 
    isFavorite: false,
    servingSize: "1/2 medium (30 g/1.1 oz)",
    calories: "50",
    sugars: "0g",
    iron: "2%"
  },
  {
    id: 6,
    name: "Cantaloupe-melon", 
    group: "fruits", 
    image_url: "Cantaloupe-melon-3.jpg", 
    isFavorite: false, 
    servingSize: "1/4 medium (134 g/4.8 oz)",
    calories: "50",
    sugars: "11g",
    iron: "2%"
  },
];


function CardList() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
    <Filter SearchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <div className="cardlist">
      {/*we create an array of card elements with the information of 'testData'*/}
      {productArray.filter((rec) => {const targetString = `${rec.name}`.toLowerCase();
      return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
      }).map((product) => (<Card key={product.id} {...product} />
      ))}
    </div>
  </div>
  );
}

export default CardList;