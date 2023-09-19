import React , {useEffect, useState} from 'react'
import EventsContent from './EventContent'
import EventsCard from './EventsCard'
import {events} from "../constants/index.js"
import { useParams } from 'react-router-dom';
import Footer from './Footer';


const Events = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  // const history = useHistory();
  // useEffect(() => {
  //   return () => {
  //     window.location.reload();
  //   };
  // }, [selectedPost]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch data using the ID and update selectedData state
      // Example: fetchSelectedData(id).then(data => setSelectedData(data));
      handlePostClick;
    } else {
      setSelectedPost(null);
    }
  }, [id]);

  useEffect(() => {
    const handlePopstate = () => {
      setSelectedPost(null);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <>
    <div className={`bg-primary w-full overflow-hidden items-center flex`}>
        <div className={`justify-center flex w-[75vw] ${selectedPost ? "xs1:flex": "xs1:hidden" } xs1:w-[100vw] `}>
          {selectedPost ? (
          <EventsContent post={selectedPost} />
        ) : (
          
          <p className='text-white justify-items-center flex text-center '>Select a post from the widget</p>
        )}
        </div>
        <div className={`grid flex-nowrap scroll-smooth testimonial overflow-y-auto h-[80vh] sm1:justify-start xs1:justify-center justify-end w-full feedback-container relative z-[1] ${selectedPost ? "xs1:hidden":"xs1:flex-nowrap" }
        `}>
          {events.map((events) => <EventsCard key={events.id} post = {events}  onPostClick={handlePostClick} />)}
          {/* <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard /> */}
        </div>
    </div>
    <Footer/>
    </>

  )
}

export default Events