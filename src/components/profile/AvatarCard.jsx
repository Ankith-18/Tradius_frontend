import { useRef, useState } from "react";

export default function AvatarCard({ name, email }) {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);

  const initials = name
    ? name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
    : "U";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
      
      {/* Avatar */}
      <div className="relative group">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 
                          flex items-center justify-center text-3xl font-semibold text-gray-700">
            {initials}
          </div>
        )}

        {/* Hover overlay */}
        <button
          onClick={() => fileRef.current.click()}
          className="absolute inset-0 bg-black/40 rounded-full opacity-0 
                     group-hover:opacity-100 transition flex items-center justify-center text-white text-sm"
        >
          Change
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </div>

      {/* Info */}
      <h2 className="mt-4 font-semibold text-lg">{name || "Your Name"}</h2>
      <p className="text-sm text-gray-500">{email}</p>

      <span className="mt-3 px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
        USER
      </span>
    </div>
  );
}
