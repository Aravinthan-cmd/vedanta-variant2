import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {
  selectSensorData7,
  selectSensorData8,
  selectSensorData9,
  selectSensorData10,
} from '../../redux/update/update.selector';

const BSide = () => {
  //redux
  const [busbar7, setBusBar7] = useState([]);
  const [busbar8, setBusBar8] = useState([]);
  const [busbar9, setBusBar9] = useState([]);
  const [busbar10, setBusBar10] = useState([]);

  const [value_busbar7, setValue_busbar7] = useState([]);
  const [value_busbar8, setValue_busbar8] = useState([]);
  const [value_busbar9, setValue_busbar9] = useState([]);
  const [value_busbar10, setValue_busbar10] = useState([]);

  const getUpdateB_SensorData1 = useSelector(selectSensorData7);
  const getUpdateB_SensorData2 = useSelector(selectSensorData8);
  const getUpdateB_SensorData3 = useSelector(selectSensorData9);
  const getUpdateB_SensorData4 = useSelector(selectSensorData10);

  useEffect(() => {
    setBusBar7(getUpdateB_SensorData1[0]);
    setBusBar8(getUpdateB_SensorData2[0]);
    setBusBar9(getUpdateB_SensorData3[0]);
    setBusBar10(getUpdateB_SensorData4[0]);
  }, [
    getUpdateB_SensorData1,
    getUpdateB_SensorData2,
    getUpdateB_SensorData3,
    getUpdateB_SensorData4,
  ]);

  //busbar7
  useEffect(() => {
    const data_busbar7 = [];
    for (const key in busbar7) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar7.push(key);
      }
    }
    const asidebusbar7 = [];
    for (let index = 1; index <= data_busbar7.length - 1; index++) {
      const cbtname = data_busbar7[index];
      const sensorname = `sensor${index+54}`;
      const sensorval = busbar7[cbtname];
      asidebusbar7.push({ cbtname, sensorname, sensorval });
      setValue_busbar7(asidebusbar7);
    }
  }, [busbar7]);

  //busbar8
  useEffect(() => {
    const data_busbar8 = [];
    for (const key in busbar8) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar8.push(key);
      }
    }
    const asidebusbar8 = [];
    for (let index = 1; index <= data_busbar8.length - 1; index++) {
      const cbtname = data_busbar8[index];
      const sensorname = `sensor${index+74}`;
      const sensorval = busbar8[cbtname];
      asidebusbar8.push({ cbtname, sensorname, sensorval });
      setValue_busbar8(asidebusbar8);
    }
  }, [busbar8]);

  //busbar9
  useEffect(() => {
    const data_busbar9 = [];
    for (const key in busbar9) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar9.push(key);
      }
    }
    const asidebusbar9 = [];
    for (let index = 1; index <= data_busbar9.length - 1; index++) {
      const cbtname = data_busbar9[index];
      const sensorname = `sensor${index+82}`;
      const sensorval = busbar9[cbtname];
      asidebusbar9.push({ cbtname, sensorname, sensorval });
      setValue_busbar9(asidebusbar9);
    }
  }, [busbar9]);

  //busbar10
  useEffect(() => {
    const data_busbar10 = [];
    for (const key in busbar10) {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "__v" &&
        key !== "TIME"
      ) {
        data_busbar10.push(key);
      }
    }
    const asidebusbar10 = [];
    for (let index = 1; index <= data_busbar10.length - 1; index++) {
      const cbtname = data_busbar10[index];
      const sensorname = `sensor${index+90}`;
      const sensorval = busbar10[cbtname];
      asidebusbar10.push({ cbtname, sensorname, sensorval });
      setValue_busbar10(asidebusbar10);
    }
  }, [busbar10]);

  return (
    <div className="box-content h-auto w-auto p-4 border-1 bg-slate-200 bg-blend-overlay my-8 rounded-xl media">
      <span className="text-base font-bold">B Side</span>
      
      {/* busbar7 */}
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
          {value_busbar7.map((item, index) => (
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

      {/* busbar8 */}
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
          {value_busbar8.map((item, index) => (
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

      {/* busbar9 */}
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
          {value_busbar9.map((item, index) => (
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

      {/* busbar9 */}
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
          {value_busbar10.map((item, index) => (
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
}

export default BSide