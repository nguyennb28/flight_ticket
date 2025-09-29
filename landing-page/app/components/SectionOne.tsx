import FirstPlaneLandingPage from "../assets/images/plane_3.jpg";


const SectionOne = () => {
  return (
    <>
      <div className="relative bg-white pb-[50px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Nơi cập nhật thông tin chuyến bay một cách nhanh nhất, thuận
                  tiện nhất
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                  Với website của chúng tôi, các bạn có thể cập nhật thông tin
                  chuyến bay của sân bay Cát Bi, Hải Phòng.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="#tracker"
                      className="inline-flex items-center justify-center rounded-md shadow-xl bg-sky-500 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Bắt đầu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    // src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-image-01.png"
                    src={FirstPlaneLandingPage}
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-2xl shadow-2xl"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      `<circle cx="2.5" cy="2.5" r="2.5" fill="#3e73e5" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3e73e5" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3e73e5" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3e73e5" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3e73e5" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3e73e5" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3e73e5" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3e73e5" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3e73e5" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3e73e5" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3e73e5" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3e73e5" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3e73e5" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3e73e5" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3e73e5" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3e73e5" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3e73e5" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3e73e5" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3e73e5" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3e73e5" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3e73e5" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3e73e5" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3e73e5" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3e73e5" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3e73e5" />`
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
