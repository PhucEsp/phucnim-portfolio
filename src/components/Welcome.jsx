import Sammy from '../public/image/sammy.jpg';
import '../assets/css/welcome.css';

export default function Welcome() {
  return (
    <div className="wrapper">
      <h1>Welcome To My portfolio</h1>
      <p>My name is Phuc Nim</p>
      <img src={Sammy} alt="Sammy Image" width={200} height={200} />
    </div>
  );
}
