import React, { useState } from "react";
import FirstPlaneLandingPage from "../assets/images/plane_3.jpg";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
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
                      href="/#"
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

export default Hero;

const SingleImage = ({ href, imgSrc }: any) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo.svg"
                alt="logo"
                className="w-full dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                alt="logo"
                className="w-full hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Trang chủ</ListItem>
                  <ListItem NavLink="/#">Vé</ListItem>
                  <ListItem NavLink="/#">Về chúng tôi</ListItem>
                  <ListItem NavLink="/#">Liên hệ</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Đăng nhập
              </a>

              <a
                href="/#"
                className="rounded-lg bg-cyan-light px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, NavLink }: any) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
