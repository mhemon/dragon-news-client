import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h5 className='mb-2'>All Category</h5>
            <div className='ps-4'>
                {
                    categories.map(category => <p>
                        {/* <Link className='text-decoration-none'>{category.name}</Link> */}
                        <NavLink className={`text-decoration-none ({ isActive }) => (isActive ? 'isActive' : 'isPending')`}
                        style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            };
                          }}
                          to="/"
                          >{category.name}</NavLink>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNav;