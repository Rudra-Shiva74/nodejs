import React, { useEffect, useState } from 'react';
import { fetchDataFromLocalStorage } from './Auth';
export default function DashBoard() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [bod, setBod] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setStates] = useState('');
    const [city, setCity] = useState('');
    const [profession, setProfessiony] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        //here i call the fetchDataFromLocalStorage function to get the data from localstorage
        const user = fetchDataFromLocalStorage();
        setFname(user.fname);
        setLname(user.lname);
        setEmail(user.email);
        setCity(user.cities);
        setCountry(user.countries);
        setStates(user.states);
        setGender(user.gender);
        setPassword(user.password);
        setProfessiony(user.profession);
        setBod(user.date);
    }, []);
    const updateDetails = (e) => {
        e.preventDefault();
        const user = { fname, lname, email, date: bod, gender, countries: country, states: state, cities: city, profession, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Update Profile");
    }
    return (
        <div className="mt-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">User Dashboard</h5>
                    <form onSubmit={updateDetails}>
                        <div className="row">
                            <div className='col-lg-3'>First Name<input type="text" className='form-control' value={fname} onChange={(e) => setFname(e.target.value)} /></div>
                            <div className='col-lg-3'>Last Name<input type="text" className='form-control' value={lname} onChange={(e) => setLname(e.target.value)} /></div>
                            <div className='col-lg-3'>Email<input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                            <div className='col-lg-3'>Birth of Date<input type="date" className='form-control' value={bod} onChange={(e) => setBod(e.target.value)} /></div>
                            <div className='col-lg-3'>Gender <br /> <input type="radio" name='gender' id='Male' value={'Male'} checked={gender === 'Male' ? true : false} onChange={(e) => setGender(e.target.value)} /> <label htmlFor="Male">Male</label>  <input type="radio" name='gender' checked={gender === 'Male' ? false : true} value={"Female"} id='Female' onChange={(e) => setGender(e.target.value)} /> <label htmlFor="Female">Female</label></div>
                            <div className='col-lg-3'>Country<input type="text" className='form-control' value={country} onChange={(e) => setCountry(e.target.value)} /></div>
                            <div className='col-lg-3'>State<input type="text" className='form-control' value={state} onChange={(e) => setStates(e.target.value)} /></div>
                            <div className='col-lg-3'>City<input type="text" className='form-control' value={city} onChange={(e) => setCity(e.target.value)} /></div>
                            <div className='col-lg-3'>Profession<input type="text" className='form-control' value={profession} onChange={(e) => setProfessiony(e.target.value)} /></div>
                            <div className='col-lg-3'>Password<input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} /> </div>
                        </div>
                        <div className='mt-2'>
                            <button type='submit' className='btn btn-primary'>Update</button>
                        </div>
                    </form>
                    {/* <img src="" className="img-fluid" alt="User Image" /> */}
                </div>
            </div>
        </div>
    )
}
