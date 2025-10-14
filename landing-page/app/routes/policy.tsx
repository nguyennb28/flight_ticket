import type { Route } from "./+types/home";
import VerticalMenu from "~/components/vertical-menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cài đặt & Quyền riêng tư" },
    { name: "Cài đặt & Quyền riêng tư", content: "Cài đặt & Quyền riêng tư" },
  ];
}

const Policy = () => {
  return (
    <>
      {/* <h1>Policy</h1> */}
      <div className="relative bg-white dark:bg-dark pb-[50px] pt-[120px] lg:pt-[200px]">
        <div className="container">
          <div className="relative -mx-4 px-4 flex items-start justify-start">
            <div className="sidebar">
              <VerticalMenu />
            </div>
            <div className="privacy-container ml-[100px] pt-1">
              <div className="" id="vietnamese">
                <div id="vietnamese-section-one">
                  <h1 className="uppercase font-bold text-3xl">
                    1. Phiên bản tiếng việt
                  </h1>
                  <h2 className="uppercase font-semibold text-2xl mt-5">
                    cài đặt và quyền riêng tư
                  </h2>
                  <p>
                    Chào mừng Quý khách đến với trang{" "}
                    <b>Cài đặt và Quyền riêng tư</b> của{" "}
                    <b>Sân bay Quốc tế Cát Bi - Hải Phòng (www.catbi.vn).</b>
                  </p>
                  <p className="mt-5 pt-5 border-dashed border-t border-black dark:border-white">
                    <b className="text-red-500">Lưu ý Cộng đồng:</b> Đây là
                    trang web <b className="italic">PHI LỢI NHUẬN</b>, được xây
                    dựng và duy trì nhằm mục đích phục vụ thông tin cộng đồng.
                    Mọi dữ liệu về chuyến bay được hiển thị trên trang này chỉ
                    mang tính chất THAM KHẢO. Để có thông tin chính xác và cập
                    nhật nhất, Quý khách vui lòng liên hệ trực tiếp với hãng
                    hàng không hoặc Cảng hàng không.
                  </p>
                  <p className="mt-5 pt-5 border-t border-dashed border-black dark:border-white">
                    Chúng tôi cam kết bảo vệ thông tin cá nhân và đảm bảo trải
                    nghiệm an toàn, minh bạch cho người dùng khi truy cập và sử
                    dụng dịch vụ thông tin chuyến bay tại đây.
                  </p>
                </div>
                <div className="mt-5" id="vietnamese-section-two">
                  <h2 className="font-semibold text-2xl uppercase text-black dark:text-white">a. chính sách quyền riêng tư</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
