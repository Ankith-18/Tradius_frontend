import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION =================   */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trusted local services, <br />
              right at your doorstep
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Find verified plumbers, electricians, cleaners and more —
              reliable professionals you can trust.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Link
                to="/discover"
                className="bg-black text-white px-8 py-4 rounded-lg text-lg 
                           hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]
                           transition-all"
              >
                Find Services
              </Link>

              <button
                className="px-8 py-4 rounded-lg border text-lg 
                           hover:bg-gray-100 hover:scale-[1.02]
                           transition-all"
              >
                Become a Partner
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>⭐ 4.8/5 average rating</span>
              <span>•</span>
              <span>10,000+ bookings completed</span>
              <span>•</span>
              <span>Available in multiple cities</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
              alt="Home services professionals"
              className="w-full rounded-2xl shadow-lg"
            />
            <p className="text-xs text-gray-500 mt-2">
              Trusted by families across the city
            </p>
          </div>

        </div>
      </section>

{/* ================= HOW IT WORKS ================= */}
<section className="relative py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900">
        How Tradius works
      </h2>
      <p className="text-gray-600 mt-2">
        Book trusted professionals in just a few easy steps
      </p>
    </div>

    {/* Image Cards */}
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {[
        {
          title: "Choose your city",
          desc: "Find services available near you",
          image:
            "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
        },
        {
          title: "Pick a service",
          desc: "Verified professionals at transparent prices",
          image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        },
        {
          title: "Book instantly",
          desc: "Quick booking with secure payments",
          image:
            "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
        },
        {
          title: "Sit back & relax",
          desc: "Job done with 100% satisfaction",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"

        },
      ].map((item, index) => (
        <div
          key={index}
          className="min-w-[280px] md:min-w-[340px] h-[220px] relative
                     rounded-2xl overflow-hidden shadow-lg group"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover
                       group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t
                          from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 p-5 text-white">
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm text-gray-200 mt-1">
              {item.desc}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium">
              Explore →
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ================= POPULAR SERVICES ================= */}
     <section className="bg-gray-50 py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">
      Popular services
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
      {[
        {
          name: "Plumber",
          icon: "🔧",
          image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        },
        {
          name: "Electrician",
          icon: "💡",
          image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
        },
        {
          name: "Cleaning",
          icon: "🧹",
          image:
            "https://images.unsplash.com/photo-1598514982845-8d6c5d8e1b6f",
        },
        {
          name: "Carpenter",
          icon: "🪚",
          image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        },
        {
          name: "AC Repair",
          icon: "❄️",
          image:
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
        },
        {
          name: "Bathroom",
          icon: "🚿",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        },
      ].map(service => (
        <div
          key={service.name}
          className="bg-white rounded-2xl p-6 shadow-sm
                     hover:shadow-xl hover:-translate-y-1
                     transition-all"
        >
          {/* Small real image */}
          <div className="flex justify-center mb-4">
            <img
              src={service.image}
              alt={service.name}
              className="h-12 w-12 rounded-full object-cover shadow"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1581578731548-c64695cc6952";
              }}
            />
          </div>

          {/* Icon */}
          <div className="text-3xl mb-2">
            {service.icon}
          </div>

          {/* Name */}
          <p className="font-medium text-gray-900">
            {service.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= WHY TRADIUS ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why choose Tradius?
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 text-gray-700">
            <div className="p-6 bg-gray-50 rounded-xl">
              ✔ Verified professionals
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              ✔ Transparent pricing
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              ✔ Fast & secure booking
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black py-20">
        <div className="text-center text-white px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get things fixed today?
          </h2>
          <p className="text-gray-300 mb-10">
            Book trusted professionals in just a few clicks.
          </p>

          <Link
            to="/discover"
            className="bg-white text-black px-10 py-4 rounded-lg text-lg font-medium
                       hover:bg-gray-200 hover:scale-[1.03]
                       transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}


// import { Link } from "react-router-dom";

// export default function Landing() {
//   return (
//     <div className="bg-white">

//       {/* ================= HERO ================= */}
//       <section className="bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Trusted local services, <br /> right at your doorstep
//             </h1>

//             <p className="text-gray-600 mt-6 text-lg">
//               Verified professionals for plumbing, electrical, cleaning and more.
//             </p>

//             <div className="mt-10 flex gap-4">
//               <Link
//                 to="/discover"
//                 className="bg-black text-white px-8 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
//               >
//                 Find Services
//               </Link>

//               <button className="px-8 py-4 rounded-lg border text-lg hover:bg-gray-100">
//                 Become a Partner
//               </button>
//             </div>

//             <div className="mt-10 flex gap-4 text-sm text-gray-600">
//               <span>⭐ 4.8/5 rating</span>
//               <span>•</span>
//               <span>10,000+ bookings</span>
//               <span>•</span>
//               <span>15+ cities</span>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <img
//               src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
//               alt="Professionals"
//               className="rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//      {/* ================= SERVICES WE OFFER ================= */}
// <section className="py-24 bg-white">
//   <div className="max-w-6xl mx-auto px-6">
//     <h2 className="text-3xl font-bold mb-12 text-center">
//       Services we offer
//     </h2>

//     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//       {[
//         {
//           name: "Home Cleaning",
//           image:
//             "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
//         },
//         {
//           name: "Bathroom Cleaning",
//           image:
//             "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
//         },
//         {
//           name: "AC Repair",
//           image:
//             "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
//         },
//         {
//           name: "Electrician",
//           image:
//             "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
//         },
//         {
//           name: "Plumber",
//           image:
//             "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//         },
//         {
//           name: "Painting",
//           image:
//             "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887",
//         },
//       ].map(service => (
//         <div
//           key={service.name}
//           className="rounded-2xl overflow-hidden shadow-sm 
//                      hover:shadow-xl hover:-translate-y-1
//                      transition-all bg-white"
//         >
//           {/* Image */}
//           <img
//             src={service.image}
//             alt={service.name}
//             className="h-52 w-full object-cover"
//             onError={(e) => {
//               e.target.src =
//                 "https://images.unsplash.com/photo-1581578731548-c64695cc6952";
//             }}
//           />

//           {/* Title */}
//           <div className="p-5">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {service.name}
//             </h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//     {/* ================= HOW IT WORKS ================= */}
// <section className="relative py-24 bg-white">
//   <div className="max-w-6xl mx-auto px-6">

//     {/* Header */}
//     <div className="mb-12">
//       <h2 className="text-3xl font-bold text-gray-900">
//         How Tradius works
//       </h2>
//       <p className="text-gray-600 mt-2">
//         Book trusted professionals in just a few easy steps
//       </p>
//     </div>

//     {/* Horizontal Cards */}
//     <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
//       {[
//         {
//           title: "Choose your city",
//           desc: "Find services available near you",
//           image:
//             "https://images.unsplash.com/photo-1502920514313-52581002a659",
//         },
//         {
//           title: "Pick a service",
//           desc: "Verified professionals at transparent prices",
//           image:
//             "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
//         },
//         {
//           title: "Book instantly",
//           desc: "Quick booking with secure payments",
//           image:
//             "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
//         },
//         {
//           title: "Sit back & relax",
//           desc: "Job done with 100% satisfaction",
//           image:
//             "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//         },
//       ].map((item, index) => (
//         <div
//           key={index}
//           className="min-w-[280px] md:min-w-[340px] h-[220px]
//                      relative rounded-2xl overflow-hidden
//                      shadow-lg group"
//         >
//           {/* Image */}
//           <img
//             src={item.image}
//             alt={item.title}
//             className="absolute inset-0 w-full h-full object-cover
//                        group-hover:scale-105 transition-transform duration-500"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t
//                           from-black/70 via-black/30 to-transparent" />

//           {/* Text */}
//           <div className="absolute bottom-0 p-5 text-white">
//             <h3 className="text-lg font-semibold">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-200 mt-1">
//               {item.desc}
//             </p>

//             <div className="mt-3 text-sm font-medium">
//               Explore →
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//       {/* ================= TRUST ================= */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
//           <div>✔ Background verified professionals</div>
//           <div>✔ Transparent pricing</div>
//           <div>✔ 100% satisfaction guarantee</div>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-4 text-center gap-8">
//           <div><p className="text-3xl font-bold">10K+</p><p>Bookings</p></div>
//           <div><p className="text-3xl font-bold">500+</p><p>Professionals</p></div>
//           <div><p className="text-3xl font-bold">4.8★</p><p>Rating</p></div>
//           <div><p className="text-3xl font-bold">15+</p><p>Cities</p></div>
//         </div>
//       </section>

//       {/* ================= REVIEWS ================= */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-12 text-center">
//             What customers say
//           </h2>

//           <div className="grid sm:grid-cols-3 gap-8">
//             {["Great service!", "Very professional", "Highly recommended"].map(
//               review => (
//                 <div key={review} className="p-6 bg-gray-50 rounded-xl shadow-sm">
//                   ⭐⭐⭐⭐⭐
//                   <p className="mt-4">{review}</p>
//                   <p className="mt-2 text-sm text-gray-500">— Verified User</p>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ================= PARTNER CTA ================= */}
//       <section className="py-24 bg-gray-900 text-white">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold">
//               Are you a service professional?
//             </h2>
//             <p className="mt-4 text-gray-300">
//               Join Tradius and grow your business with thousands of customers.
//             </p>

//             <button className="mt-8 bg-white text-black px-8 py-4 rounded-lg">
//               Become a Partner
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
//             alt="Partner"
//             className="rounded-2xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="bg-black py-20 text-center text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Ready to book a service?
//         </h2>
//         <Link
//           to="/discover"
//           className="inline-block bg-white text-black px-10 py-4 rounded-lg text-lg"
//         >
//           Get Started
//         </Link>
//       </section>
//     </div>
//   );
// }
