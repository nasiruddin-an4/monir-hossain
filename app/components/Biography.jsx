'use client';

export default function Biography() {
  return (
    <section className="bg-white dark:bg-black py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">About The Founder</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6 text-gray-900 dark:text-white leading-tight">
            A Visionary Leader <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-gray-200">
              Defining Global Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            "To empower people and organizations to reach their highest potential."
          </p>
        </div>

        {/* Profile Overview - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          {/* Image Side */}
          <div className="relative sticky top-32">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-zinc-900">
               {/* Decorative Elements */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full z-10"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-tr-full z-10"></div>
               
               {/* Placeholder for Profile Image */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-gray-400 dark:text-gray-600">
                  <svg className="w-20 h-20 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold tracking-widest uppercase opacity-70">Profile Image</span>
               </div>
            </div>
            {/* Name Card */}
            <div className="absolute -bottom-10 left-8 right-8 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Muhammad Monir Hossain</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Founder & CEO – Betopia Group</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-12 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-blue-600"></span> Profile Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Muhammad Monir Hossain is a visionary entrepreneur and global business leader from Bangladesh. Founder & CEO of <strong className="text-gray-900 dark:text-white">Betopia Group</strong>, a rapidly expanding international conglomerate with 4,000+ professionals worldwide. The group operates across IT, Fintech, Energy, Real Estate, and Education, driven by a purpose-led vision of empowerment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-blue-600"></span> Entrepreneurial Journey
              </h3>
              <div className="pl-4 border-l-2 border-gray-200 dark:border-zinc-800 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[21px] top-1 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white dark:ring-black"></span>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="block text-gray-900 dark:text-white mb-1">2013 - The Beginning</strong>
                    Started as a freelancer on oDesk and Elance. Despite setbacks, he remained steadfast in his belief in perseverance.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[21px] top-1 w-3 h-3 bg-purple-600 rounded-full ring-4 ring-white dark:ring-black"></span>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="block text-gray-900 dark:text-white mb-1">2014 - Founding Bdcalling IT</strong>
                    Founded Bdcalling IT Ltd., which has delivered 50,000+ projects across 47 countries, laying the foundation for Betopia Group.
                  </p>
                </div>
                <blockquote className="italic text-gray-500 border-l-4 border-gray-300 pl-4 py-2 my-4">
                  "Today’s challenges become tomorrow’s foundations for success."
                </blockquote>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                 <span className="w-8 h-px bg-blue-600"></span> Education & Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A strong advocate for lifelong learning, his credentials include:
              </p>
              <ul className="space-y-3">
                {[
                  "Senior Executive Leadership Program (SELP) – Cornell University",
                  "CXO Strategy Conclave – IBA, University of Dhaka",
                  "B.Sc. in CSE – Dhaka University of Engineering & Technology (DUET)",
                  "Diploma in Computer Technology – Dhaka Polytechnic Institute (DPI)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Impact Section */}
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 lg:p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-bl-full"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Betopia Group – A Global Enterprise</h3>
            <p className="text-gray-600 dark:text-gray-400">
              19+ specialized ventures across technology, fintech, energy, and more. Expanding operations in US, UK, Canada, Japan, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cloud & Managed Services", icon: "cloud" },
              { title: "Cybersecurity & Compliance", icon: "shield" },
              { title: "Data, AI & Analytics", icon: "chart" },
              { title: "B2B White-Label Tech", icon: "code" },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white dark:bg-black p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {/* Simple generic icon based on logic */}
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{pillar.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Personal Life */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-black border border-gray-100 dark:border-zinc-800 rounded-3xl p-8 lg:p-12 mb-20 shadow-xl shadow-gray-200/50 dark:shadow-none">
           <div>
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Leadership Partnership</h3>
             <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
               Mr. Hossain is supported by his wife, <strong className="text-gray-900 dark:text-white">Engineer Sabina Akter</strong>, Chairperson of Betopia Group. Together, they represent a modern, family-driven leadership model.
             </p>
             <blockquote className="pl-4 border-l-4 border-purple-500 italic text-lg text-gray-700 dark:text-gray-200">
               "Success is never a solo journey, true strength lies in walking forward together."
             </blockquote>
           </div>
           
           <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Values & Lifestyle</h3>
              <ul className="space-y-4">
                {[
                  "Strongly family-oriented and values-driven",
                  "Disciplined approach to health, meditation, and well-being",
                  "Passionate global traveler exploring diverse cultures",
                  "Commitment to innovation and team empowerment"
                ].map((val, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                     <span className="text-gray-600 dark:text-gray-300">{val}</span>
                   </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Vision Footer */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Long-Term Vision</h3>
           <p className="text-lg text-gray-600 dark:text-gray-400">
             Developing <strong>Betopia City</strong>, a smart city for innovation, and establishing Betopia Group as a world-class conglomerate.
           </p>
           <div className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full mt-4">
             "Nothing is impossible for those who dare to dream big."
           </div>
        </div>

      </div>
    </section>
  );
}
