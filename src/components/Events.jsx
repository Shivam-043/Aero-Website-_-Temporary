import React , {useState} from 'react'
import EventsContent from './EventContent'
import EventsCard from './EventsCard'
import {events} from "../constants/index.js"


const Events = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };
  return (
    <div className={`bg-primary w-full overflow-hidden items-center flex`}>
        <div className={`justify-start flex w-[75vw] ${selectedPost ? "xs1:flex": "xs1:hidden" } xs1:w-[100vw] `}>
          {selectedPost ? (
          <EventsContent post={selectedPost} />
        ) : (
          <p className='text-white'>Select a post from the widget</p>
        )}
        </div>
        <div className={`grid flex-nowrap overflow-y-auto h-[80vh] sm1:justify-start xs1:justify-center justify-end w-full feedback-container relative z-[1] ${selectedPost ? "xs1:hidden":"xs1:flex-nowrap" }
        `}>
          {events.map((events) => <EventsCard key={events.id} post = {events}  onPostClick={handlePostClick} />)}
          {/* <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard /> */}
        </div>
    </div>
  )
}

export default Events