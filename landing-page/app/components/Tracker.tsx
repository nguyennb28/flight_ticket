import axiosInstance from "~/axiosInstance";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPlaneArrival, FaPlaneDeparture, FaMap } from "react-icons/fa";
import ArrivalTable from "~/ui/ArrivalTable";
import DepartureTable from "~/ui/DepartureTable";
import MapAirPort from "~/ui/MapAirPort";

const Tracker = () => {
  const template_header = [
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
      vi: "Máy bay",
      en: "",
    },
    {
      vi: "Check-in terminal",
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
  const [isMap, setIsMap] = useState<boolean>(false);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [tableHeader, setTableHeader] = useState<any[]>(template_header);

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
        const { flight_arrivals, flight_departures, current_time } =
          response.data;
        setArrivals(flight_arrivals);
        setDepartures(flight_departures);
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
    }, 300000);

    return () => clearInterval(reGetFlights);
  }, []);

  useEffect(() => {
    if (isSwitch) {
      setTableHeader((prev) =>
        prev.map((item) => {
          if (item.vi == "Đến từ") {
            item = { ...item, vi: "Nơi đến" };
          }
          if (item.vi == "Check-in terminal") {
            item = { ...item, vi: "Check-out terminal" };
          }
          return item;
        })
      );
    } else {
      setTableHeader((prev) =>
        prev.map((item) => {
          if (item.vi == "Nơi đến") {
            item = { ...item, vi: "Đến từ" };
          }
          if (item.vi == "Check-out terminal") {
            item = { ...item, vi: "Check-in terminal" };
          }
          return item;
        })
      );
    }
  }, [isSwitch]);

  return (
    <>
      <div id="tracker" className="bg-white pb-[110px] dark:bg-dark">
        <div className="container">
          <div className="-mx-4">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between justify-items-center">
              <div className="w-full">
                <button
                  onClick={() => {
                    setIsSwitch(false);
                    setIsMap(false);
                  }}
                  className="block cursor-pointer p-10 w-full bg-red-800 text-white font-semibold text-2xl uppercase hover:bg-red-700"
                >
                  <div className="flex items-center justify-center">
                    <FaPlaneArrival size={40} />
                    <span>Chuyến đến</span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button
                  onClick={() => {
                    setIsSwitch(true);
                    setIsMap(false);
                  }}
                  className="block cursor-pointer p-10 w-full bg-blue-800 text-white font-semibold text-2xl uppercase hover:bg-blue-700"
                >
                  <div className="flex items-center justify-center">
                    <FaPlaneDeparture size={40} />
                    <span>Chuyến đi</span>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button
                  onClick={() => {
                    setIsMap(true);
                  }}
                  className="block cursor-pointer p-10 w-full bg-green-800 text-white font-semibold text-2xl uppercase hover:bg-green-700"
                >
                  <div className="flex items-center justify-center">
                    <FaMap size={40} />
                    <span>Bản đồ sân bay</span>
                  </div>
                </button>
              </div>
            </div>
            {/* Arrivals */}
            {arrivals && !isSwitch && !isMap && (
              <ArrivalTable
                header={tableHeader}
                records={arrivals}
                title="chuyến đến / arrivals"
                color_header="bg-red-800"
                last_update={lastUpdate}
              />
            )}
            {departures && isSwitch && !isMap && (
              <DepartureTable
                header={tableHeader}
                records={departures}
                title="nơi đến / departures"
                color_header="bg-blue-800"
                last_update={lastUpdate}
              />
            )}
            {isMap && <MapAirPort />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
