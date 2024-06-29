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

  const [loading, setLoading] = useState();

  // const [isBusBarClicked, setIsBusBarClicked] = useState(false);           

  const [infoReport6, setInfoReport6] = useState([]);
  const [infoReport10, setInfoReport10] = useState([]);
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
    const fetchData = async () => {
      try {
        var url;
      if (StartTime != null) {
        url = `https://vedanta.xyma.live/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=sensorModel6`;
      } else {
        url = `https://vedanta.xyma.live/sensor/getfullBackupsensorModel6`;
      }
        console.log(url);
        const response = await fetch(url);
        const infoVal = await response.json();
        setInfoReport6(infoVal);
        // setIsBusBarClicked(false);
      //   setTimeout(() => {
      //     handleDownload6();
      // }, 3000);
      } catch (error) {
        setErrorReport(error);
      }
    };
    // const interval = setInterval(() => {
      fetchData();
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // }
  }, []);

  const fetchDataBusbar6 = async () => {
    try {
      var url;
    if (StartTime != null) {
      url = `https://vedanta.xyma.live/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=sensorModel6`;
    } else {
      url = `https://vedanta.xyma.live/sensor/getfullBackupsensorModel6`;
    }
      console.log(url);
      const response = await fetch(url);
      const infoVal = await response.json();
      setInfoReport6(infoVal);
      // setIsBusBarClicked(false);
    //   setTimeout(() => {
    //     handleDownload6();
    // }, 3000);
    const checkNotEmpty = () => {
      if (infoReport6.length !== 0) {
        handleDownload6();
      } else {
        setLoading(true);
        setTimeout(checkNotEmpty, 100); // Adjust the interval as needed
      }
    };
    // Start the polling
    checkNotEmpty();
    } catch (error) {
      setErrorReport(error);
    }
  };

  const fetchDataBusbar10 = async () => {
    try {
      var url;
    if (StartTime != null) {
      url = `https://vedanta.xyma.live/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=sensorModel10`;
    } else {
      url = `https://vedanta.xyma.live/sensor/getfullBackupsensorModel10`;
    }
      console.log(url);
      const response = await fetch(url);
      const infoVal = await response.json();
      setInfoReport10(infoVal);
      // setIsBusBarClicked(false);
    //   setTimeout(() => {
    //     handleDownload10();
    // }, 3000);
    console.log("lenght", infoReport10);
    const checkNotEmpty = () => {
      if (infoReport10.length !== 0) {
        handleDownload10();
      } else {
        setTimeout(checkNotEmpty, 100); // Adjust the interval as needed
      }
    };
    // Start the polling
    checkNotEmpty();
    } catch (error) {
      setErrorReport(error);
    }
    console.log("Button Clicked");
  };

  // const handleClick = (busbarNumber) => {
  //   const busbarString = `sensorModel${busbarNumber}`;
  //   setSelectBusbar(busbarString);
  //   fetchDataBusbar6(); // Trigger the API call immediately after setting the busbar.
  //   setTimeout(() => {
  //         handleDownload();
  //     }, 5000);
  // };

  if (errorReport) {
    return <div>Error: {errorReport.message}</div>;
  }

  // for busbar 6
  const dataFull6 = [];
  for (let i = 0; i < infoReport6.length; i++) {
    const data = [];
    for (const key in infoReport6[0]) {
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
      temp[j] = infoReport6[i]?.[data[j]];
    }
    dataFull6[i] = temp;
  }

  const cbtName6 = [];
  for (const key in infoReport6[0]) {
    if (
      key !== "_id" &&
      key !== "id" &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "__v" &&
      key !== "TIME"
    ) {
      cbtName6.push(key);
    }
  }
  const time6 = [];
  //Getting Date
  for (let k = 0; k < infoReport6.length; k++) {
    time6[k] = infoReport6[k]?.TIME;
  }
  //Adding Date on End
  for (let l = 0; l < dataFull6.length; l++) {
    const timestamp = time6;
    dataFull6[l][dataFull6[l].length] = timestamp[l];
  }

  cbtName6.push("TimeStamp"); //Add TimeStamp header

  const handleDownload6 = () => {
    setLoading(false)
    const worksheet = XLSX.utils.aoa_to_sheet([cbtName6, ...dataFull6]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, "excel_data.xlsx");
  };

  // for busbar 10
  const dataFull10 = [];
  for (let i = 0; i < infoReport10.length; i++) {
    const data = [];
    for (const key in infoReport10[0]) {
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
      temp[j] = infoReport10[i]?.[data[j]];
    }
    dataFull10[i] = temp;
  }

  const cbtName10 = [];
  for (const key in infoReport10[0]) {
    if (
      key !== "_id" &&
      key !== "id" &&
      key !== "createdAt" &&
      key !== "updatedAt" &&
      key !== "__v" &&
      key !== "TIME"
    ) {
      cbtName10.push(key);
    }
  }
  const time10 = [];
  //Getting Date
  for (let k = 0; k < infoReport10.length; k++) {
    time10[k] = infoReport10[k]?.TIME;
  }
  //Adding Date on End
  for (let l = 0; l < dataFull10.length; l++) {
    const timestamp = time10;
    dataFull10[l][dataFull10[l].length] = timestamp[l];
  }

  cbtName10.push("TimeStamp"); //Add TimeStamp header

  const handleDownload10 = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([cbtName10, ...dataFull10]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, "excel_data.xlsx");
  };

  const handleReportTime = (start, end, full) => {
    setStartTime(start);
    setEndTime(end);
    setFull(full);
  };

  // const handleSwitchClick = (data) => {
  //   switch (data) {
  //     case 1:
  //       handleClick(1);
  //       break;
  //     case 2:
  //       handleClick(2);
  //       break;
  //     case 3:
  //       handleClick(3);
  //       break;
  //     case 4:
  //       handleClick(4);
  //       break;
  //     case 5:
  //       handleClick(5);
  //       break;
  //     case 6:
  //       handleClick(6);
  //       break;
  //     case 7:
  //       handleClick(7);
  //       break;
  //     case 8:
  //       handleClick(8);
  //       break;
  //     case 9:
  //       handleClick(9);
  //       break;
  //     case 10:
  //       handleClick(10);
  //       break;
  //     default:
  //       handleClick(6);
  //   }
  // };

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
    {infoReport6.length !== 0 ? (
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
              // setReportIsOpentime(true);
              // handleSwitchClick(1);
              fetchDataBusbar6();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 1
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // handleSwitchClick(2);
              fetchDataBusbar6();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 2
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // handleSwitchClick(3);
              fetchDataBusbar6();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 3
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // handleSwitchClick(4);
              fetchDataBusbar6();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 4
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // handleSwitchClick(5);
              fetchDataBusbar6();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 5
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // handleSwitchClick(6);
              fetchDataBusbar6();
            //   setTimeout(() => {
            //     handleDownload();
            // }, 1000);
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
              // setReportIsOpentime(true);
              // handleSwitchClick(7);
              fetchDataBusbar10();
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
              // setReportIsOpentime(true);
              // handleSwitchClick(8);
              fetchDataBusbar10();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 8
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // handleSwitchClick(9);
              fetchDataBusbar10();
              // setTimeout(() => {
                // handleDownload();
            // }, 3000);
            }}
          >
            BusBar 9
          </div>
          <div
            className="btn"
            onClick={() => {
              // setReportIsOpentime(true);
              // setIsBusBarClicked(true);
              // handleSwitchClick(10);
              fetchDataBusbar10();
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
