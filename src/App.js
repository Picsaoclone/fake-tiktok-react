import React, { useEffect, useState, useRef } from 'react';
import TopNavbar from './components/TopNavbar';
import VideoCard from './components/VideoCard';
import BottomNavbar from './components/BottomNavbar';
import './App.css';

// Danh sách video
const videoUrls = [
  {
    url: require('./videos/video1.mp4'),
    profilePic:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    username: 'csjackie',
    description: 'Lol nvm #compsci #chatgpt #ai #opena #tiktok',
    song: 'Original sound - Famed Flames',
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 12,
  },
  {
    url: require('./videos/video2.mp4'),
    profilePic:
      'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg',
    username: 'faruktutkus',
    description:
      'Wait for the end | Im RTX 4090 TI #softwareengineer #codinglife #codingmemes',
    song: '5s - Computer Science',
    likes: '9.6K',
    comments: 230,
    saves: 967,
    shares: 1037,
  },

  // ============================
  // VIDEO 3
  // ============================
  {
    url: require('./videos/video3.mp4'),
    profilePic:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    username: 'anniedance',
    description: 'funny #VScode',
    song: 'Beat Drop - DJ Remix',
    likes: '1.2M',
    comments: '45.5K',
    saves: '12.3K',
    shares: '8.9K',
  },

  // ============================
  // VIDEO 4
  // ============================
  {
    url: require('./videos/video4.mp4'),
    profilePic:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    username: 'SupaR',
    description: 'Wait for the end | Im RTX 4090 TI | #softwareegineer #coding #codinglife #codingmemes',
    song: 'Tropical Vibes - Chill Mix',
    likes: '325K',
    comments: '12.1K',
    saves: '8.4K',
    shares: '4.2K',
  },
];


function App() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // search
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // share popup
  const [shareOpen, setShareOpen] = useState(false);
  const [shareVideo, setShareVideo] = useState(null);

  // EXERCISE 5 — SHOW INFO
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const videoElement = entry.target;
        if (entry.isIntersecting) {
          videoElement.play();

          const index = videoRefs.current.indexOf(videoElement);
          if (index !== -1) {
            const v = videos[index];
            setActiveIndex(index);

            // cập nhật info
            setInfo({
              username: v.username,
              song: v.song,
              likes: v.likes,
              comments: v.comments,
            });
          }
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    videoRefs.current.forEach((videoRef) => {
      if (videoRef) observer.observe(videoRef);
    });

    return () => observer.disconnect();
  }, [videos]);

  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  const goToIndex = (index) => {
    if (index < 0 || index >= videos.length) return;
    setActiveIndex(index);

    const ref = videoRefs.current[index];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });

      setShowInfo(true);
      setTimeout(() => setShowInfo(false), 2500);
    }
  };

  const goNext = () => goToIndex(activeIndex + 1);
  const goPrev = () => goToIndex(activeIndex - 1);

  // PHÍM RIGHT → EXERCISE 5
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goNext();

        // hiện info overlay
        setShowInfo(true);
        setTimeout(() => setShowInfo(false), 2500);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // SEARCH
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setVideos(videoUrls);
      setActiveIndex(0);
      return;
    }
    const filtered = videoUrls.filter((v) =>
      v.description.toLowerCase().includes(term)
    );
    setVideos(filtered);
    setActiveIndex(0);

    setTimeout(() => goToIndex(0), 0);
  };

  // copy URL khi Save
  const handleSaveUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(String(url));
      console.log('Copied url:', url);
    } catch (err) {
      console.error('Cannot copy to clipboard', err);
    }
  };

  // share popup
  const handleShare = (video) => {
    setShareVideo(video);
    setShareOpen(true);
  };

  const closeShare = () => {
    setShareOpen(false);
    setShareVideo(null);
  };

  return (
    <div className="app">
      <div className="phone-frame">

        <TopNavbar
          searchVisible={searchVisible}
          searchTerm={searchTerm}
          onToggleSearch={() => setSearchVisible((v) => !v)}
          onSearchTermChange={setSearchTerm}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* EXERCISE 5 — OVERLAY INFO */}
        {showInfo && info && (
          <div className="video-info-overlay show">
            <p><strong>@{info.username}</strong></p>
            <p>{info.song}</p>
            <p>❤️ {info.likes}   💬 {info.comments}</p>
          </div>
        )}

        {/* Video scrolling */}
        <div className="video-list">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              url={video.url}
              username={video.username}
              description={video.description}
              song={video.song}
              likes={video.likes}
              comments={video.comments}
              saves={video.saves}
              shares={video.shares}
              profilePic={video.profilePic}
              setVideoRef={handleVideoRef(index)}
              autoplay={index === 0}
              onSwipeUp={goNext}
              onSwipeDown={goPrev}
              onShare={() => handleShare(video)}
              onSave={handleSaveUrl}
            />
          ))}
        </div>

        <BottomNavbar />

        {/* Share popup */}
        {shareOpen && (
          <div className="share-overlay">
            <div className="share-popup">
              <button className="close-btn" onClick={closeShare}>
                ×
              </button>
              <h3>Share</h3>
              {shareVideo && (
                <>
                  <p>@{shareVideo.username}</p>
                  <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Threads</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
