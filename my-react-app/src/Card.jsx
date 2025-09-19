import profilePicture from './assets/pp.png';

function Card() {

    return (
        <div className="card">
            <img className="card-image" src={profilePicture} alt="profile picture"></img>
            <h2 className="card-title">React card component</h2>
            <p className="card-text">I learned how to create a card component in React.</p>
        </div>
    );
}

export default Card