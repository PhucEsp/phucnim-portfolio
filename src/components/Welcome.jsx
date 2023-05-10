import Sammy from '../public/image/sammy.jpg'
import "../assets/css/welcome.css"

export default function Welcome() {
    return(
        <div className="wrapper">
            <h1>Welcome To My App</h1>
            <p>This is Phuc Nim portfolio page!</p>
            <img src={Sammy} alt="Sammy Image" width={200} height={200} />
        </div>
    )
}