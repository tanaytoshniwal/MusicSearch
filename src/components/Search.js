import React from 'react'

function Search(props) {
    return (
        <div>
            <div className="row justify-content-center">
                <input type="text" value={props.keyword} onChange={props.key_change} className="mt-4"></input>
                <button name="search" onClick={() => {props.api(props.keyword)}}>Search</button>
            </div>
        </div>
    )
}

export default Search
