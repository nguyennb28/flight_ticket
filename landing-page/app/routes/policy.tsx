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
          <div className="relative -mx-4 px-4 flex items-start justify-between">
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
                  <p className="mt-5 pt-5 border-dashed border-t border-gray-300 dark:border-white">
                    <b className="text-red-500">Lưu ý Cộng đồng:</b> Đây là
                    trang web <b className="italic">PHI LỢI NHUẬN</b>, được xây
                    dựng và duy trì nhằm mục đích phục vụ thông tin cộng đồng.
                    Mọi dữ liệu về chuyến bay được hiển thị trên trang này chỉ
                    mang tính chất THAM KHẢO. Để có thông tin chính xác và cập
                    nhật nhất, Quý khách vui lòng liên hệ trực tiếp với hãng
                    hàng không hoặc Cảng hàng không.
                  </p>
                  <p className="mt-5 pt-5 border-t border-dashed border-gray-300 dark:border-white">
                    Chúng tôi cam kết bảo vệ thông tin cá nhân và đảm bảo trải
                    nghiệm an toàn, minh bạch cho người dùng khi truy cập và sử
                    dụng dịch vụ thông tin chuyến bay tại đây.
                  </p>
                </div>
                {/* A. Vietnam */}
                <div className=" py-10 text-dark dark:text-white" id="vietnamese-section-two">
                  <h2 className="font-semibold text-2xl uppercase text-black dark:text-white mb-5">
                    a. chính sách quyền riêng tư
                  </h2>
                  {/* first */}
                  <div className="mb-5">
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      1. Thông tin chúng tôi thu nhập
                    </h3>
                    <p className="mb-5">
                      Vì trang web <b>www.catbi.vn</b> chủ yếu là cung cấp thông
                      tin (lịch bay, trạng thái chuyến bay), chúng tôi thu thập
                      thông tin người dùng ở mức tối thiểu, chủ yếu để cải thiện
                      chất lượng dịch vụ và trải nghiệm người dùng:
                    </p>
                    <ul className="list-disc px-10">
                      <li className="mb-2">
                        <b>Thông tin tự động:</b> Địa chỉ IP, loại trình duyệt,
                        hệ điều hành, thời gian truy cập, các trang đã xem, thời
                        gian lưu lại trên trang (Thông qua Cookies và các công
                        cụ phân tích khác).
                      </li>
                      <li className="mb-2">
                        <b>Thông tin khi tương tác:</b> Nội dung bạn gửi qua các
                        biểu mẫu liên hệ, phản hồi, hoặc yêu cầu hỗ trợ (nếu
                        có).
                      </li>
                    </ul>
                    <p className="mt-5">
                      <b>Lưu ý:</b> Chúng tôi{" "}
                      <b className="text-red-500">KHÔNG</b> thu thập các thông
                      tin cá nhân nhạy cảm như họ tên đầy đủ, số điện thoại,
                      email, số căn cước công dân, thông tin thanh toán, hoặc
                      bất kỳ dữ liệu cá nhân nào liên quan đến việc đặt vé máy
                      bay/khách sạn trên trang web này
                    </p>
                  </div>
                  {/* second */}
                  <div className="mb-5">
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      2. mục đích sử dụng thông tin
                    </h3>
                    <p className="mb-5">
                      Chúng tôi sử dụng thông tin thu thập được với các mục đích
                      sau:
                    </p>
                    <ul className="list-disc px-10">
                      <li className="mb-2">
                        <b>Vận hành và cải tiến:</b>
                        Duy trì hoạt động ổn định của trang web, phân tích lưu
                        lượng truy cập để cải thiện giao diện, nội dung và tốc
                        độ tải trang.
                      </li>
                      <li className="mb-2">
                        <b>An ninh:</b> Phát hiện và ngăn chặn các hoạt động
                        truy cập trái phép hoặc độc hại.
                      </li>
                      <li className="mb-2">
                        <b>Hỗ trợ:</b> Phản hồi các yêu cầu, câu hỏi của Quý
                        khách (nếu Quý khách có cung cấp thông tin liên hệ).
                      </li>
                      <li className="mb-2">
                        <b>Thống kê:</b> Tạo báo cáo tổng hợp không định danh về
                        xu hướng sử dụng để tối ưu hóa dịch vụ.
                      </li>
                    </ul>
                  </div>
                  {/* third */}
                  <div className="mb-5 text-dark dark:text-white">
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      3. chia sẻ thông tin
                    </h3>
                    <p className="mb-5">
                      Chúng tôi cam kết <b className="text-red-500">KHÔNG</b>{" "}
                      bán, trao đổi hoặc tiết lộ thông tin cá nhân của Quý khách
                      cho bên thứ ba, ngoại trừ các trường hợp sau:
                    </p>
                    <ul className="list-disc px-10">
                      <li className="mb-2">
                        Khi có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm
                        quyền theo quy định của pháp luật Việt Nam.
                      </li>
                      <li className="mb-2">
                        Với các nhà cung cấp dịch vụ phân tích web (ví dụ:
                        Google Analytics) chỉ nhằm mục đích thống kê, với điều
                        kiện họ cam kết bảo mật thông tin tương đương.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* B. Vietnam */}
                <div
                  className=" py-10 w-full text-dark dark:text-white border-t border-dashed border-gray-300 dark:border-white"
                  id="vietnamese-section-three"
                >
                  <h2 className="font-semibold text-2xl uppercase mb-5">
                    b. cài đặt cookies
                  </h2>
                  <p className="mb-5">
                    Cookies là các tệp văn bản nhỏ được lưu trữ trên thiết bị
                    của Quý khách khi truy cập trang web. Chúng giúp chúng tôi
                    nhận diện Quý khách ở lần truy cập tiếp theo và nâng cao
                    trải nghiệm người dùng.
                  </p>
                  {/* first of section three  */}
                  <div>
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      1. các loại cookies chúng tôi sử dụng
                    </h3>
                    <ul className="list-disc px-10">
                      <li className="mb-2">
                        <b>Cookies thiết yếu:</b>
                        Cần thiết cho các chức năng cơ bản của trang web (ví dụ:
                        ghi nhớ sở thích hiển thị). Không thể tắt.
                      </li>
                      <li className="mb-2">
                        <b>Cookies hiệu suất/phân tích:</b>
                        Giúp chúng tôi theo dõi cách người dùng tương tác với
                        trang web, từ đó cải thiện hiệu suất.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      2. Quản lý Cookies
                    </h3>
                    <p className="mb-2">
                      Quý khách có toàn quyền chấp nhận hoặc từ chối sử dụng
                      Cookies (trừ Cookies thiết yếu).
                    </p>
                    <ul className="list-disc px-10">
                      <li className="mb-2">
                        <b>Thay đổi trong Trình duyệt:</b>
                        Hầu hết các trình duyệt web cho phép Quý khách kiểm soát
                        Cookies thông qua cài đặt của trình duyệt (thường nằm
                        trong mục "Tùy chọn", "Cài đặt" hoặc "Công cụ").
                      </li>
                      <li className="mb-2">
                        <b>Lưu ý:</b>
                        Nếu Quý khách từ chối Cookies, một số chức năng của
                        trang web có thể không hoạt động tối ưu.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* C. Vietnam */}
                <div
                  className=" py-10 text-dark dark:text-white border-t border-dashed border-gray-300 dark:border-white"
                  id="vietnamese-section-four"
                >
                  <h2 className="font-semibold text-2xl uppercase text-black dark:text-white mb-5">
                    c. các điều khoản khác
                  </h2>
                  {/* first - section of C */}
                  <div className="mb-5">
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      1. liên kết ngoài
                    </h3>
                    <p className="mb-2">
                      Trang web có thể chứa các liên kết đến các trang web khác
                      (ví dụ: trang của các hãng hàng không). Chính sách Quyền
                      riêng tư này chỉ áp dụng cho <b>www.catbi.vn</b>. Chúng
                      tôi khuyến nghị Quý khách đọc chính sách bảo mật của các
                      trang web bên thứ ba đó trước khi cung cấp thông tin.
                    </p>
                  </div>
                  {/* second - section of C */}
                  <div className="mb-5">
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      2. Thay đổi chính sách
                    </h3>
                    <p className="mb-2">
                      Chúng tôi có thể cập nhật hoặc sửa đổi Chính sách Quyền
                      riêng tư này theo thời gian. Mọi thay đổi sẽ được công bố
                      trên trang này và có hiệu lực ngay khi được đăng tải.
                    </p>
                  </div>
                  {/* third - section of C */}
                  <div className="mb-5">
                    <h3 className="mb-2 uppercase font-semibold text-xl">
                      3. Thông tin liên hệ
                    </h3>
                    <p className="mb-2">
                      Nếu Quý khách có bất kỳ câu hỏi hoặc quan ngại nào về
                      Chính sách Quyền riêng tư hoặc việc xử lý dữ liệu của
                      chúng tôi, vui lòng liên hệ qua:
                    </p>
                    <ul className="list-disc px-10">
                      <li className="mb-2">
                        <b>Địa chỉ Email hỗ trợ:</b> support@catbi.vn
                      </li>
                      <li className="mb-2">
                        <b>Số điện thoại hỗ trợ:</b> +84 941 894 354
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* SECTION ENGLISH */}
              <div className="hidden" id="english">
                {/* english section one */}
                <div id="english-section-one">
                  <h1 className="uppercase font-bold text-3xl">
                    2. english version
                  </h1>
                  <h2 className="uppercase font-semibold text-2xl mt-5">
                    SETTINGS AND PRIVACY
                  </h2>
                  <p>
                    Welcome to the <b>Settings and Privacy</b> page of{" "}
                    <b>
                      Cat Bi International Airport - Hai Phong (www.catbi.vn).
                    </b>
                  </p>
                  <p className="mt-5 pt-5 border-t border-dashed border-gray-300 dark:border-white">
                    <b className="text-red-500">Community Notice:</b> This is a
                    <b className="italic">NON-PROFIT</b> website, built and
                    maintained for <b>community information purposes.</b> All
                    flight data displayed on this page is for{" "}
                    <b>REFERENCE ONLY</b>. For the most accurate and up-to-date
                    information, please contact the airline or the Airport
                    Authority directly.
                  </p>
                  <p className="mt-5 pt-5 border-t border-dashed border-gray-300 dark:border-white">
                    We are committed to protecting your personal information and
                    ensuring a safe, transparent experience when you access and
                    use the flight information services provided here.
                  </p>
                </div>
                {/* english section two */}
                {/* english section three */}
                {/* english section four */}
                {/* english section five */}
              </div>
              {/* SECTION CHINESE */}
              <div className="hidden" id="china">
                {/* china section one */}
                {/* china section two */}
                {/* china section three */}
                {/* china section four */}
              </div>
               {/* SECTION KOREA */}
              <div className="hidden" id="korea">
                {/* china section one */}
                {/* china section two */}
                {/* china section three */}
                {/* china section four */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
