import React from "react";

const members = [
  {
    name: "MOHAMED SALMAN FARIZ M",
    role: "President",
    phone: "+91 63803-93289",
    email: "salmanfarris2002@gmail.com",
  },
  {
    name: "CHOUMYA M",
    role: "Vice President",
    phone: "+91 89250-59696",
    email: "choumya0703@gmail.com",
  },
  {
    name: "MOHAMED AMEERDEEN S",
    role: "Vice President",
    phone: "+91 91593-55501",
    email: "ideenameer404@gmail.com",
  },
];

const Page = () => {
  return (
    <div
      id="contact"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-black p-4 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-sm text-gray-300 mb-1">{member.role}</p>
              <div className="flex justify-center items-center">
                {/* Phone Icon */}
                <svg
                  className="h-5 w-5 text-white mr-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <p className="text-xs text-gray-300 mr-2">{member.phone}</p>

                {/* Mail Icon */}
                <svg
                  className="h-5 w-5 text-white ml-1 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-xs text-gray-300">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
