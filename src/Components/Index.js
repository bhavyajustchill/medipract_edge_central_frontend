// import React, { useEffect, useState } from 'react';
// import { Form, Input, Button, Row, Col, Table, Modal } from 'antd';
// import { EditOutlined } from '@ant-design/icons';
// import axios from 'axios';

// const YourFormComponent = () => {
//     const [data, setData] = useState([]);
//     const [form] = Form.useForm();
//     const [editMode, setEditMode] = useState(null);

//     const [clinic, setClinic] = useState("");
//     const [user, setUser] = useState("");  
//     const [connectionString, setConnectionString] = useState("");
//     const [password, setpassword] = useState(""); 

//     const getData = () => {
//         axios.get("https://653be25ad5d6790f5ec79710.mockapi.io/centralized-auth")
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     const handleAdd = (e) => {
//         e.preventDefault();
//         axios.post("https://653be25ad5d6790f5ec79710.mockapi.io/centralized-auth", {
//             clinic: clinic,
//             user: user,
//             connectionString: connectionString,
//             password: password,
//         })
//         .then(response => {
//             console.log("Data added successfully:", response.data);
//             getData(); 
//             form.resetFields();
//         })
//         .catch(error => {
//             console.error("Error adding data:", error);
//         });
//     }

//     const handleEditClick = (key) => {
//         setEditMode(key);
//     };

//     const handlePasswordEditFinish = (values, record) => {
//         setEditMode(null);
//     };


//     const onFinish = (values) => {
//         getData(); 
//         form.resetFields();
//     };

//     const handleViewNameClick = (columns) => {
//         Modal.info({
//             title: (<p>{columns.clinic}</p>),
//             content: (
//                 <div>
//                     <p>Admin: {columns.clinic}</p>
//                     <p>Super Admin: {columns.clinic}</p>
//                     <p>Doctor: {columns.clinic}</p>
//                     <p>Receptionist: {columns.clinic}</p>
//                 </div>
//             ),
//         });
//     };

//     const columns = [
//         {
//             title: 'Clinic',
//             dataIndex: 'clinic',
//             key: 'clinic',
//         },
//         {
//             title: 'User',
//             dataIndex: 'user',
//             key: 'user',
//         },
//         {
//             title: 'Connection String',
//             dataIndex: 'connectionString',
//             key: 'connectionString',
//         },
//         {
//             title: 'Password',
//             dataIndex: 'password',
//             key: 'password',
//             render: (text, record) => (
//                 <span>
//                     {editMode === record.key ? (
//                         <Form
//                             initialValues={{ password: text }}
//                             onFinish={(values) => handlePasswordEditFinish(values, record)}
//                         >
//                             <Form.Item
//                                 name="password"
//                                 rules={[{ required: true, message: 'Please enter the password' }]}
//                             >
//                                 <Input.Password />
//                             </Form.Item>
//                             <Button type="primary" htmlType="submit">
//                                 Save
//                             </Button>
//                         </Form>
//                     ) : (
//                         <span>{text}</span>
//                     )}
//                     <EditOutlined
//                         style={{ marginLeft: '8px', cursor: 'pointer' }}
//                         onClick={() => handleEditClick(record.key)}
//                     />
//                 </span>
//             ),
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_, record) => (
//                 <span>
//                     <Button onClick={() => handleViewNameClick(record)}>View</Button>
//                 </span>
//             ),
//         },
//     ];

//     return (
//         <>
//             <Form onFinish={onFinish} style={{ marginTop: '20px', marginLeft: '100px', marginRight: '100px' }}>
//                 <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }} justify="space-between">
//                     <Col xs={24} sm={12} md={12} lg={4} xl={5}>
//                     <Form.Item
//                             name="client"
//                             label="Client"
//                             rules={[{ required: true, message: 'Please enter the client name' }]}
//                         >
//                             <Input onChange={(e) => setClinic(e.target.value)} />
//                         </Form.Item>
//                     </Col>
//                     <Col xs={24} sm={12} md={12} lg={4} xl={4}>
//                         <Form.Item
//                             name="User"
//                             label="User"
//                             rules={[{ required: true, message: 'Please enter the user name' }]}
//                         >
//                             <Input onChange={(e) => setUser(e.target.value)} />
//                         </Form.Item>
//                     </Col>
//                     <Col xs={24} sm={12} md={12} lg={4} xl={6}>
//                         <Form.Item
//                             name="ConnectionString"
//                             label="Connection String"
//                             rules={[{ required: true, message: 'Please enter the connection string' }]}
//                         >
//                          <Input onChange={(e) => setConnectionString(e.target.value)} />
//                         </Form.Item>
//                     </Col>
//                     <Col xs={24} sm={12} md={12} lg={4} xl={5}>
//                         <Form.Item
//                             name="Password"
//                             label="Password"
//                             rules={[{ required: true, message: 'Please enter the password' }]}
//                         >
//                             <Input.Password onChange={(e) => setpassword(e.target.value)} />
//                         </Form.Item>
//                     </Col>
//                     <Col xs={24} sm={12} md={12} lg={4} xl={4}>
//                         <Form.Item>
//                             <Button type="primary" htmlType="submit" onClick={handleAdd}>
//                                 Add
//                             </Button>
//                         </Form.Item>
//                     </Col>
//                 </Row>
//             </Form>
//             <Table columns={columns} dataSource={data} />
//         </>
//     );
// };

// export default YourFormComponent;

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, Table, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import axios from 'axios';

const YourFormComponent = () => {
    const [data, setData] = useState([]);
    const [form] = Form.useForm();
    const [editMode, setEditMode] = useState(null);

    const [clinic, setClinic] = useState("");
    const [user, setUser] = useState("");
    const [connectionString, setConnectionString] = useState("");
    const [password, setPassword] = useState("");

    const getData = () => {
        axios.get("https://653be25ad5d6790f5ec79710.mockapi.io/centralized-auth")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();
        axios.post("https://653be25ad5d6790f5ec79710.mockapi.io/centralized-auth", {
            clinic: clinic,
            user: user,
            connectionString: connectionString,
            password: password,
        })
            .then(response => {
                console.log("Data added successfully:", response.data);
                getData();
                form.resetFields();
            })
            .catch(error => {
                console.error("Error adding data:", error);
            });
    }

    const handleEditClick = (key) => {
        setEditMode(key);
    };


    const onFinish = (values) => {
        getData();
        form.resetFields();
    };

    const handleViewNameClick = (record) => {
        Modal.info({
            title: (<p>{record.clinic}</p>),
            content: (
                <div>
                    <p>Admin: {record.user}</p>
                    <p>Super Admin: {record.user}</p>
                    <p>Doctor: {record.user}</p>
                    <p>Receptionist: {record.user}</p>
                </div>
            ),
        });
    };

    const columns = [
        {
            title: 'Clinic',
            dataIndex: 'clinic',
            key: 'clinic',
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'Connection String',
            dataIndex: 'connectionString',
            key: 'connectionString',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
            render: (text, record) => (
                <span>
                    {editMode === record.key ? (
                        <Form
                            initialValues={{ password: text }}

                        >
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter the password' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form>
                    ) : (
                        <span>{text}</span>
                    )}
                    <EditOutlined
                        style={{ marginLeft: '8px', cursor: 'pointer' }}
                        onClick={() => handleEditClick(record.key)}
                    />
                </span>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button onClick={() => handleViewNameClick(record)}>View</Button>
                </span>
            ),
        },
    ];

    return (
        <>
            <Form onFinish={onFinish} style={{ marginTop: '20px', marginLeft: '100px', marginRight: '100px' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 32 }} justify="space-between">
                    <Col xs={24} sm={12} md={12} lg={4} xl={5}>
                        <Form.Item
                            name="client"
                            label="Client"
                            rules={[{ required: true, message: 'Please enter the client name' }]}
                        >
                            <Input onChange={(e) => setClinic(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={4} xl={4}>
                        <Form.Item
                            name="User"
                            label="User"
                            rules={[{ required: true, message: 'Please enter the user name' }]}
                        >
                            <Input onChange={(e) => setUser(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={4} xl={6}>
                        <Form.Item
                            name="ConnectionString"
                            label="Connection String"
                            rules={[{ required: true, message: 'Please enter the connection string' }]}
                        >
                            <Input onChange={(e) => setConnectionString(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={4} xl={5}>
                        <Form.Item
                            name="Password"
                            label="Password"
                            rules={[{ required: true, message: 'Please enter the password' }]}
                        >
                            <Input.Password
                                value={password}  // Set the value directly from the state
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={4} xl={4}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={handleAdd}>
                                Add
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Table columns={columns} dataSource={data} />
        </>
    );
};

export default YourFormComponent;



