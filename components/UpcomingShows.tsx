const shows = [
  // { date: '04 FEB', day: 'WED', venue: "O-Brien's Pub", time: '19:00', location: 'Fitchberg, MA' },
  { date: '07 FEB', day: 'SAT', venue: "Bad Brgr", time: '20:00', location: 'Manchester, NH' },
];

export default function UpcomingShows() {
  return (
    <div className="w-full md:w-3/4 px-4 md:px-0 h-full flex flex-col z-50 justify-center overflow-y-visible items-center mx-auto text-[#e8dcc4]">
      <h2 className="text-xl md:text-2xl mb-6 md:mb-10 chivo font-black tracking-wider">UPCOMING SHOWS</h2>
      <div className="hidden md:flex w-full flex-row oswald font-bold">
        <p className="w-40 ml-1">DATE</p>
        <p className="mr-auto">VENUE</p>
        <p className="w-20">TIME</p>
        <p className="w-40 text-right mr-1">LOCATION</p>
      </div>
      <div className="hidden md:block w-full min-h-72">
        {shows.map((show, i) => (
          <div 
            key={`show-desktop-${i}`} 
            className="w-full oswald flex flex-row border-2 border-[#e8dcc4]/30 mb-2 opacity-70 hover:opacity-100 hover:border-[#e8dcc4]/60 transition-all duration-200 cursor-pointer"
          >
            <p className="w-40 ml-1">{show.day}, {show.date}</p>
            <p className="mr-auto">{show.venue}</p>
            <p className="w-20">{show.time}</p>
            <p className="w-40 text-right mr-1">{show.location}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden w-full space-y-3">
        {shows.map((show, i) => (
          <div 
            key={`show-mobile-${i}`} 
            className="w-full oswald border-2 border-[#e8dcc4]/30 p-3 opacity-80 hover:opacity-100 hover:border-[#e8dcc4]/60 transition-all duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="text-sm font-bold">
                {show.day}, {show.date}
              </span>
              <span className="text-sm opacity-60">{show.time}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm font-bold">
                {show.venue}
              </span>
              <span className="text-sm opacity-60">{show.location}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}