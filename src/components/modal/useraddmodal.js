import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const UserAddModal = () => {
  const modal = useRef();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [user_type, setUserType] = useState("");
  const [address, setAddress] = useState("");

  const [user_types, setUserTypes] = useState([
    { "o'qituvchi": "O'qituvchi" },
    { talaba: "Talaba" },
    { xodim: "Xodim" },
    { boshqa: "Boshqa" },
  ]);
  const [user_orders, setUserOrders] = useState("");
  const [courseSelect, setCourseSelect] = useState([]);
  const [groupSelect, setGroupSelect] = useState([]);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setMiddleName("");
    setCourse("");
    setGroup("");
    // Reset other state variables as needed
    setUserOrders(""); // Reset user_orders to 0 or an initial value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://hidoya.pythonanywhere.com/api/v1/users/",
        {
          first_name: first_name,
          last_name: last_name,
          middle_name: middle_name,
          course: course,
          group: group,
          user_type: user_type,
          user_orders: user_orders,
        }
      );
      console.log("POST request sent!", response.data);
      resetForm();
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  const closeModal = () => {
    if (modal.current) {
      modal.current.close();
    }
  };

  const fetchSelect = () => {
    axios
      .get("https://hidoya.pythonanywhere.com/api/v1/course/")
      .then((res) => {
        // console.log(res.data);
        setCourseSelect(res.data);
      });
  };

  useEffect(() => {
    fetchSelect();
    console.log(course);
  }, [course]);

  const grupSelect = () => {
    axios
      .get("https://hidoya.pythonanywhere.com/api/v1/groups/")
      .then((res) => {
        // console.log(res.data);
        setGroupSelect(res.data);
      });
  };

  useEffect(() => {
    grupSelect();
    console.log(course);
  }, [course]);

  return (
    <>
      <button
        onClick={() => modal.current.showModal()}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Qo'shish
      </button>
      <dialog ref={modal}>
        <div className="p-6 bg-gray-400">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <div>
                <label
                  // htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Anvar"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="pl-4">
                <label
                  // htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Alimov"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                // htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                middle name
              </label>
              <input
                type="text"
                name="middle_name"
                id="middle_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Alimov"
                value={middle_name}
                onChange={(e) => setMiddleName(e.target.value)}
                required
              />
            </div>

          <div className="flex justify-between">
            <div className="mt-2 w-1/2">
              <label
                // htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                course
              </label>
              <select
                name="course"
                id="course"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setCourse(e.target.value)}
              >
                {courseSelect &&
                  courseSelect.map((el, index) => {
                    return (
                      <option key={index} value={el.id}>
                        {el.title}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mt-2 pl-4 w-1/2">
              <label
                // htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                group
              </label>
              <select
                name="course"
                id="course"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setGroup(e.target.value)}
              >
                {groupSelect &&
                  groupSelect.map((el, index) => {
                    return (
                      <option key={index} value={el.id}>
                        {el.title}
                      </option>
                    );
                  })}
              </select>
            </div>

            </div>

            <div>
              <label
                // htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Anvar"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>


            <div className="flex">


            <div className="mt-2">
              <label
                // htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                user_type
              </label>
              <select
                name="user_type"
                id="user_type"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                style={{width: "215px"}}
                required
                onChange={(e) => setUserType(e.target.value)}
              >
                {user_types &&
                  user_types?.map((el, index) => {
                    const userTypeKey = Object.keys(el)[0];
                    const userTypeValue = el[userTypeKey];
                    return (
                      <option key={index} value={userTypeKey}>
                        {userTypeValue}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mt-2 pl-4">
              <label
                // htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                user_orders
              </label>
              <input
                type="text"
                name="user_orders"
                id="user_orders"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Alimov"
                value={user_orders}
                onChange={(e) => setUserOrders(e.target.value)}
                required
              />
            </div>

            </div>

            {/* <select name="" id="">
                  {courseSelect &&
                    courseSelect.map((el, index) => {
                      return (
                        <option key={index} value={el.id}>
                          {el.title}
                        </option>
                      );
                    })}
                </select> */}

            <div className="mt-5">
              <button
                onClick={closeModal}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-3"
              >
                Jo'natish
              </button>
              <button
                onClick={closeModal}
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-3 ml-6"
              >
                Yopish
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserAddModal;
