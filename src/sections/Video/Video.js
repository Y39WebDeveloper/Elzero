import { FaRandom } from 'react-icons/fa'
import { Section } from '../../components'
import VideoImg from '../../imgs/video-preview.jpg'
import './Video.css'

const VideosData = [
    { id: 0, title:"How To Create Sub Domain", duration:"05:18"},
    { id: 1, title:"Playing With The DNS", duration:"03:18"},
    { id: 2, title:"Everything About The Virtual Hosts", duration:"05:25"},
    { id: 3, title:"How To Monitor Your Website", duration:"04:16"},
    { id: 4, title:"Uncharted Beating The Last Boss", duration:"07:48"},
    { id: 5, title:"Ys Oath In Felghana Overview", duration:"03:12"},
    { id: 6, title:"Ys Series Ali Games Ending", duration:"08:10"},
];

const Video = () => {
    const videos = VideosData.map(video => <span key={video.id}><li>{video.title}<span>{video.duration}</span></li></span>)
    return (
        <Section name='videos' title='Top Videos'>
            <div className="holder">
                <div className="list">
                    <div className="name">
                        Top Videos
                        <FaRandom/>
                    </div>
                    <ul>
                        {videos}
                    </ul>
                </div>
                <div className="preview">
                    <img src={VideoImg} alt="video" />
                    <div className="info">Everything About The Virtual Hosts</div>
                </div>
            </div>
        </Section>
    )
}

export default Video