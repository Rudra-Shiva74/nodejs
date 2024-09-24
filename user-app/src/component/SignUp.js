import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//in Coutry file we have api to fetch city according to Coutry,state
import { country, state, city } from "./Country";
export default function SignUp() {

    const [desh, setDesh] = useState([]);
    const [rajya, setRajya] = useState([]);
    const [shahar, setShahar] = useState([]);
    const [countrycode, setCountrycode] = useState('');
    const navigate = useNavigate();

    //Here i am take my form data
    const submitform = (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const gender = e.target.gender.value;
        const countrydata = e.target.countries.value;
        const ccode = JSON.parse(countrydata);
        const countries = ccode.name;
        const statesdata = e.target.states.value;
        const scode = JSON.parse(statesdata);
        const states = scode.name;
        const cities = e.target.cities.value;
        const profession = e.target.profession.value;
        const password = e.target.password.value;
        const cpass = e.target.cpass.value;
        if (cpass === password) {
            const user = { fname, lname, email, date, gender, countries, states, cities, profession, password };
            // Retrieve existing users from localStorage
            const storedUsers = localStorage.getItem('users');
            const existingUsers = storedUsers ? JSON.parse(storedUsers) : [];

            // Add the new user to the existing users array
            const updatedUsers = [...existingUsers, user];

            // Save the updated users array back to localStorage
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            navigate('/login');
        }
        else {
            alert("password do not match");
        }


    }

    //when i select country then it fetch state
    const loadCountry = async () => {
        setDesh(await country());
    }
    //when i select state then it fetch city
    const stateLoad = async (code) => {
        try {
            const ccode = JSON.parse(code);
            setRajya(await state(ccode.iso2));
            setCountrycode(ccode.iso2);
        } catch (error) {
            console.log(error);
        }
    }

    const cityLoad = async (e) => {
        try {
            const code = JSON.parse(e);
            setShahar(await city(code.iso2, countrycode));
        } catch (error) {
            console.log(error);
        }
    }
    //This is initial function to fetch country
    useEffect(() => {
        loadCountry();
    }, []);
    return (
        <div className='d-flex justify-content-center pt-4'>
            <div className="card shadow" style={{ width: "30rem" }}>
                <h1 className='text-center'>Registration</h1>
                <div className="card-body">
                    <form onSubmit={submitform}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="fname" name='fname' placeholder="Enter Your First Name" autoComplete='off' />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="lname" name='lanme' placeholder="Enter Your Last Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name='email' placeholder="Enter Your Email Address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Enter Your Date of Birth</label>
                            <input type="date" className="form-control" id="date" name='date' placeholder="Enter Your Date of Birth" />
                        </div>
                        <div className="mb-3">
                            <input type="radio" name='gender' id='Male' value={'Male'} /> <label htmlFor="Male">Male</label>  <input type="radio" name='gender' value={"Female"} id='Female' /> <label htmlFor="Female">Female</label>
                        </div>
                        <div className="mb-3">
                            <select id="countries" name='countries' className='form-select' onChange={(e) => stateLoad(e.target.value)}>
                                <option>Select Your Coutry</option>
                                {desh.map((Element) => {
                                    return (
                                        <option value={JSON.stringify(Element)} key={Element.id}>{(Element.name)}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select id="states" name='states' className='form-select' onChange={(e) => cityLoad(e.target.value)}>
                                <option  >Select Your State</option>
                                {rajya.map((Element) => {
                                    return (
                                        <option value={JSON.stringify(Element)} key={Element.id}>{Element.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select id="cities" name='cities' className='form-select'>
                                <option >Select Your City</option>
                                {shahar.map((Element) => {
                                    return (
                                        <option value={Element.name} key={Element.id}>{Element.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="profession" name='profession' placeholder="Enter Your Profession" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" name='password' placeholder="Enter Your Password" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="cpass" name='cpass' placeholder="Enter Your Confirm Password" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
