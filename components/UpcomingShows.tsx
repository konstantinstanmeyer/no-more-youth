'use client';

const shows = [
  { date: '23 JAN', day: 'FRI', venue: 'Mitsubishi Electric HALLE', time: '19:00', location: 'Dusseldorf, DE' },
  { date: '24 JAN', day: 'SAT', venue: 'Velodrom', time: '19:00', location: 'Berlin, DE' },
  { date: '25 JAN', day: 'SUN', venue: 'Sporthalle Hamburg', time: '19:00', location: 'Hamburg, DE' },
  { date: '27 JAN', day: 'TUE', venue: 'Gothenburg Film Studios', time: '19:00', location: 'Göteborg, SE' },
  { date: '29 JAN', day: 'THU', venue: 'Sentrum Scene', time: '19:00', location: 'Oslo, NO' },
  { date: '30 JAN', day: 'FRI', venue: 'Fållan', time: '19:00', location: 'Stockholm, SE' },
  { date: '31 JAN', day: 'SAT', venue: 'K.B. Hallen', time: '19:00', location: 'Copenhagen, DK' },
  { date: '2 FEB', day: 'MON', venue: 'Jahrhunderthalle', time: '19:00', location: 'Frankfurt, DE' },
];

export default function UpcomingShows() {
  return (
    <div className="w-3/4 h-full flex flex-col z-50 justify-center! items-center! mx-auto!">
        <h2 className="text-2xl mb-10! chivo font-black tracking-wider">UPCOMING SHOWS</h2>
        <div className="w-full flex flex-row oswald font-bold">
            <p className="w-40 ml-1!">DATE</p>
            <p className="mr-auto!">VENUE</p>
            <p className="w-20">TIME</p>
            <p className="w-40 text-right mr-1!">LOCATION</p>
        </div>
        {shows.map((show, i) => 
            <div key={`show-${i}`} className="w-full oswald flex flex-row border-2 mb-2! opacity-70 hover:opacity-100 transition-opacity duration-200">
                <p className="w-40 ml-1!">{show.day + ", " + show.date}</p>
                <p className="mr-auto!">{show.venue}</p>
                <p className="w-20">{show.time}</p>
                <p className="w-40 text-right mr-1!">{show.location}</p>
            </div>
        )}
    </div>
  );
}