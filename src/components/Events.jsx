import React from 'react'
import EventsContent from './EventContent'
import EventsCard from './EventsCard'
import {events} from "../constants/index.js"

const Events = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden items-center flex`}>
        <div className='justify-start flex w-[75vw]'>
          <EventsContent key={events[0].id} />
        </div>
        <div className="grid flex-nowrap overflow-y-auto h-[80vh] sm1:justify-start justify-end w-full feedback-container relative z-[1]">
          {events.map((events) => <EventsCard key={events.id} {...events} />)}
          {/* <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard /> */}
        </div>
    </div>
  )
}

export default Events