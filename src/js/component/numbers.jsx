import React from "react";

export const Number_counter = ({ value }) => {
    return (
        <div className="bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center border border-light border-2 rounded-circle p-4">
                    <h1 className="mb-0 display-1">{value}</h1>
                </div>
            </div>
        </div>
    );
}