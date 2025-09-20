import PropTypes from "prop-types";

function List(props) {
    const category = props.category;
    const fruits = props.items;
    const listFruits = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>);
  
  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  //const listItems = lowCalFruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ol className="list-items">{listFruits}</ol>
    </>
  );
}
List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    ),
    category: PropTypes.string
};

List.defaultProps = {
    items: [],
    category: 'Items'
};

export default List