import React from 'react';
import './App.css';
import styles from './App.module.css';
import Head from './components/Head';
import axios from 'axios';
class App extends React.Component {
  sample = [{
    artistId: 632781795,
    artistName: "Alec Benjamin",
    artistViewUrl: "https://music.apple.com/us/artist/alec-benjamin/632781795?uo=4",
    artworkUrl30: "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/c2/66/5e/c2665ec4-d57c-a539-5133-22ee864ca6cb/source/30x30bb.jpg",
    artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/c2/66/5e/c2665ec4-d57c-a539-5133-22ee864ca6cb/source/60x60bb.jpg",
    artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/c2/66/5e/c2665ec4-d57c-a539-5133-22ee864ca6cb/source/100x100bb.jpg",
    collectionCensoredName: "Narrated for You",
    collectionExplicitness: "notExplicit",
    collectionId: 1441728723,
    collectionName: "Narrated for You",
    collectionPrice: 6.99,
    collectionViewUrl: "https://music.apple.com/us/album/let-me-down-slowly/1441728723?i=1441728727&uo=4",
    country: "USA",
    currency: "USD",
    discCount: 1,
    discNumber: 1,
    isStreamable: true,
    kind: "song",
    previewUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/7a/bb/98/7abb9819-cf0b-4fa2-aef9-437dcccfc5a6/mzaf_9015580018185674188.plus.aac.p.m4a",
    primaryGenreName: "Pop",
    releaseDate: "2018-05-25T07:00:00Z",
    trackCensoredName: "Let Me Down Slowly",
    trackCount: 12,
    trackExplicitness: "notExplicit",
    trackId: 1441728727,
    trackName: "Let Me Down Slowly",
    trackNumber: 4,
    trackPrice: 1.29,
    trackTimeMillis: 169354,
    trackViewUrl: "https://music.apple.com/us/album/let-me-down-slowly/1441728723?i=1441728727&uo=4",
    wrapperType: "track",
    _id: 1
  }]
  keyChange = (event)=>{
    this.setState({
      keyword : event.target.value
    })
  }
  hit_api = (props) => {
    if(props.length > 0){
      axios.post(`https://itunes.apple.com/search?term=${props.replace(" ", "+")}`).then(res => {
        // console.log(res.data.results);
        res.data.results.map((x, index) => {x._id = index+1})
        this.setState({
          data : res.data.results
        })
      })
    }
  }
  constructor(){
    super()
    this.state = {
      data: [],
      keyword: ''
    }
  }
  render(){
    return (
      <div>
        <Head api={this.hit_api} keyword={this.state.keyword} key_change={this.keyChange} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
