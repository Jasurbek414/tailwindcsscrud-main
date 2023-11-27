import React, { useState, useEffect } from "react";
import axios from "axios";
import UserAddModal from "../../modal/useraddmodal";

export default function Dashboard() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://hidoya.pythonanywhere.com/api/v1/users/"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {

    fetchData();
  }, []);


  const deletefunk = async (id) => {
    try {
      const response = await axios.delete(`https://hidoya.pythonanywhere.com/api/v1/users/${id}`)
      fetchData()
    } catch (error) {
      
    }
  }

  return(
  <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <label for="table-search" className="sr-only">
      Search
    </label>
    <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
      <div className="w-full flex justify-between">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>

        <div>
          <UserAddModal/>
          
        </div>
      </div>
    </div>
    <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="filter-radio-example-1"
                type="checkbox"
                value=""
                name="filter-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            F. I
          </th>
          <th scope="col" className="px-6 py-3">
            Kursi
          </th>
          <th scope="col" className="px-6 py-3">
            Gruppasi
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>

          <th scope="col" className="px-6 py-3 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>



    {data.map((item, index) =>(




        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="filter-radio-example-1"
                type="checkbox"
                value=""
                name="filter-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.first_name}  {item.last_name}
          </th>
          <td className="px-6 py-4">{item.course ? item.course.title : 'N/A'}</td>
          <td className="px-6 py-4">{item.group ? item.group.title : 'N/A'}</td>
          <td className="px-6 py-4">Topshirilmagan</td>

          <td className="px-6 py-4">
            <div className="flex items-center justify-center">
              <div className="flex gap-1">
                <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button onClick={()=>deletefunk(item?.id)} className="flex p-2.5  bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
)}
