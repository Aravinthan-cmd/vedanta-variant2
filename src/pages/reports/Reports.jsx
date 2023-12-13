import React from "react";
import "../reports/reports.scss";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import ReportTimePopup from "./ReportTimePopup";


function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
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
  const [selectBusbar, setSelectBusbar] = useState("sensorModel1");

  const [infoReport, setInfoReport] = useState([]);
  const [errorReport, setErrorReport] = useState();

  const [FullData, setFullData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:4000/sensor/getAllcollection";
      try {
        console.log(url);
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
    const excludeKeys = ["id", "_id", "createdAt", "updatedAt", "__v"];
const resultArrays = [];
Full.forEach(subarray => {
  if (Array.isArray(subarray)) {
    const resultArray = [];
    subarray.forEach(item => {
      const values = Object.values(item).filter((_, index) => !excludeKeys.includes(Object.keys(item)[index]));
      resultArray.push(...values);
    });
    resultArrays.push(resultArray);
    setFullData(resultArrays)
  } else {
    // Handle the case where the subarray is not an array (e.g., it's empty or not properly formatted)
    console.log("Skipping non-array subarray:", subarray);
  }
});
  }, [Full])

  useEffect(() => {
    const fetchData = async () => {
      var url;
      if (StartTime != null) {
        url = `http://localhost:4000/sensor/gettime?start=${StartTime}&end=${EndTime}&busbar=${selectBusbar}`;
      } else {
        url = `http://localhost:4000/sensor/getfull${selectBusbar}`;
      }
      try {
        console.log(url);
        const response = await fetch(url);
        const infoVal = await response.json();
        setInfoReport(infoVal);
      } catch (error) {
        setErrorReport(error);
      }
    };
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [StartTime, EndTime, selectBusbar]);

  console.log("FullData", FullData);

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

  const handleClick = (data) => {
    switch (data) {
      case 1:
        setSelectBusbar("sensorModel1");
        break;
      case 2:
        setSelectBusbar("sensorModel2");
        break;
      case 3:
        setSelectBusbar("sensorModel3");
        break;
      case 4:
        setSelectBusbar("sensorModel4");
        break;
      case 5:
        setSelectBusbar("sensorModel5");
        break;
      case 6:
        setSelectBusbar("sensorModel6");
        break;
      case 7:
        setSelectBusbar("sensorModel7");
        break;
      case 8:
        setSelectBusbar("sensorModel8");
        break;
      case 9:
        setSelectBusbar("sensorModel9");
        break;
      case 10:
        setSelectBusbar("sensorModel10");
        break;
      default:
        setSelectBusbar("sensorModel1");
    }
  };

  const dateandTime = [];
  for (let index = 0; index < FullData.length; index++) {
    var innerArray = FullData[index];
  if (innerArray && innerArray.length > 14) {
    dateandTime[index] = innerArray[14];
  }
  }
  const formatted = dateandTime.map(timestamp => ({
    formattedDate: formatDate(timestamp),
    formattedTime: formatTime(timestamp),
  }));

  console.log("formatted",formatted);

  const generateExcel = () => {
    const chunkedDataArrays = FullData.map((FullData) => {
      const chunkedData = [];
      for (let i = 0; i < 4; i++) {
        chunkedData.push(FullData.slice(i * 27, (i + 1) * 27));
      }
      console.log("chukedData",chunkedData);
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
        `${formatted[j].formattedDate}`,
        `${formatted[j].formattedTime}`,
        "B Side",
        ...chunkedData[3],
      ]);
      worksheetData.push(["", "", ""]);
    }

    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    console.log("ws",ws);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "vedanta.xlsx");
  };

  return (
    <div className="report">
      <div className="container">
        <div className="head">
          <h1 onClick={generateExcel}>Excel</h1>
        </div>
        <div className="aside">
          <div className="name_a">
            <span>A Side</span>
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(1);
              handleDownload();
            }}
          >
            BusBar 1
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(2);
              handleDownload();
            }}
          >
            BusBar 2
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(3);
              handleDownload();
            }}
          >
            BusBar 3
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(4);
              handleDownload();
            }}
          >
            BusBar 4
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(5);
              handleDownload();
            }}
          >
            BusBar 5
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(6);
              handleDownload();
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
              handleClick(7);
              handleDownload();
            }}
          >
            BusBar 7
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(8);
              handleDownload();
            }}
          >
            BusBar 8
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(9);
              handleDownload();
            }}
          >
            BusBar 9
          </div>
          <div
            className="btn"
            onClick={() => {
              setReportIsOpentime(true);
              handleClick(10);
              handleDownload();
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
  );
};

export default Reports;
