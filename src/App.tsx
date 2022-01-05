import React, {useEffect, useState} from 'react';
import {Button as AntButton} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';

import schema from 'async-validator'

// @ts-ignore
import {Button, Input, Form, Modal} from '@kingdee-ui/kui'

import '@kingdee-ui/kui/dist/kui.css'
import './App.css';

function App() {
  const [visible, setVisible] = useState(false)
  const handleClick = (bool: boolean) => {
    setVisible(bool)
  }

  const Temp = () => {
    return <div>自定义内容元素</div>
  }

  return (
    <div>
      <Button
        onClick={() => {
          handleClick(true)
        }}>
        button
      </Button>

      <Modal
        type="normal"
        closable={true}
        onCancel={() => handleClick(false)}
        onOk={() => handleClick(false)}
        mask={true}
        body={'1111'}
        visible={true}
        getContainer={() => document.body}
        focusTriggerAfterClose
      />
    </div>
  )
}

export default App;
