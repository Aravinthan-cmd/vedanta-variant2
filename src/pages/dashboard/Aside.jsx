import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectSensorData,
  selectSensorData2,
  selectSensorData3,
  selectSensorData4,
  selectSensorData5,
  selectSensorData6,
} from "../../redux/update/update.selector";

const Aside = () => {
  //redux
  const [busbar1, setBusBar1] = useState([]);
  const [busbar2, setBusBar2] = useState([]);
  const [busbar3, setBusBar3] = useState([]);
  const [busbar4, setBusBar4] = useState([]);
  const [busbar5, setBusBar5] = useState([]);
  const [busbar6, setBusBar6] = useState([]);

  const [value_busbar1, setValue_busbar1] = useState([]);
  const [value_busbar2, setValue_busbar2] = useState([]);
  const [value_busbar3, setValue_busbar3] = useState([]);
  const [value_busbar4, setValue_busbar4] = useState([]);
  const [value_busbar5, setValue_busbar5] = useState([]);
  const [value_busbar6, setValue_busbar6] = useState([]);

  const getUpdateSensorData = useSelector(selectSensorData);
  const getUpdateSensorData2 = useSelector(selectSensorData2);
  const getUpdateSensorData3 = useSelector(selectSensorData3);
  const getUpdateSensorData4 = useSelector(selectSensorData4);
  const getUpdateSensorData5 = useSelector(selectSensorData5);
  const getUpdateSensorData6 = useSelector(selectSensorData6);

  useEffect(() => {
    setBusBar1(getUpdateSensorData[0]);
    setBusBar2(getUpdateSensorData2[0]);
    setBusBar3(getUpdateSensorData3[0]);
    setBusBar4(getUpdateSensorData4[0]);
    setBusBar5(getUpdateSensorData5[0]);
    setBusBar6(getUpdateSensorData6[0]);
  }, [
    getUpdateSensorData,
    getUpdateSensorData2,
    getUpdateSensorData3,
    getUpdateSensorData4,
    getUpdateSensorData5,
    getUpdateSensorData6,
  ]);

  //busbar1
  useEffect(() => {
    const data_busbar1 = [];
    for (const key in busbar1) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar1.push(key);
      }
    }
    const asidebusbar1 = [];
    for (let index = 1; index <= data_busbar1.length - 1; index++) {
      const cbtname = data_busbar1[index];
      const sensorname = `sensor${index}`;
      const sensorval = busbar1[cbtname];
      asidebusbar1.push({ cbtname, sensorname, sensorval });
      setValue_busbar1(asidebusbar1);
    }
  }, [busbar1]);

  //busbar2
  useEffect(() => {
    const data_busbar2 = [];
    for (const key in busbar2) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar2.push(key);
      }
    }
    const asidebusbar2 = [];
    for (let index = 1; index <= data_busbar2.length - 1; index++) {
      const cbtname = data_busbar2[index];
      const sensorname = `sensor${index + 14}`;
      const sensorval = busbar2[cbtname];
      asidebusbar2.push({ cbtname, sensorname, sensorval });
      setValue_busbar2(asidebusbar2);
    }
  }, [busbar2]);

  //busbar 3
  useEffect(() => {
    const data_busbar3 = [];
    for (const key in busbar3) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar3.push(key);
      }
    }
    const asidebusbar3 = [];
    for (let index = 1; index <= data_busbar3.length - 1; index++) {
      const cbtname = data_busbar3[index];
      const sensorname = `sensor${index + 20}`;
      const sensorval = busbar3[cbtname];
      asidebusbar3.push({ cbtname, sensorname, sensorval });
      setValue_busbar3(asidebusbar3);
    }
  }, [busbar3]);

  //busbar 4
  useEffect(() => {
    const data_busbar4 = [];
    for (const key in busbar4) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar4.push(key);
      }
    }
    const asidebusbar4 = [];
    for (let index = 1; index <= data_busbar4.length - 1; index++) {
      const cbtname = data_busbar4[index];
      const sensorname = `sensor${index + 28}`;
      const sensorval = busbar4[cbtname];
      asidebusbar4.push({ cbtname, sensorname, sensorval });
      setValue_busbar4(asidebusbar4);
    }
  }, [busbar4]);

  //busbar 5
  useEffect(() => {
    const data_busbar5 = [];
    for (const key in busbar5) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar5.push(key);
      }
    }
    const asidebusbar5 = [];
    for (let index = 1; index <= data_busbar5.length - 1; index++) {
      const cbtname = data_busbar5[index];
      const sensorname = `sensor${index + 32}`;
      const sensorval = busbar5[cbtname];
      asidebusbar5.push({ cbtname, sensorname, sensorval });
      setValue_busbar5(asidebusbar5);
    }
  }, [busbar5]);

  //busbar 6
  useEffect(() => {
    const data_busbar6 = [];
    for (const key in busbar6) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar6.push(key);
      }
    }
    const asidebusbar6 = [];
    for (let index = 1; index <= data_busbar6.length - 1; index++) {
      const cbtname = data_busbar6[index];
      const sensorname = `sensor${index + 38}`;
      const sensorval = busbar6[cbtname];
      asidebusbar6.push({ cbtname, sensorname, sensorval });
      setValue_busbar6(asidebusbar6);
    }
  }, [busbar6]);

  return (
    <div className="box-content h-auto w-auto p-4 border-1 bg-slate-200 bg-blend-overlay my-8 rounded-xl media">
      <span className="text-base font-bold">A Side</span>

      {/* busbar1 */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              CBT Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Sensor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 overflow-x-auto">
          {value_busbar1.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.cbtname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorval} ℃
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* busbar2 */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              CBT Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Sensor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 overflow-x-auto">
          {value_busbar2.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.cbtname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorval} ℃
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* busbar3 */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              CBT Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Sensor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 overflow-x-auto">
          {value_busbar3.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.cbtname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorval} ℃
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* busbar4 */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              CBT Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Sensor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 overflow-x-auto">
          {value_busbar4.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.cbtname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorval} ℃
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* busbar5 */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              CBT Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Sensor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 overflow-x-auto">
          {value_busbar5.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.cbtname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorval} ℃
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* busbar6 */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              CBT Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Sensor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 overflow-x-auto">
          {value_busbar6.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.cbtname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {item.sensorval} ℃
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Aside;
