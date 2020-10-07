import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDeteils from "./VideojDetail";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("わいわい");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <VideoDeteils video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { videos: [], selectedvideo: null };

//   componentDidMount() {
//     this.onTermSubmit("aaa");
//   }

//   onTermSubmit = async term => {
//     const KEY = "AIzaSyBYgNNNwOtBmH1nchOMSA-B1EuBpxTny3E";

//     const response = await youtube.get("/search", {
//       params: {
//         part: "snippet",
//         type: "video",
//         maxResults: 5,
//         key: KEY,
//         q: term
//       }
//     });

//     console.log(response.data.items);
//     console.log(response.data.items[0]);
//     this.setState({
//       videos: response.data.items,
//       selectedvideo: response.data.items[0]
//     });
//   };

//   onVideoSelect = video => {
//     this.setState({ selectedvideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDeteils video={this.state.selectedvideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
