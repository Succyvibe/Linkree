const Contact = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[960px] flex flex-col justify-center mx-auto items-center pt-[64px] pb-[96px] gap-[64px]">
      <div className="container w-[1280px] h-[800px] flex flex-row justify-center items-center px-[32px] gap-[64px]">
        {/* content wrapper */}
        <div className="h-full w-[1216px]  flex flex-col justify-center items-center">
          {/* Form Content */}

          <div className="w-[720px] h-[616px] min-h-[616px] flex flex-col items-center gap-[48px]">
            {/* Heading */}
            <div className="w-full h-[94px] flex flex-col items-start gap-5">
              <h1 className="text-[36px] font-[600] leading-10 text-[#101828]">
                Contact Me
              </h1>
              <p className="w-full font-[400] text-[20px] leading-8 text-[#475467]">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
              {/* ======================Form==================== */}
              <form className="w-[720px] flex flex-col items-start gap-8">
                {/* ============Name Box============ */}

                <div className="w-[720px] flex gap-4">
                  <div className="w-[50%] flex flex-col items-start gap-[6px] ">
                    <label className="text-gray-700 text-[14px] font-[500]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="flex flex-row items-center py-[10px]  px-[14px] gap-2 bg-white border border-[#D0D5DD] shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-[8px] w-full"
                    />
                  </div>
                  <div className="w-[50%] flex flex-col items-start gap-[6px] ">
                    <label className="text-gray-700 text-[14px] font-[500]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="flex flex-row items-center py-[10px]  px-[14px] gap-2 bg-white border border-[#D0D5DD] shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-[8px] w-full"
                    />
                  </div>
                </div>
                {/* ==========END==Name Box============ */}

                {/* ==========Email Box================== */}

                <div className="flex flex-col items-start gap-[6px] w-full">
                  <label className="text-gray-700 text-[14px] font-[500]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@email.com"
                    className="flex flex-row items-center py-[10px] px-[14px] gap-2 bg-white border border-[#D0D5DD] shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-[8px] w-full"
                  />
                </div>
                {/* ========End==Email Box================== */}
                {/* =========Message Box================== */}

                <div className="flex flex-col items-start gap-[6px] w-full">
                  <label className="text-gray-700 text-[14px] font-[500]">
                    Message
                  </label>
                  <textarea
                    type="email"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    className="flex flex-row items-center py-[12px] px-[14px] gap-2 bg-white border border-[#D0D5DD] shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-[8px] h-[132px] w-full text-gray-500"
                  />
                </div>
                {/* ========End==Message Box================== */}

                {/* ======================Check box ======================== */}
                <div className="w-full h-[24px] gap-3 flex items-start">
                  <div className="w-[20px] h-[22px] pt-[2px] flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <label className="text-gray-600 leading-6">
                    You agree to providing your data to Success who may contact
                    you.
                  </label>
                </div>
                {/* =========================== End Check box ================= */}

                {/* ==============Message btn=========================== */}

                <button className="w-full bg-blue-600 py-3 px-5 border border-blue-600 shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] rounded-[8px] text-white font-[600] leading-6">
                  Send message
                </button>

                {/* ===========END===Message btn=========================== */}
              </form>
              {/* =================END=====Form==================== */}
            </div>

            {/* Heading */}
          </div>

          {/* Form Content */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
