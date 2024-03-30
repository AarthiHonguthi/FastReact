import { useState } from 'react';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'> Vite with Tailwind</h1>
     <Header /> {/* Use Header component */}
     <Card username='Aarthi' post='Software Engineer' photo="https://media.licdn.com/dms/image/D4D03AQF5Quja7xI0Xg/profile-displayphoto-shrink_800_800/0/1702531255203?e=2147483647&v=beta&t=l12enIbLdpWhHvVNdDGW61d6FCvWn36E3aKAwa1m4QQ" />
     <Card username='Hitesh' post='Software Engineer, Hyderabad' photo="https://d8qb5cxd9qhkd.cloudfront.net/pages/tiles/Manchal.jpg" />
     <Card />
     <Footer />
    </>
  );
}

export default App;
