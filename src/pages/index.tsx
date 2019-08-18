import React from 'react';
import { withRouter } from 'umi';
import { Alert, Button, Divider } from 'antd';
import styles from './index.less';

export default withRouter(({ history }) => {
  return (
    <div className={styles.page}>
      <h1>FFS理论简易测试版</h1>

      <Alert message=" “FFS理论”（Five Factors & Stress）是一种独特的思维方式，它为管理者提供一种充分发挥下属的强项，从而提高团队竞争力的方法。" />
      <Divider />
      <p>
        教育学和经济学博士、组织心理学家小林惠智，在1979年作为美国国防部国际战略研究所研究员参加“组织人员编排项目”时首创了FFS理论。
      </p>
      <p>根据FFS理论产生的实验结果显示：</p>
      <p>
        <strong>在由性格相似的人员组成的同质型团队中</strong>，6个人能够产生相当于9个人的成果。
      </p>
      <p>
        <strong>在由性格不相同但能互补的互补型团队中</strong>，8个人能够产生相当于12个人的成果。
      </p>
      <p>
        如今，FFS理论作为一种“性格分析与组织人员编排法”，不仅应用于美国军队，还被广泛应用于日本企业的组织监督、体制改革、支援个人实现目标等各种规模的项目中。
      </p>

      <Divider />
      <p>
        <h3>FFS理论的个性分类</h3>
      </p>
      <p>
        <strong>A. 凝聚性强的人</strong>
      </p>
      <p>
        倾向于按照自己根据资深经验总结出的标准来衡量事物。符合标准则接受，不符合标准则排斥。拥有坚定的价值观念和信念，因此具有指导性，责任感强。具有善于指导、守德、规范的特点。
      </p>
      <p>
        <strong>B. 接纳性强的人</strong>
      </p>
      <p>
        倾向于自愿且无条件地接纳外部的情况，比如他人的情绪。能为他人的幸福感到高兴，因此喜欢照顾人，经常为他人排忧解难。具有善于培养、肯定、宽容的特点。
      </p>
      <p>
        <strong>C. 辨别性强的人</strong>
      </p>
      <p>
        倾向于迅速判断自己所处的内部和外部环境是否合理。能够冷静地分析情况并作出合理的判断。具有条理、善于分析、理性的特点。
      </p>
      <p>
        <strong>D. 扩展性强的人</strong>
      </p>
      <p>倾向于积极利用并吸收外部能量以及实现自我的扩张和发展。具有活跃、主动、创造的特点。</p>
      <p>
        <strong>E. 保全性强的人</strong>
      </p>
      <p>
        倾向于将自身的能量损失降到最低，以及保全和维持自我。做事注重细节，按部就班，严格遵守流程。具有协调、持久、顺应的特点。
      </p>

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
