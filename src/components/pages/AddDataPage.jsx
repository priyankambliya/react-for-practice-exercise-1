import { Input, Form, Button } from 'antd'
import { UserName } from '../../../providers/contextProvider'
import { useContext } from 'react'
import totalData from '../../data/totalData'
import { Link } from 'react-router-dom'

function AddDataPage() {

    // const {data,setdata} = useContext(UserName)

    const onFinish = (values) => {
        const objectData = {
            username:values.username,
            email:values.email,
            password:values.password
        }
        totalData.push(objectData)
        // if(objectData) setdata(totalData)

    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/4 flex justify-center border border-gray-300 rounded-lg mt-10'>
            <Form
            layout='vertical'
            className='mt-20'
                name="basic"
                onFinish={onFinish}
            >
                <h1 className='text-4xl font-extrabold mb-3'>Add data</h1>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                >
                    <Button 
                        type="primary" 
                        className='bg-blue-600 px-10'
                        htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
                
                <Link className='ms-10'>Update</Link>
                <Link className='ms-10' to={'/all'}>Delete</Link>
            </Form>
        </div>
            
        </div>
        
    )
}

export default AddDataPage