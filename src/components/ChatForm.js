import React from 'react'
import { Form, Input, Button } from 'antd';

const ChatForm = () => {
  return (
      <div className='form-container'>
             <Form>
                    <Form.Item>
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Start Chat</Button>
                    </Form.Item>
                </Form>
      </div>
   
  )
}

export default ChatForm