import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

function Accounts() {
  const modalkurs = useRef();
  const modalguruh = useRef();
  const [course, setCourse] = useState([]);
  const [group, setGroup] = useState([]);
  const [coursetitle, setCourseTitle] = useState([]);
  const [grouptitle, setGroupTitle] = useState([]);

  async function fetchCourseData() {
    try {
      const response = await axios.get(
        "https://hidoya.pythonanywhere.com/api/v1/course/"
      );
      setCourse(response?.data);
    } catch (error) {
      console.log("Error fetching course data:", error);
    }
  }

  async function fetchGroupData() {
    try {
      const response = await axios.get(
        "https://hidoya.pythonanywhere.com/api/v1/groups/"
      );
      setGroup(response?.data);
    } catch (error) {
      console.log("Error fetching group data:", error);
    }
  }

  const handleCourse = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://hidoya.pythonanywhere.com/api/v1/course/",
        {
          title: coursetitle,
        }
      );
      console.log("POST request sent!", response.data);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  const handleGuruh = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://hidoya.pythonanywhere.com/api/v1/groups/",
        {
          title: grouptitle,
        }
      );
      console.log("POST request sent!", response.data);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  useEffect(() => {
    fetchCourseData();
    fetchGroupData();
  }, []);

  const deleteCourse = async (id) => {
    try {
      const response = await axios.delete(
        `https://hidoya.pythonanywhere.com/api/v1/course/${id}`
      );
      fetchCourseData(); // Refresh course data after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const deleteGroup = async (id) => {
    try {
      const response = await axios.delete(
        `https://hidoya.pythonanywhere.com/api/v1/groups/${id}`
      );
      fetchGroupData(); // Refresh course data after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div className="w-full flex justify-between">
            <div className="relative">
              <button
                onClick={() => modalkurs.current.showModal()}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Qo'shish
              </button>
            </div>

            <div>
              <button
                onClick={() => modalguruh.current.showModal()}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
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
                  Kurs
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {course &&
                course.length > 0 &&
                course?.map?.((courseItem) => (
                  <tr
                    key={courseItem.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="filter-radio-example-1"
                          type="checkbox"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {courseItem.title}
                    </th>
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
                          <button
                            onClick={() => deleteCourse(courseItem?.id)}
                            className="flex p-2.5  bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
                          >
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

          <table className=" ml-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                  Guruh
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {group &&
                group.length > 0 &&
                group.map((groupItem) => (
                  <tr
                    key={groupItem.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="filter-radio-example-1"
                          type="checkbox"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {groupItem.title}
                    </th>
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
                          <button
                            onClick={() => deleteGroup(groupItem?.id)}
                            className="flex p-2.5  bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
                          >
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

      <dialog ref={modalkurs}>
        <form onSubmit={handleCourse}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Anvar"
            value={coursetitle} // Use coursetitle here
            onChange={(e) => setCourseTitle(e.target.value)}
            required
          />

          <div className="flex">
            <button
              // onClick={() => modalguruh.current.close()}
              type="submit"
              className="block mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              onClick={() => modalguruh.current.close()}
              type="button"
              className=" text-white bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none mt-3 ml-6"
            >
              Yopish
            </button>
          </div>
        </form>
      </dialog>

      <dialog ref={modalguruh}>
        <form onSubmit={handleGuruh}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Anvar"
            value={grouptitle} // Use coursetitle here
            onChange={(e) => setGroupTitle(e.target.value)}
            required
          />

          <div className="flex">
            <button
              onClick={() => modalkurs.current.close()}
              type="submit"
              className="block mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              onClick={() => modalkurs.current.close()}
              type="button"
              className="ml-3 text-white bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none mt-3 ml-6"
            >
              Yopish
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Accounts;
