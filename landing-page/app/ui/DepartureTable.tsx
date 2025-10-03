import { formatDateTimeUTC } from "~/utils/first_util";
const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
};

interface Props {
  header: any[];
  records: any[] | null;
  title: string | null;
  color_header: string | null;
  last_update: string | null;
}

const DepartureTable = ({
  header,
  records,
  title,
  color_header,
  last_update,
}: Props) => {
  return (
    <section className="bg-white dark:bg-dark py-10">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full ">
            <div className="max-w-full overflow-auto h-[650px] no-scrollbar">
              {title && last_update && (
                <div className="flex flex-col md:flex-row justify-between">
                  <h3 className="uppercase text-2xl font-semibold">{title}</h3>
                  <p className="text-2xl font-medium text-emerald-800 dark:text-emerald-300">
                    {`Lần cập nhật cuối cùng: ${formatDateTimeUTC(last_update)}`}
                  </p>
                </div>
              )}
              <table className="w-full table-auto overflow-auto relative">
                <thead
                  className={`text-center ${color_header ? color_header : "bg-blue-800"} sticky top-0`}
                >
                  <tr>
                    {header.map((elem, index) => (
                      <th className={TdStyle.ThStyle} key={index}>
                        {elem.vi} <br /> <span>{elem.en}</span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {records &&
                    records.map((record, index) => (
                      <tr key={index}>
                        {/* {Object.keys(record).map((elem: any, idx: any) => ( */}
                        <>
                          {/* Scheduled */}
                          <td className={TdStyle.TdStyle2}>
                            {record["time"]["scheduled"]["departure"]
                              ? record["time"]["scheduled"]["departure"]
                              : ""}
                          </td>
                          {/* Estimated */}
                          <td className={TdStyle.TdStyle}>
                            {record["time"]["estimated"]["departure"]
                              ? record["time"]["estimated"]["departure"]
                              : ""}
                          </td>
                          {/* Postion -> city (Go to) */}
                          <td className={TdStyle.TdStyle2}>
                            {record["airport"]["destination"]["position"]
                              ? record["airport"]["destination"]["position"]
                              : ""}
                          </td>
                          {/* Flight */}
                          <td className={TdStyle.TdStyle}>
                            <span>
                              {record["identification"]
                                ? record["identification"]
                                : ""}
                            </span>
                            <span>
                              {record["airline"]["name"] &&
                                ` - ${record["airline"]["name"]}`}
                            </span>
                          </td>
                          {/* Aircraft */}
                          <td className={TdStyle.TdStyle2}>
                            <span>
                              {record["aircraft"]["code"]
                                ? record["aircraft"]["code"]
                                : ""}
                            </span>
                            <span>{` ${record["aircraft"]["registraion"] ? record["aircraft"]["registraion"] : ""}`}</span>
                          </td>
                          {/* Terminal */}
                          <td className={TdStyle.TdStyle}>
                            {record["airport"]["destination"]["terminal"]
                              ? record["airport"]["destination"]["terminal"]
                              : ""}
                          </td>
                          {/* Status */}
                          <td className={TdStyle.TdStyle2}>
                            <span
                              className={`text-${record["status"]["color"]}-500`}
                            >
                              {record["status"]["text"]
                                ? record["status"]["text"]
                                : ""}
                            </span>
                          </td>
                        </>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartureTable;
