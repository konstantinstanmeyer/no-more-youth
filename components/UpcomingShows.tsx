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
    // <section className="relative w-full py-24 px-8 md:px-16">
    //   <div 
    //     className="absolute inset-0 pointer-events-none"
    //     style={{
    //       background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.7) 15%, rgba(10,10,10,0.85) 50%, rgba(10,10,10,0.7) 85%, transparent 100%)',
    //     }}
    //   />
      
    //   <div className="relative z-10 max-w-5xl mx-auto">
    //     <h2 
    //       className="text-center mb-20 tracking-[0.25em] uppercase flicker-crude-alt"
    //       style={{
    //         fontFamily: "'Bebas Neue', sans-serif",
    //         fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    //         color: 'var(--color-bone)',
    //         textShadow: '0 0 60px rgba(139, 0, 0, 0.4)',
    //       }}
    //     >
    //       Upcoming Shows
    //     </h2>

    //     <div className="space-y-1">
    //       {shows.map((show, i) => (
    //         <a
    //           key={i}
    //           href="#"
    //           className="
    //             grid grid-cols-[100px_1fr_auto] md:grid-cols-[120px_1fr_180px] 
    //             items-center gap-6 py-4 px-2
    //             border-b border-[rgba(232,220,196,0.08)]
    //             transition-all duration-200
    //             hover:bg-[rgba(139,0,0,0.08)] hover:border-[rgba(139,0,0,0.2)]
    //             group
    //           "
    //         >
    //           <div className="flex items-baseline gap-2 oswald">
    //             <span className="text-[var(--color-blood)] text-sm font-semibold tracking-wider">
    //               {show.date}
    //             </span>
    //             <span className="text-[var(--color-bone)] opacity-40 text-xs tracking-widest">
    //               {show.day}
    //             </span>
    //           </div>

    //           <div className="oswald tracking-wide text-[var(--color-bone)] opacity-80 group-hover:opacity-100 transition-opacity">
    //             {show.venue}
    //             <span className="opacity-40 mx-2">—</span>
    //             <span className="opacity-50">{show.time}</span>
    //           </div>

    //           <div 
    //             className="hidden md:block text-right oswald text-sm tracking-wider text-[var(--color-bone)] opacity-50 group-hover:opacity-70 transition-opacity"
    //           >
    //             {show.location}
    //           </div>
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </section>
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