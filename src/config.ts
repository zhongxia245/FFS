export const FFS_TYPES: any = {
  A: '凝聚性(A)',
  B: '接纳性(B)',
  C: '辨别性(C)',
  D: '扩展性(D)',
  E: '保全性(E)',
};

/**
 * 管理者可以根据FFS理论的测试结果，可以把员工的性格进一步分为四种类型：
 * 首先比较 A凝聚性 和 B接纳性 的数值哪一个更高。两数值相等时，算作A更高。
 * 然后比较 D扩展性 和 E保全性 的数值哪一个更高。两数值相等时，算作E更高。
 *
 * 根据上面的两个条件比较，得出以下结论
 */
export const FFS_RESULT: any = {
  AD: {
    type: 'AD',
    name: '领导型(Leadership)',
    desc: '这种类型的人具备精神力量、使命感、决策力和行动力，善于掀起变革、扩大市场的“开路人”',
  },
  BD: {
    type: 'BD',
    name: '拖船型(Tugboat)',
    desc:
      '这种类型的人能够敏锐察觉环境的变化，并积极主动地冲锋陷阵，善于拓展业务、创业事业的“侦查员”',
  },
  AE: {
    type: 'AE',
    name: '船锚型(Anchor)',
    desc: '这种类型的人能够忠实于自己的价值标准和规范，是在后方支援事业、维护企业稳定的“坚守人”',
  },
  BE: {
    type: 'BE',
    name: '管理型(Management)',
    desc: '这种类型的人富有人情味，能够长期稳定从事一项工作，是所有事业不可或缺的“协调员”',
  },
};

// 计算FFS理论的类型
export const getFFSTypeByScore = (score: any) => {
  let ffsType = '';
  ffsType = score.A >= score.B ? 'A' : 'B';
  ffsType += score.D >= score.E ? 'D' : 'E';
  return FFS_RESULT[ffsType];
};

export const QUESTIONS: any[] = [
  { type: 'A', question: '即使是朋友犯了错误也会严厉地批评或指责？' },
  { type: 'A', question: '绝不容忍他人背叛自己，无论对方是谁？' },
  { type: 'A', question: '严格遵守约定的时间并希望他人也能遵守？' },
  { type: 'A', question: '经常在他人说话时打断别人？' },
  { type: 'A', question: '即使没有法律规则也应当遵守义务和社会上约定俗成的规矩？' },

  { type: 'B', question: '善于发现他人的长处和优点？' },
  { type: 'B', question: '即使知道对方在撒谎，如果事情不大也会原谅？' },
  { type: 'B', question: '处理事情都能随机应变？' },
  { type: 'B', question: '别人拜托的事，即使自己并不方便也无法一口回绝？' },
  { type: 'B', question: '常被别人说爱管闲事？' },

  { type: 'C', question: '将事物的客观事实和自己的主观理解划分得非常清晰？' },
  { type: 'C', question: '比起文学性的内容，更容易理解科学性的内容？' },
  { type: 'C', question: '不擅长应对没有明确答案或模棱两可的事情？' },
  { type: 'C', question: '能够很快发现对方言行上的自相矛盾或不合情理之处？' },
  { type: 'C', question: '比起感性的内容，听到说明性的内容时更不会觉得疲惫？' },

  { type: 'D', question: '想到什么马上说出口？' },
  { type: 'D', question: '得意忘形时容易做出一些过分的举动？' },
  { type: 'D', question: '好恶分明，并且都表现在态度上？' },
  { type: 'D', question: '很难做到老老实实待着？' },
  { type: 'D', question: '和他人做相同的事、拥有相同的东西会令自己感到厌恶和不快？' },

  { type: 'E', question: '遇到厌烦的事情时经常一言不发？' },
  { type: 'E', question: '比起做少数派，多数派更让自己感到安心？' },
  { type: 'E', question: '当众讲话时，常会事先想好要讲话的内容并顾及他人的感受？' },
  { type: 'E', question: '尽量避免只是为了坚持自己的意见而引发争执？' },
  { type: 'E', question: '认为自己爱操心，也被人这样说过？' },
];
