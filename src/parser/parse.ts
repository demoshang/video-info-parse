import { list } from './data';

interface MatchItem {
  text: string;

  name: string;
  keys: string[];
  detail?: string;
}

export type ParsedItem =
  | {
      match: false;
      text: string;
    }
  | ({
      match: true;
    } & MatchItem);

// 占位符替换匹配内容
function addPlaceHolder(input: string, matches: MatchItem[]) {
  let temp = input;
  let isChange = false;
  list.forEach(({ regexp, ...item }) => {
    temp = temp.replace(regexp, (text, ...rest) => {
      let name;
      if (typeof item.name === 'function') {
        name = item.name([text, ...rest]);
      } else {
        name = item.name;
      }

      isChange = true;

      matches.push({
        text,
        ...item,
        name,
      });

      return `__placeholder_start__${matches.length - 1}__placeholder_end__.`;
    });
  });

  return {
    str: temp,
    isChange,
  };
}

// 重新排序
function sortPlaceholder(input: string, matches: MatchItem[]) {
  let temp = input;
  // 重新排序
  const matchList: any[] = [];
  temp = temp.replace(/__placeholder_start__(\d+)__placeholder_end__.?/g, (_text, index) => {
    matchList.push(matches[index]);
    return '__placeholder__';
  });

  return {
    str: temp,
    matchList,
  };
}

// 分割输出
function splitPlaceholder(input: string, matchList: MatchItem[]) {
  const result: ParsedItem[] = [];
  input.split('__placeholder__').forEach((text, index) => {
    result.push({
      match: false,
      text,
    });

    const insert = matchList[index];
    if (!insert) {
      return;
    }

    result.push({
      match: true,
      ...insert,
    });
  });

  return result;
}

function parse(input: string) {
  let temp = input;

  const matches: MatchItem[] = [];

  // 占位符替换匹配内容
  let loopIndex = 0;
  while (loopIndex < 10) {
    loopIndex += 1;
    const data = addPlaceHolder(temp, matches);
    temp = data.str;

    if (!data.isChange) {
      break;
    }
  }

  // 重新排序
  const { str, matchList } = sortPlaceholder(temp, matches);

  // 分割输出
  return splitPlaceholder(str, matchList);
}

export { parse };
