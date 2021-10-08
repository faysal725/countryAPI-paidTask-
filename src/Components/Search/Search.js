import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react/cjs/react.development';
import './Search.css'


const Search = (props) => {
    // console.log(props.cd)
    // console.log(props?.sd)
    const allData = props?.cd
    // console.log(allData)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data.search);
        filtering(data.search)
    } 

    function filtering(name) {
        // console.log(name)
        const filteredData = allData.filter(ad => ad.name.common === name)
        // console.log(filteredData)
        return props?.sd(filteredData)
    }

    return (
        <div>
            <div className="container search-container pt-5">



                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="search-box">
                        <input className="search-input" type="text" placeholder="Search Something" {...register("search")} />
                        {errors.search && <span>This field is required</span>}


                        <input className="search-button" type="submit" value="SEARCH" />
                    </div>
                </form>


            </div>

        </div>
    );
};

export default Search;