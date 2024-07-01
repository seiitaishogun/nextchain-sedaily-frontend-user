const getCheongan = (text: string) => {
  switch (text) {
    case '갑':
      return '甲';
    case '을':
      return '乙';
    case '병':
      return '丙';
    case '정':
      return '丁';
    case '무':
      return '戊';
    case '기':
      return '己';
    case '경':
      return '庚';
    case '신':
      return '辛';
    case '임':
      return '壬';
    case '계':
      return '癸';
    default:
      return '';
  }
};

const getCheonganColor = (text: string) => {
  switch (text) {
    case '갑':
    case '을':
      return { text: '#000000', bg: '#c7ebd2', ohaeng: '목' };
    case '병':
    case '정':
      return { text: '#000000', bg: '#efd5d5', ohaeng: '화' };
    case '무':
    case '기':
      return { text: '#000000', bg: '#efe1d5', ohaeng: '토' };
    case '경':
    case '신':
      return { text: '#000000', bg: '#d8d8d8', ohaeng: '금' };
    case '임':
    case '계':
      return { text: '#000000', bg: '#bbdef4', ohaeng: '수' };
    default:
      return { text: '#000000', bg: '#bbdef4', ohaeng: '수' };
  }
};

const getJiji = (text: string) => {
  switch (text) {
    case '인':
      return '寅';
    case '묘':
      return '卯';
    case '오':
      return '午';
    case '사':
      return '巳';
    case '진':
      return '辰';
    case '술':
      return '戌';
    case '축':
      return '丑';
    case '미':
      return '未';
    case '신':
      return '申';
    case '유':
      return '酉';
    case '자':
      return '子';
    case '해':
      return '亥';
    default:
      return '';
  }
};

const getJijiColor = (text: string) => {
  switch (text) {
    case '자':
    case '해':
      return { text: '#000000', bg: '#bbdef4', ohaeng: '수' };
    case '축':
    case '진':
    case '미':
    case '술':
      return { text: '#000000', bg: '#efe1d5', ohaeng: '토' };
    case '인':
    case '묘':
      return { text: '#000000', bg: '#c7ebd2', ohaeng: '목' };
    case '사':
    case '오':
      return { text: '#000000', bg: '#efd5d5', ohaeng: '화' };
    case '신':
    case '유':
      return { text: '#000000', bg: '#d8d8d8', ohaeng: '금' };
    default:
      return { text: '#000000', bg: '#bbdef4', ohaeng: '수' };
  }
};

const getOhaengColor = (text: string) => {
  switch (text) {
    case '목':
      return { text: '#000000', bg: '#c7ebd2' };
    case '화':
      return { text: '#000000', bg: '#efd5d5' };
    case '토':
      return { text: '#000000', bg: '#d8d8d8' };
    case '금':
      return { text: '#000000', bg: '#CDC8C7' };
    case '수':
      return { text: '#000000', bg: '#bbdef4' };
    default:
      return { text: '#000000', bg: '#000000' };
  }
};

export { getCheongan, getCheonganColor, getJiji, getJijiColor, getOhaengColor };
