import React, { useEffect, useState } from 'react';
import { Select } from "antd";

import './dashboard.css';
import axios from '../../axios-config';
const Dashboard = () => {
    const [chatuser, setchatuser] = useState()
    const [ischatopen, setischatopen] = useState(false)
    const [messages, setmessages] = useState([])
    const [isFlipped, setIsFlipped] = useState(true);

    const handleFlip = () => {
        console.log(isFlipped)
        setIsFlipped(!isFlipped);
    };


    let [usersdata, setusersdata] = useState([])
    const openchat = (user) => {
        setischatopen(true)
        setchatuser(user)
        console.log(chatuser)

    }


    const getUsers = async (event) => {
          try {
            const response = await axios.post('http://127.0.0.1:8080/chat/get-users/',{
                name: event.target.value
              })
      
            if (response.status === 200) {


                
                console.log(response.data);
            } else {
              console.error('Login failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }



  
    const getusersdata = () => {
        setusersdata([
            {
                name: 'John',
                last_seen: '8:39',
                last_message: 'hello',
                profile: 'p1.jpg'
            }
            ,
            {
                name: 'ram ',
                last_seen: '3:30',
                last_message: 'hey',
                profile: 'p2.jpg'
            },
            {
                name: 'ravi  ',
                last_seen: '4:30',
                last_message: 'hi',
                profile: 'p2.jpg'
            }
        ]
        )

    };
    useEffect(() => getusersdata(), [])

    return (
        <>

            <div className='main'>
                <div className={`flip-card chats-container ${isFlipped ? 'flip-card-inner':' '} `}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front front">
                            <div>
                                <input type='search'></input>
                                <button className='add-btn' onClick={handleFlip}>Add</button>

                            </div>
                            {usersdata.map((user, index) => (
                                <>
                                    <div key={index} className='user-container' onClick={() => openchat(user)}>
                                        <div className='profilepicdiv'>
                                            <img src={user.profile} alt="Profile" />
                                        </div>
                                        <div className='user-profile'>
                                            <h2>{user.name}</h2>
                                        </div>

                                    </div>
                                    <hr></hr>
                                </>
                            ))}

                        </div>
                        <div className="flip-card-back back">
                            <div>
                                <Select>

                                </Select>
                                {/* <input type='search' onKeyUp={(event)=>getUsers(event)}></input> */}
                                <button onClick={handleFlip}> back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='chat-container'>
                    {chatuser?.name}
                </div>
                
            </div></>


    );


}


export default Dashboard;






// <Select
// className={`form-control   ${
//   touched?.jobDetails?.reportingManager &&
//   errors?.jobDetails?.reportingManager
//     ? "error-input"
//     : ""
// }`}
// showSearch
// allowClear
// labelInValue
// filterOption={false}
// onSearch={searchManager}
// placeholder="Search By Full Name OR ID"
// type="text"
// name="jobDetails.reportingManager"
// disabled={
//   values?.jobDetails?.company == ""
// }
// notFoundContent={
//   managerLoading ? (
//     <Spin size="small" />
//   ) : showElement && managerData.data && manager.length === 0 ? (
//     <div className="text-danger p-1 text-center">
//       No data found
//     </div>
//   ) : null
// }
// value={
//   values?.jobDetails?.reportingManager
//     ? { key: values?.jobDetails?.reportingManager }
//     : undefined
// }
// onChange={(event) => {
//   setFieldValue("jobDetails.reportingManager", event?.value);
//   setTimeout(() => { 
//   event?.value
//     ? manager?.map((mng) => {
//         if (mng?.employee_id === event?.value) {
//           setFieldValue("jobDetails.reportingManagerObj", {
//             employee_id: event.value,
//             full_name: mng?.full_name,
//             user_id: mng?.user_id,
//           });
//           return;
//         }
//       })
//     : setFieldValue("jobDetails.reportingManagerObj", "");
//   }, 0)
// }}
// onBlur={(event) => {
//   setFieldTouched(
//     "jobDetails.reportingManager",
//     event?.value
//   );
// }}
// >