import Table from "~/ui/TableTracker";
import axiosInstance from "~/axiosInstance";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Tracker = () => {
  const header = [
    {
      vi: "Kế hoạch",
      en: "",
    },
    {
      vi: "Dự kiến",
      en: "",
    },
    {
      vi: "Đến từ",
      en: "",
    },
    {
      vi: "Chuyến bay",
      en: "",
    },
    {
      vi: "Phi cơ",
      en: "",
    },
    {
      vi: "Nhà ga",
      en: "",
    },
    {
      vi: "Tình trạng",
      en: "",
    },
  ];

  // State
  const [arrivals, setArrivals] = useState<any[]>([]);
  const [departures, setDepartures] = useState<any[]>([]);

  // Method
  /**
   *
   * Get flights include
   *    - airport, arrivals, departures
   *
   */
  const getFlights = async () => {
    try {
      const response = await axiosInstance.get("/flights/?nickname=VVCI");
      if (response.status == 200) {
        const { flight_arrivals } = response.data;
        setArrivals(flight_arrivals);
      }
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Thông báo",
        text: "Không thể lấy dữ liệu",
      });
    }
  };

  /**
   * Clean states
   */
  const cleanState = () => {
    setArrivals([]);
    setDepartures([]);
  };

  let datas = [];

  for (let i = 0; i <= 10; i++) {
    datas.push(["1", "2", "3", "4", "5", "6", "7"]);
  }

  useEffect(() => {
    cleanState();
    getFlights();
  }, []);

  return (
    <>
      <div id="tracker" className="bg-white pb-[110px] dark:bg-dark">
        <div className="container">
          <div className="-mx-4">
            {/* Arrivals */}
            {arrivals && (
              <Table
                header={header}
                records={arrivals}
                title="chuyến đến / arrivals"
                color_header="bg-red-800"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
