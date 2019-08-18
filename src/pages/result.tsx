import React, { useContext } from 'react';
import { Tag, Alert, Divider, Icon, Modal } from 'antd';
import { AppContext } from '../context';
import { FFS_TYPES, QUESTIONS, getFFSTypeByScore } from '../config';
import styles from './result.less';

const ANSWERS: any = { A: 4, B: 3, C: 2, D: 1 };

const calcScoreInfo = (data: any) => {
  let result: any = { score: 0, detail: { A: 0, B: 0, C: 0, D: 0, E: 0 } };
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let questionType = QUESTIONS[Number(key)].type;
      result.score += ANSWERS[data[key]];
      result.detail[questionType] += ANSWERS[data[key]];
    }
  }
  return result;
};

export default function() {
  const { data }: any = useContext(AppContext);

  const scoreInfo = calcScoreInfo(data);
  const result = getFFSTypeByScore(scoreInfo.detail);

  return (
    <div className={styles.result}>
      <h2>总得分：{scoreInfo.score}</h2>
      <p>
        <Icon
          type="question-circle"
          style={{ marginRight: 5, color: 'rgb(45, 183, 245)' }}
          onClick={() => {
            Modal.info({
              icon: null,
              width: 300,
              centered: true,
              okText: '知道了',
              title: 'FFS理论结果的计算公式',
              content: (
                <div>
                  <p>管理者可以根据FFS理论的测试结果，可以把员工的性格进一步分为四种类型：</p>
                  <p>
                    首先比较 <strong>A凝聚性</strong> 和 <strong>B接纳性</strong>{' '}
                    的数值哪一个更高。两数值相等时，算作A更高，
                  </p>
                  <p>
                    然后比较 <strong>D扩展性</strong> 和 <strong>E保全性</strong>{' '}
                    的数值哪一个更高。两数值相等时，算作E更高，
                  </p>
                  <p>
                    于是分出四种类型：<strong>AD(领导型)、BD(拖船型)、AE(船锚型)、BE(管理型)</strong> 。
                  </p>
                </div>
              ),
            });
          }}
        />
        根据FFS理论计算 ，测试结果更偏向于：
      </p>
      <p>
        <Tag color="#2db7f5">
          {result.type} - {result.name}
        </Tag>
      </p>
      <Alert message={result.desc} />

      <Divider style={{ marginTop: 35 }}>分数详情</Divider>
      <img className={styles.img} src={require('../assets/result.jpeg')} alt="FFS理论基础矩阵" />
      <p>
        <strong>得分详情如下：</strong>
      </p>
      <p>
        {FFS_TYPES.A}：{scoreInfo.detail.A}
      </p>
      <p>
        {FFS_TYPES.B}：{scoreInfo.detail.B}
      </p>
      <p>
        {FFS_TYPES.C}：{scoreInfo.detail.C}
      </p>
      <p>
        {FFS_TYPES.D}：{scoreInfo.detail.D}
      </p>
      <p>
        {FFS_TYPES.E}：{scoreInfo.detail.E}
      </p>
    </div>
  );
}
