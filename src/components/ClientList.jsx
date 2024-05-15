import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClientCard from "./ClientCard";
import Logo from "../../src/assets/logo.png"
import Email from "../../src/assets/email.svg"
import Instagram from "../../src/assets/instagram.svg"
import Linkdn from "../../src/assets/linkedin.svg"
import "../assets/css/client.css"
import { APIURL } from '../constants/constants';


const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            debugger
            const response = await axios.get(APIURL);
            setClients(response.data);
        };

        fetchClients();
    }, []);

    return (
        <>
            <nav>
                <div>
                    <img className='logo' src={Logo} alt='logo' />
                </div>
                <div>
                    <img className='icons' src={Email} alt='logo' />
                    <img className='icons' src={Instagram} alt='logo' />
                    <img className='icons' src={Linkdn} alt='logo' />
                </div>
            </nav>
            <div className="container mt-5">
                <div className='heading-wrap'>
                    <h1 className="text-center mb-5 heading">Company Listings</h1>
                </div>
                <div className="card-container d-flex">
                    {clients.map(client => <ClientCard key={client.id} client={client} />)}
                </div>
            </div>
        </>
    );
};

export default ClientList;