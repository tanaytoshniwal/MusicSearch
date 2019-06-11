import React from 'react'
import {Textfield} from 'react-mdl';
function Search(props) {
    return (
        <div>
            <div className="row justify-content-center mt-4">
                <Textfield onChange={props.key_change} label="Search Music" value={props.keyword} floatingLabel/>
            </div>
            <div className="row justify-content-center">
                <button name="search" onClick={() => {props.api(props.keyword.trim())}} className="btn btn-outline-dark">Search</button>
            </div>
        </div>
    )
}

export default Search
