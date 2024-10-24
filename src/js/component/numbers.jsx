import React from "react";

export const Number_counter = ({value}) =>{
    return(
    <div className="bg-dark text-white">
        <div class="container mt-5">
            <div className="d-flex justify-content-center align-items-center border border-2">
                <h1 className="mb-0">{value}</h1>
            </div>
        </div>
    </div>
    );
}  