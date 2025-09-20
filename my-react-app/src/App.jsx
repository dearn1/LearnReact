import Card from './Card';
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';

function App() {
const fruits = [
    {id:1, name:'Apple', calories:95},
    {id:2, name:'Orange', calories:105},
    {id:3, name:'Cherry', calories:50},
    {id:4, name:'Date', calories:277}
  ];
  const vegetables = [
    {id:1, name:'Carrot', calories:25},
    {id:2, name:'Broccoli', calories:55},
    {id:3, name:'Spinach', calories:20},
    {id:4, name:'Potato', calories:130}
  ];

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Student name="Alice" age={20} isStudent={true} />
      <Student name="Bob" age={22} isStudent={false} />
      <Student name="Charlie" age={19} isStudent={true} />
      <Student name="Diana" age={21} isStudent={false} />
      <Student />

      <UserGreeting name="Alice" isLoggedIn={true} />
      <UserGreeting name="Bob" isLoggedIn={false} />
      <UserGreeting />

      {fruits.length > 0 && <List items={fruits} category="fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="vegetables" />}
    </>
  );
}

export default App
