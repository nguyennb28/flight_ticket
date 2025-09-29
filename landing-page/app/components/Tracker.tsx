import Table from "~/ui/Table";

const Tracker = () => {
  const header = [
    {
      vi: "Giờ bay",
      en: "SOBT",
    },
    {
      vi: "Dự kiến",
      en: "EOBT",
    },
    {
      vi: "Đến",
      en: "Destination",
    },
    {
      vi: "Hãng",
      en: "Airlines",
    },
    {
      vi: "Chuyến",
      en: "Flight",
    },
    {
      vi: "Quầy",
      en: "Counter",
    },
    {
      vi: "Cửa",
      en: "Gate",
    },
    {
      vi: "Ghi chú",
      en: "Remarks",
    },
  ];

  let datas = [];

  for (let i = 0; i <= 10; i++) {
    datas.push(["1", "2", "3", "4", "5", "6", "7", "8"]);
  }

  return (
    <>
      <div id="tracker" className="bg-white pb-[110px] dark:bg-dark">
        <div className="container">
          <div className="-mx-4">
            {/* Arrivals */}
            <Table
              header={header}
              records={datas}
              title="chuyến đến / arrivals"
              color_header="bg-red-800"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
