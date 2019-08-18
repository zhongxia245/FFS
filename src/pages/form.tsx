import React, { useState, useContext, useEffect } from 'react';
import { Radio, Alert, Button, message, BackTop, Modal } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { withRouter } from 'umi';
import { AppContext } from '../context';
import styles from './form.less';
import { QUESTIONS } from '../config';

// 计算答题时间,从选择第一题开始算
let startTime = 0;

export default withRouter(({ history }) => {
  const { data, setData }: any = useContext(AppContext);

  useEffect(() => {
    startTime = Date.now();
  }, []);

  const onSubmit = () => {
    let emptyIndex = -1;
    // 检查是否填完答案
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (!data[i]) {
        emptyIndex = i;
        break;
      }
    }

    if (emptyIndex !== -1) {
      let dom: HTMLElement | null = document.getElementById(`q_${emptyIndex}`);
      if (dom) {
        let top = window.pageYOffset + dom.getBoundingClientRect().top - 15;
        window.scrollTo(0, top);
      }
      message.error('必须答完所有题目');
    } else {
      // 缓存数据
      localStorage.setItem('ffs_data', JSON.stringify(data));

      let duration = Date.now() - startTime;
      Modal.confirm({
        icon: null,
        width: 300,
        centered: true,
        content: `答题时间为：${parseInt(String(duration / 1000), 10)}s`,
        okText: '查看结果',
        cancelText: '取消',
        onOk: () => {
          history.push('/result');
        },
      });
    }
  };

  return (
    <>
      <BackTop />
      <Alert message="※ 每道题目请在 5秒 内作答，总答题时间请控制在 2分30秒 之内" type="info" />
      <div className={styles.list}>
        {QUESTIONS.map((item, index) => {
          return (
            <div key={index} className={styles.item} id={`q_${index}`}>
              <p>
                <span>*</span>
                {`Q${index + 1}`}：{item.question}
              </p>
              <Radio.Group
                value={data[index]}
                className={styles.group}
                onChange={(e: RadioChangeEvent) => {
                  let value = e.target.value;
                  setData({ [index]: value });
                }}
              >
                <Radio value="A">A: YES</Radio>
                <Radio value="B">B: 更偏向 YES</Radio>
                <Radio value="C">C: 更偏向 NO</Radio>
                <Radio value="D">D: NO</Radio>
              </Radio.Group>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <Button type="primary" size="large" onClick={onSubmit}>
          提交答案
        </Button>
      </div>
    </>
  );
});
