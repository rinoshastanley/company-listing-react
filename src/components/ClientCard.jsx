import React from 'react';

const ClientCard = ({ client }) => (
    <div className="card client-card">
        <div className="card-body">
            <h5 className="card-title">{client.name}</h5>
            <p className="card-text">CIN: {client.CIN}</p>
            <p className="card-text">PIN: {client.PIN}</p>
            <p className="card-text">Status: {client.status}</p>
        </div>
    </div>
);

export default ClientCard;