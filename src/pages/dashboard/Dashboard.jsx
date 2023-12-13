import "../dashboard/dashboard.scss";
import { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import {
  selectSensorData,
  selectSensorData2,
  selectSensorData3,
  selectSensorData4,
  selectSensorData5,
  selectSensorData6,
  selectSensorData7,
  selectSensorData8,
  selectSensorData9,
  selectSensorData10,
} from "../../redux/update/update.selector";
import Aside from "./Aside";
import Bside from "./BSide";

const generateColor = (sensorArray) => {
  const color = [];
  for (let index = 0; index < sensorArray.length; index++) {
    const element = parseInt(sensorArray[index].val);
    if (element > 0 && element <= 150) {
      color.push("#0063a8");
    } else if (element > 150 && element < 250) {
      color.push("#50C878");
    } else if (element > 250) {
      color.push("#F87171");
    } else {
      color.push("#00A36C");
    }
  }
  return color;
};

const Dashboard = () => {
  const [infoDiagram, setInfoDiagram] = useState([]);
  const [error, setError] = useState(false);

  const [info, setInfo] = useState([]);

  const getUpdateSensorData = useSelector(selectSensorData);
  const getUpdateSensorData2 = useSelector(selectSensorData2);
  const getUpdateSensorData3 = useSelector(selectSensorData3);
  const getUpdateSensorData4 = useSelector(selectSensorData4);
  const getUpdateSensorData5 = useSelector(selectSensorData5);
  const getUpdateSensorData6 = useSelector(selectSensorData6);
  const getUpdateSensorData7 = useSelector(selectSensorData7);
  const getUpdateSensorData8 = useSelector(selectSensorData8);
  const getUpdateSensorData9 = useSelector(selectSensorData9);
  const getUpdateSensorData10 = useSelector(selectSensorData10);

  //redux
  const [busbar1, setBusBar1] = useState([]);
  const [busbar2, setBusBar2] = useState([]);
  const [busbar3, setBusBar3] = useState([]);
  const [busbar4, setBusBar4] = useState([]);
  const [busbar5, setBusBar5] = useState([]);
  const [busbar6, setBusBar6] = useState([]);
  const [busbar7, setBusBar7] = useState([]);
  const [busbar8, setBusBar8] = useState([]);
  const [busbar9, setBusBar9] = useState([]);
  const [busbar10, setBusBar10] = useState([]);

  useEffect(() => {
    setBusBar1(getUpdateSensorData[0]);
    setBusBar2(getUpdateSensorData2[0]);
    setBusBar3(getUpdateSensorData3[0]);
    setBusBar4(getUpdateSensorData4[0]);
    setBusBar5(getUpdateSensorData5[0]);
    setBusBar6(getUpdateSensorData6[0]);
    setBusBar7(getUpdateSensorData7[0]);
    setBusBar8(getUpdateSensorData8[0]);
    setBusBar9(getUpdateSensorData9[0]);
    setBusBar10(getUpdateSensorData10[0]);
  }, [
    getUpdateSensorData,
    getUpdateSensorData2,
    getUpdateSensorData3,
    getUpdateSensorData4,
    getUpdateSensorData5,
    getUpdateSensorData6,
    getUpdateSensorData7,
    getUpdateSensorData8,
    getUpdateSensorData9,
    getUpdateSensorData10,
  ]);

  // console.log("BusBar1 : ", busbar1);
  // console.log("BusBar2 : ", busbar2);
  // console.log("BusBar3 : ", busbar3);
  // console.log("BusBar4 : ", busbar4);
  // console.log("BusBar5 : ", busbar5);
  // console.log("BusBar6 : ", busbar6);
  // console.log("BusBar7 : ", busbar7);
  // console.log("BusBar8 : ", busbar8);
  // console.log("BusBar9 : ", busbar9);
  // console.log("BusBar10 : ", busbar10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/sensor/updated");
        const infoVal = await response.json();
        setInfo(infoVal);
        setInfoDiagram(infoVal);
      } catch (error) {
        setError(error);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sensorArray = [];
  for (let index = 1; index <= 108; index++) {
    const sensor = `sensor${index}`;
    const sensorName = `Sensor ${index}`;
    const val = infoDiagram[0]?.[sensor];
    sensorArray.push({ sensorName, val });
  }

  const color = generateColor(sensorArray);

  return (
    <div className="dashboard">
      {/* 2d diagram */}
      <div className="container-diagram">
      {/* <div className="model">
      <img className="img" src={model} alt="model"/>
      </div> */}
        <span className="pot">
          <h1>POT NO. 1602</h1>
        </span>
        <div className="indicate">
          <div className="green">
            <div className="g_logo"></div>
          <p>low</p>
          </div>
              <div className="yellow">
              <div className="g_logo"></div>
              <p>normal</p>
              </div>
              <div className="red">
              <div className="g_logo"></div>
              <p>high</p>
              </div>
            </div>
        <div className="outer-frame">
          <div className="sidebar-frame-left">
            <div className="tap_side">
              <p>Tap End</p>
            </div>
          </div>
          <div className="frame">
            {/* container1 */}
            <div className="container1">
              <div className="a_side">
                <p>A Side</p>
              </div>
              <div className="bus_bar1">
                <p>BB1</p>
              </div>
              <div className="bus_bar2">
                <p>BB2</p>
              </div>
              <div className="bus_bar3">
                <p>BB3</p>
              </div>
              <div className="bus_bar4">
                <p>BB4</p>
              </div>
              <div className="bus_bar5">
                <p>BB5</p>
              </div>
              <div className="bus_bar6">
                <p>BB6</p>
              </div>
              <div className="bar1"></div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[0]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT1A1 </div>
                        <div className="value">
                          temperature: {busbar1.CBT1A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[1]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT1A2 </div>
                        <div className="value">
                          temperature: {busbar1.CBT1A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[2]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT2A1 </div>
                        <div className="value">
                          temperature: {busbar1.CBT2A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[3]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT2A2 </div>
                        <div className="value">
                          temperature: {busbar1.CBT2A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[4]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT3A1 </div>
                        <div className="value">
                          temperature: {busbar1.CBT3A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[5]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT3A2 </div>
                        <div className="value">
                          temperature: {busbar1.CBT3A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[6]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT4A1 </div>
                        <div className="value">
                          temperature: {busbar1.CBT4A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[7]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT4A2 </div>
                        <div className="value">
                          temperature: {busbar1.CBT4A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[8]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT5A1 </div>
                        <div className="value">
                          temperature: {busbar1.CBT5A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[9]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name"> CBT5A2 </div>
                        <div className="value">
                          temperature: {busbar1.CBT5A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[54]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT6A1
                        </div>
                        <div className="value">
                          temperature: {busbar1.CBT6A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[55]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT6A2
                        </div>
                        <div className="value">
                          temperature: {busbar1.CBT6A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[56]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT7A1
                        </div>
                        <div className="value">
                          temperature: {busbar1.CBT7A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[57]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT7A2
                        </div>
                        <div className="value">
                          temperature: {busbar1.CBT7A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[58]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT8A1
                        </div>
                        <div className="value">
                          temperature: {busbar2.CBT8A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[59]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT8A2
                        </div>
                        <div className="value">
                          temperature: {busbar2.CBT8A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[60]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT9A1
                        </div>
                        <div className="value">
                          temperature: {busbar2.CBT9A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[60]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT9A2
                        </div>
                        <div className="value">
                          temperature: {busbar2.CBT9A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[61]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT10A1
                        </div>
                        <div className="value">
                          temperature: {busbar2.CBT10A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[62]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT10A2
                        </div>
                        <div className="value">
                          temperature: {busbar2.CBT10A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[20]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT11A1
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT11A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[21]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT11A2
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT11A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[22]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT12A1
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT12A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[23]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT12A2
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT12A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[24]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT13A1
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT13A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[25]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT13A2
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT13A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[26]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT14A1
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT14A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[27]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT14A2
                        </div>
                        <div className="value">
                          temperature: {busbar3.CBT14A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[28]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT15A1
                        </div>
                        <div className="value">
                          temperature: {busbar4.CBT15A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[29]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT15A2
                        </div>
                        <div className="value">
                          temperature: {busbar4.CBT15A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[30]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT16A1
                        </div>
                        <div className="value">
                          temperature: {busbar4.CBT16A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[31]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT16A2
                        </div>
                        <div className="value">
                          temperature: {busbar4.CBT16A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[32]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                          CBT17A1
                        </div>
                        <div className="value">
                          temperature: {busbar5.CBT17A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[33]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT17A2
                        </div>
                        <div className="value">
                          temperature: {busbar5.CBT17A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[34]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT18A1
                        </div>
                        <div className="value">
                          temperature: {busbar5.CBT18A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[35]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT18A2
                        </div>
                        <div className="value">
                          temperature: {busbar5.CBT18A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[36]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT19A1
                        </div>
                        <div className="value">
                          temperature: {busbar5.CBT19A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[37]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT19A2
                        </div>
                        <div className="value">
                          temperature: {busbar5.CBT19A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[38]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT20A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT20A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[39]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT20A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT20A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[40]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT21A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT21A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[41]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT21A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT21A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[42]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT22A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT22A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[43]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT22A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT22A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[44]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT23A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT23A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[45]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT23A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT23A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[46]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT24A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT24A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[47]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT24A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT24A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[48]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT25A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT25A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[49]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT25A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT25A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[50]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT26A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT26A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[51]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT26A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT26A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[52]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT27A1
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT27A1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[53]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT27A2
                        </div>
                        <div className="value">
                          temperature: {busbar6.CBT27A2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
            </div>

            {/* number bar */}
            <div className="number_bar">
              <div className="number">
                <span>1</span>
                <span className="second">2</span>
                <span className="third">3</span>
                <span className="four">4</span>
                <span className="five">5</span>
                <span className="six">6</span>
                <span className="seven">7</span>
                <span className="eight">8</span>
                <span className="nine">9</span>
                <span className="ten">10</span>
                <span className="eleven">11</span>
                <span className="twelve">12</span>
                <span className="thirteen">13</span>
                <span className="fourteen">14</span>
                <span className="fifteen">15</span>
                <span className="sixteen">16</span>
                <span className="seventeen">17</span>
                <span className="eighteen">18</span>
                <span className="ninteen">19</span>
                <span className="twenty">20</span>
                <span className="twenty-one">21</span>
                <span className="twenty-two">22</span>
                <span className="twenty-three">23</span>
                <span className="twenty-four">24</span>
                <span className="twenty-five">25</span>
                <span className="twenty-six">26</span>
                <span className="twenty-seven">27</span>
              </div>
            </div>

            {/* container2 */}
            <div className="container2">
              <div className="b_side">
                <p>B Side</p>
              </div>
              <div className="bus_bar1">
                <p>BB7</p>
              </div>
              <div className="bus_bar2">
                <p>BB8</p>
              </div>
              <div className="bus_bar3">
                <p>BB9</p>
              </div>
              <div className="bus_bar4">
                <p>BB10</p>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[10]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT1B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT1B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[11]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT1B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT1B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[12]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT2B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT2B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[13]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT2B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT2B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[14]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT3B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT3B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[15]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT3B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT3B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[16]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT4B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT4B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[17]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT4B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT4B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[18]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT5B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT5B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[19]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT5B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT5B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[64]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT6B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT6B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[65]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT6B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT6B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[66]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT7B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT7B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[67]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT7B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT7B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[68]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT8B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT8B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[69]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT8B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT8B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[70]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT9B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT9B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[71]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT9B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT9B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[72]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT10B1
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT10B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[73]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT10B2
                        </div>
                        <div className="value">
                          temperature: {busbar7.CBT10B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[74]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT11B1
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT11B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[75]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT11B2
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT11B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[76]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT12B1
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT12B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[77]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT12B2
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT12B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[78]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT13B1
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT13B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[79]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT13B2
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT13B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[80]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT14B1
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT14B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[81]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT14B2
                        </div>
                        <div className="value">
                          temperature: {busbar8.CBT14B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[82]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT15B1
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT15B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[83]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                          CBT15B2
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT15B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[84]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT16B1
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT16B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[85]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT16B2
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT16B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[86]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT17B1
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT17B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[87]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT17B2
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT17B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[88]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT18B1
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT18B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[89]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT18B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT18B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[90]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT19B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT19B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[91]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT19B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT19B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[92]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT20B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT20B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[93]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT20B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT20B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[94]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT21B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT21B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[95]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT21B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT21B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[96]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT22B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT22B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[97]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT22B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT22B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[98]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT23B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT23B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[99]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT23B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT23B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[100]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT24B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT24B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[101]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT24B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT24B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[102]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT25B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT25B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[103]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT25B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT25B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[104]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT26B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT26B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[105]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT26B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT26B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg">
                <div className="line-left"></div>
                <div className="left">
                  <div
                    className="bar1"
                    style={{ backgroundColor: `${color[106]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT27B1
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT27B1} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="bar2"
                    style={{ backgroundColor: `${color[107]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                        CBT27B2
                        </div>
                        <div className="value">
                          temperature: {busbar10.CBT27B2} ℃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
            </div>
          </div>
          <div className="sidebar-frame-right">
            <div className="duct_side">
              <p>Duct End</p>
            </div>
          </div>
        </div>
      </div>

      {/* A Side & B Side */}
      <div className="bottom">
        <div className="aside">
          <Aside />
        </div>
        <div className="aside">
          <Bside />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
