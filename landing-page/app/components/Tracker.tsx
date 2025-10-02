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
  const [isSwitch, setIsSwitch] = useState<boolean>(false); //isSwitch to change between arrival and departure
  const [lastUpdate, setLastUpdate] = useState<string>("");

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
        const { flight_arrivals, current_time } = response.data;
        setArrivals(flight_arrivals);
        setLastUpdate(current_time);
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
    setLastUpdate("");
  };

  let datas = [];

  for (let i = 0; i <= 10; i++) {
    datas.push(["1", "2", "3", "4", "5", "6", "7"]);
  }

  useEffect(() => {
    cleanState();
    getFlights();
    let i = 0;
    const reGetFlights = setInterval(() => {
      getFlights();
      i++;
      console.log(i);
    }, 300000);

    return () => clearInterval(reGetFlights);
  }, []);

  return (
    <>
      <div id="tracker" className="bg-white pb-[110px] dark:bg-dark">
        <div className="container">
          <div className="-mx-4">
            {/* Arrivals */}
            {arrivals && !isSwitch && (
              <Table
                header={header}
                records={arrivals}
                title="chuyến đến / arrivals"
                color_header="bg-red-800"
                last_update={lastUpdate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
