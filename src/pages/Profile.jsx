import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { STATE_AREA_MAP } from "../utils/locations";

export default function Profile() {
  const { user } = useAuth();

  const states = Object.keys(STATE_AREA_MAP);

  const initials = user?.email?.charAt(0).toUpperCase() || "U";

  // ================= STATE LOGIC =================
  const [stateSearch, setStateSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  const filteredStates = states.filter((s) =>
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* ================= LEFT: IDENTITY CARD ================= */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-100">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 
                              flex items-center justify-center text-white text-4xl font-semibold shadow-md">
                {initials}
              </div>

              <button
                className="absolute bottom-0 right-0 bg-white border shadow-sm 
                           rounded-full p-2 text-xs hover:scale-105 transition"
              >
                ✏️
              </button>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              {user?.email?.split("@")[0] || "User"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {user?.email}
            </p>

            <span className="mt-3 inline-flex items-center gap-2 px-3 py-1 
                             rounded-full bg-gray-100 text-xs font-medium">
              USER
            </span>
          </div>

          <div className="my-6 border-t" />

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Phone</span>
              <span className="font-medium text-gray-800">Not set</span>
            </div>
            <div className="flex justify-between">
              <span>State</span>
              <span className="font-medium text-gray-800">
                {selectedState || "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Area</span>
              <span className="font-medium text-gray-800">
                {selectedArea || "—"}
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: PROFILE FORM ================= */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">
            Profile information
          </h1>
          <p className="text-gray-500 mt-1 mb-8">
            Keep your details up to date to get better service matches
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                placeholder="Enter your full name"
                className="mt-2 w-full px-4 py-3 rounded-xl border 
                           focus:ring-2 focus:ring-black focus:border-black 
                           transition shadow-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full px-4 py-3 rounded-xl border 
                           focus:ring-2 focus:ring-black focus:border-black 
                           transition shadow-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                disabled
                value={user?.email}
                className="mt-2 w-full px-4 py-3 rounded-xl border 
                           bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* ================= STATE SEARCH ================= */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                State
              </label>

              <input
                type="text"
                placeholder="Search state..."
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl border 
                           focus:ring-2 focus:ring-black transition"
              />

              {stateSearch && (
                <div className="mt-2 max-h-48 overflow-y-auto border rounded-xl bg-white shadow-sm z-10 relative">
                  {filteredStates.length > 0 ? (
                    filteredStates.map((state, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedState(state);
                          setStateSearch(state);
                          setAreas(STATE_AREA_MAP[state] || []);
                          setSelectedArea("");
                        }}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        {state}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      No state found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ================= AREA FILTER ================= */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Area
              </label>

              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                disabled={!selectedState}
                className="mt-2 w-full px-4 py-3 rounded-xl border 
                           focus:ring-2 focus:ring-black transition disabled:bg-gray-100"
              >
                <option>
                  {selectedState ? "Select area" : "Select state first"}
                </option>

                {areas.map((area, i) => (
                  <option key={i} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex justify-end">
            <button
              className="px-8 py-3 rounded-xl bg-black text-white text-sm font-medium
                         hover:scale-[1.02] hover:bg-gray-800 transition"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
