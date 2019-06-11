import React from 'react'
import {Card} from 'react-mdl'
function Cards(props) {
    let res = props.data;
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    let list = res.map(data => 
        <div>
            <div className="row m-3 p-2 rounded alert alert-secondary">
                <div className="col-sm-3 col-md-2">
                    <img src={data.artworkUrl100} alt={data.trackName} className="img-fluid logo rounded depth" />
                </div>
                <div className="col-sm-9 col-md-10">
                    <p className="h4"><a href={data.trackViewUrl} target="_blank">{data.trackName}</a></p>
                    <p className="h6">Duration: {millisToMinutesAndSeconds(data.trackTimeMillis)}</p>
                    <p className="h6">Artist: <a href={data.artistViewUrl} target="_blank">{data.artistName}</a></p>
                    <p className="h6">Genre: {data.primaryGenreName}</p>
                </div>
            </div>
        </div>
    )
    console.log(list);
    return list.length > 0 &&
        <div className="mt-3">
            <div className="container bg-light lc p-3">
                <ul>
                    {list}
                </ul>
            </div>
        </div>
}

export default Cards
