import React from "react";
import "../reports/reports.scss";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import ReportTimePopup from "./ReportTimePopup";


function formatDate(timestamp) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}-${month}-${year}`;
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours < 12 ? 'AM' : 'PM';
  return `${hours % 12 || 12}:${minutes} ${ampm}`;
}

const Reports = () => {
  const [isReportOpentime, setReportIsOpentime] = useState(false);

  const [StartTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const [Full, setFull] = useState(["null"]);
  const [selectBusbar, setSelectBusbar] = useState("sensorModel6");

  // const [isBusBarClicked, setIsBusBarClicked] = useState(false);

  const [infoReport, setInfoReport] = useState([]);
  const [errorReport, setErrorReport] = useState();

  const [FullData, setFullData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://vedanta.xyma.live/sensor/getAllcollection";
      try {
        const response = await fetch(url);
        const infoVal = await response.json();
        setFull(infoVal);
      } catch (error) {
        setErrorReport(error);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const excludeKeys = ["id", "_id", "TIME", "createdAt", "updatedAt", "__v"];
    const resultArrays = [];
    Full.forEach(subarray => {
      if (Array.isArray(subarray)) {
        const resultArray = [];
        subarray.forEach(item => {
          const values = Object.values(item).filter((_, index) => !excludeKeys.includes(Object.keys(item)[index]));
          resultArray.push(...values);
        });
        resultArrays.push(resultArray);
        setFullData(resultArrays);
      } else {
        // Handle the case where the subarray is not an array (e.g., it's empty or not properly formatted)
        console.log("Skipping non-array subarray:", subarray);
      }
    });
  }, [Full]);

  useEffect(() => {
    fetchDataBusbar6();
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // }
  }, [StartTime, EndTime, selectBusbar]);

  // const fetchDataBusbar6 = async () => {
  //   try {
  //     var url;
  //   if (StartTime != null) {
  //     url = `https://vedanta.xyma.live/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=sensorModel6`;
  //   } else {
  //     url = `https://vedanta.xyma.live/sensor/getfullBackupsensorModel6`;
  //   }
  //     console.log(url);
  //     const response = await fetch(url);
  //     const infoVal = await response.json();
  //     setInfoReport(infoVal);
  //     // setIsBusBarClicked(false);
  //   } catch (error) {
  //     setErrorReport(error);
  //   }
  // };

  // const fetchDataBusbar6 = async () => {
  //   try {
  //     var url;
  //   if (StartTime != null) {
  //     url = `https://vedanta.xyma.live/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=sensorModel10`;
  //   } else {
  //     url = `https://vedanta.xyma.live/sensor/getfullBackupsensorModel6`;
  //   }
  //     console.log(url);
  //     const response = await fetch(url);
  //     const infoVal = await response.json();
  //     setInfoReport(infoVal);
  //     // setIsBusBarClicked(false);
  //   } catch (error) {
  //     setErrorReport(error);
  //   }
  // };

  const handleClick = (busbarNumber) => {
    const busbarString = `sensorModel${busbarNumber}`;
    setSelectBusbar(busbarString);
    fetchDataBusbar6(); // Trigger the API call immediately after setting the busbar.
    setTimeout(() => {
          handleDownload();
      }, 5000);
  };

  if (errorReport) {
    return <div>Error: {errorReport.message}</div>;
  }
  if (!infoReport) {
    return <div>Loading...</div>;
  }

  // for busbar
  const dataFull = [];
  for (let i = 0; i < infoReport.length; i++) {
    const data = [];
    for (const key in infoReport[0]) {
      if (
        key !== "_id" &&
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data.push(key);
      }
    }
    let temp = [];
    for (let j = 0; j < data.length; j++) {
      temp[j] = infoReport[i]?.[data[j]];
    }
    dataFull[i] = temp;
  }

  const cbtName = [];
  for (const key in infoReport[0]) {
    if (
      key !== "_id" &&
      key !== "id" &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "__v" &&
      key !== "TIME"
    ) {
      cbtName.push(key);
    }
  }
  const time = [];
  //Getting Date
  for (let k = 0; k < infoReport.length; k++) {
    time[k] = infoReport[k]?.TIME;
  }
  //Adding Date on End
  for (let l = 0; l < dataFull.length; l++) {
    const timestamp = time;
    dataFull[l][dataFull[l].length] = timestamp[l];
  }

  cbtName.push("TimeStamp"); //Add TimeStamp header

  const handleDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([cbtName, ...dataFull]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, "excel_data.xlsx");
  };

  const handleReportTime = (start, end, full) => {
    setStartTime(start);
    setEndTime(end);
    setFull(full);
  };

  const handleSwitchClick = (data) => {
    switch (data) {
      case 1:
        handleClick(1);
        break;
      case 2:
        handleClick(2);
        break;
      case 3:
        handleClick(3);
        break;
      case 4:
        handleClick(4);
        break;
      case 5:
        handleClick(5);
        break;
      case 6:
        handleClick(6);
        break;
      case 7:
        handleClick(7);
        break;
      case 8:
        handleClick(8);
        break;
      case 9:
        handleClick(9);
        break;
      case 10:
        handleClick(10);
        break;
      default:
        handleClick(6);
    }
  };

  const generateExcel = () => {
    const chunkedDataArrays = FullData.map((FullData) => {
      const chunkedData = [];
      for (let i = 0; i < 4; i++) {
        chunkedData.push(FullData.slice(i * 27, (i + 1) * 27));
      }
      // console.log("chukedData", chunkedData);
      return chunkedData;
    });

    const worksheetData = [];

    for (let j = 0; j < FullData.length; j++) {
      const chunkedData = chunkedDataArrays[j];
      worksheetData.push([
        "Date",
        "Time",
        "Side",
        ...Array.from({ length: 27 }, (_, i) => i + 1),
      ]);
      worksheetData.push(["", "", "", ...chunkedData[0]]);
      worksheetData.push(["", "", "A Side", ...chunkedData[1]]);
      worksheetData.push(["", "", "", ...chunkedData[2]]);
      worksheetData.push([
        '2023-11-30',
        '3:34 PM',
        // `${formatted[j].formattedDate}`,
        // `${formatted[j].formattedTime}`,
        "B Side",
        ...chunkedData[3],
      ]);
      worksheetData.push(["", "", ""]);
    }

    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    // console.log("ws", ws);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "vedanta.xlsx");
  };

  return (
    <>
    {infoReport.length !== 0 ? (
      <div className="report">
      <div className="container">
        <div className="head"  onClick={generateExcel}>
          <h1>Excel</h1>
        </div>
        <div className="aside">
          <div className="name_a">
            <span>A Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(1);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 1
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(2);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 2
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(3);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 3
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(4);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 4
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(5);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 5
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(6);
              // setIsBusBarClicked(true);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 1000);
            }}
          >
            BusBar 6
          </div>
        </div>
      
        <div className="bside">
          <div className="name_b">
            <span>B Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(7);
            //   setTimeout(() => {
            //     handleDownload();
            // }, 3000);
            }}
          >
            BusBar 7
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(8);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 8
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleSwitchClick(9);
              // handleDownload();
              setTimeout(() => {
                handleDownload();
            }, 3000);
            }}
          >
            BusBar 9
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              // setIsBusBarClicked(true);
              handleSwitchClick(10);
            //   setTimeout(() => {
            //     handleDownload();
            // }, 5000);
            }}
          >
            BusBar 10
          </div>
        </div>
      </div>
      <ReportTimePopup
        openReportTime={isReportOpentime}
        closeReportTime={() => setReportIsOpentime(false)}
        onDataReportReceived={handleReportTime}
      />
      </div>
    ) : (
      <div className="overlay-graph">
        <div className="load">
          <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Reports;
