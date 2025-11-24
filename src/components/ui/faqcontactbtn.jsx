import { ChevronRightIcon } from "lucide-react";
export default function ContactCard() {
  return (
    <div className="w-[90%] max-w-[400px] h-60 mx-auto">
      <div className="bg-gradient-to-br from-[#0073EB] via-[#00C3FF] to-[#01FFFF] rounded-[2rem] px-3 py-2 shadow-xl">
        {/* Title */}
        <h3
          className="!text-[#0A1E42] text-xl text-center mb-3"
          style={{ fontFamily: "integral-cf-bold" }}
        >
          CONTACT US
        </h3>

        {/* Description */}
        <p className="!text-[#0A1E42] text-sm text-center mb-6 leading-relaxed">
          Have a question or a project in mind? We're here to help. Reach out to
          our team and let's start building solutions together.``
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="bg-[#09183E] text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-[#0d2656] transition-colors duration-200 shadow-lg"
            style={{ fontFamily: "tt-firs", fontWeight: 600 }}
          >
            Contact Us
            <div className="w-7 h-7 bg-[#D9D9D9] rounded-full flex items-center  justify-center">
              <ChevronRightIcon
                className=" text-[#0A1E42] "
                strokeWidth={2.5}
                size={20}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
