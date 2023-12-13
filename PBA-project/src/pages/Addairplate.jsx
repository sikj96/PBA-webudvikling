import '../assets/styles/add.scss';
import { Link } from 'react-router-dom';


const Addairplate = () => {
    return (
        <div className="block">
            <div className="top">
                <h1 className='top_text'>Add new AirPlate</h1>
                <h2 className='bottom_text'>Here you have the opportunity to register your AirPlate for a drone. Enter the provided serial number of your AirPlate in the field below.</h2>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    className="serial-input"
                    placeholder="Serial number..."
                />
                <Link to="/Adddrone">
                    <button className="next-button">Next</button>
                </Link>
            </div>
        </div>
    );
};

export default Addairplate;
