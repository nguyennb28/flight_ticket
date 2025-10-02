import React, { useEffect } from "react";

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
}

const Table = ({ header, records, title, color_header }: Props) => {
  useEffect(() => {
    // if (records) {
    //   records.map((record, index) => {
    //     Object.keys(record).map((elem) => {
    //       console.log(record[elem]);
    //     });
    //   });
    // }
  }, []);

  return (
    <section className="bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              {title && (
                <h3 className="uppercase text-2xl font-semibold">{title}</h3>
              )}
              <table className="w-full table-auto">
                <thead
                  className={`text-center ${color_header ? color_header : "bg-blue-800"}`}
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
                        {Object.keys(record).map((elem: any, idx: any) => (
                          <>
                            {/* Scheduled -> arrival */}
                            <td className={TdStyle.TdStyle2}>
                              {record[elem]["time"]["scheduled"]["arrival"]}
                            </td>
                            {/* Estimated -> arrival */}
                            <td className={TdStyle.TdStyle}>
                              {record[elem]["time"]["estimated"]["arrival"]
                                ? record[elem]["time"]["estimated"]["arrival"]
                                : ""}
                            </td>
                            {/* origin -> name -> position -> region -> city */}
                            <td className={TdStyle.TdStyle2}>
                              {record[elem]["airport"]["origin"]["name"]}
                            </td>
                            <td className={TdStyle.TdStyle}>
                              {record[elem]["airline"] &&
                              record[elem]["identification"]
                                ? `${record[elem]["airline"]["name"]} - ${record[elem]["identification"]["number"]["default"]}`
                                : ""}
                            </td>
                            {/* aircraft */}
                            <td className={TdStyle.TdStyle2}>
                              {record[elem]["aircraft"]
                                ? `${record[elem]["aircraft"]["model"]["code"]} ${record[elem]["aircraft"]["registration"]}`
                                : ""}
                            </td>
                            {/* terminal */}
                            <td className={TdStyle.TdStyle}>
                              {record[elem]["airport"]
                                ? record[elem]["airport"]["origin"]["info"][
                                    "terminal"
                                  ]
                                : record[elem]["airport"]}
                            </td>
                            {/* status */}
                            <td
                              className={`border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`}
                            >
                              <span
                                className={`text-${record[elem]["status"]["generic"]["status"]["color"]}`}
                              >
                                {record[elem]["status"]["text"]}
                              </span>
                            </td>
                          </>
                        ))}
                      </tr>
                    ))}
                  {/* <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>.com</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                    <td className={TdStyle.TdStyle}>$75.00</td>
                    <td className={TdStyle.TdStyle2}>$5.00</td>
                    <td className={TdStyle.TdStyle}>$10.00</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href="/#" className={TdStyle.TdButton}>
                        Sign Up
                      </a>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
