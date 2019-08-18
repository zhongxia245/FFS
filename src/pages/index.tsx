import React from 'react';
import { withRouter } from 'umi';
import { Alert, Button } from 'antd';
import styles from './index.less';

export default withRouter(({ history }) => {
  return (
    <div className={styles.page}>
      <h1>FFS理论简易测试版</h1>

      <Alert message=" “FFS理论”（Five Factors & Stress）是一种独特的思维方式，它为管理者提供一种充分发挥下属的强项，从而提高团队竞争力的方法。" />

      <Button
        type="primary"
        size="large"
        className={styles.btn}
        onClick={() => {
          history.push('/form');
        }}
      >
        开始测试
      </Button>
    </div>
  );
});
