import "../dashboard/dashboard.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const generateColorV2 = (sensor) => {
  const color = [];
  var data = removeKeysAndStore(sensor);
  for (let i = 0; i < data.length; i++) {
    const key = data[i];
    const element = sensor[key];
    if (element > 0 && element <= 150) {
      color.push("#0063a8");
    } else if (element > 150 && element < 250) {
      color.push("#50C878");
    } else if (element > 250) {
      color.push("#F87171");
    } else {
      color.push("#607274");
    }
  }
  return color;
}

const removeKeysAndStore = (data) => {
  // Define keys to be removed
  const keysToRemove = ["_id", "id", "TIME", "createdAt", "updatedAt", "__v"];
  // Remove specified keys and store the remaining keys in an array
  const remainingKeys = Object.keys(data)
    .filter(key => !keysToRemove.includes(key));
  return remainingKeys;
}

const Dashboard = () => {

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

  //color
  const [color_busbar1, setColor_BusBar1] = useState([]);
  const [color_busbar2, setColor_BusBar2] = useState([]);
  const [color_busbar3, setColor_BusBar3] = useState([]);
  const [color_busbar4, setColor_BusBar4] = useState([]);
  const [color_busbar5, setColor_BusBar5] = useState([]);
  const [color_busbar6, setColor_BusBar6] = useState([]);
  const [color_busbar7, setColor_BusBar7] = useState([]);
  const [color_busbar8, setColor_BusBar8] = useState([]);
  const [color_busbar9, setColor_BusBar9] = useState([]);
  const [color_busbar10, setColor_BusBar10] = useState([]);

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

  useEffect(() => {
    setColor_BusBar1(generateColorV2(busbar1));
    setColor_BusBar2(generateColorV2(busbar2));
    setColor_BusBar3(generateColorV2(busbar3));
    setColor_BusBar4(generateColorV2(busbar4));
    setColor_BusBar5(generateColorV2(busbar5));
    setColor_BusBar6(generateColorV2(busbar6));
    setColor_BusBar7(generateColorV2(busbar7));
    setColor_BusBar8(generateColorV2(busbar8));
    setColor_BusBar9(generateColorV2(busbar9));
    setColor_BusBar10(generateColorV2(busbar10));
  }, [busbar1, busbar2, busbar3, busbar4, busbar5, busbar6, busbar7, busbar8, busbar9, busbar10]);

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
          <div className="grey">
            <div className="g_logo"></div>
            <p>Non-active</p>
          </div>
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
                    style={{ backgroundColor: `${color_busbar1[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[7]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[8]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[9]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[10]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[11]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[12]}` }}
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
                    style={{ backgroundColor: `${color_busbar1[13]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar3[7]}` }}
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
                    style={{ backgroundColor: `${color_busbar4[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar4[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar2[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar5[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar5[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar5[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar5[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar5[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar5[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[7]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[8]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[9]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[10]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[11]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[12]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[13]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[14]}` }}
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
                    style={{ backgroundColor: `${color_busbar6[15]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[7]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[8]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[9]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[10]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[11]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[12]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[13]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[14]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[15]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[16]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[17]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[18]}` }}
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
                    style={{ backgroundColor: `${color_busbar7[19]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar8[7]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar9[7]}` }}
                  >
                    <div className="popup">
                      <div className="stick"></div>
                      <div className="flag">
                        <div className="name">
                          CBT18B2
                        </div>
                        <div className="value">
                          temperature: {busbar9.CBT18B2} ℃
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
                    style={{ backgroundColor: `${color_busbar10[0]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[1]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[2]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[3]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[4]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[5]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[6]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[7]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[8]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[9]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[10]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[11]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[12]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[13]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[14]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[15]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[16]}` }}
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
                    style={{ backgroundColor: `${color_busbar10[17]}` }}
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
