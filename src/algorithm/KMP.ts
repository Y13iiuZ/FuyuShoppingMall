//在文本字符串中查找子串
//移动位数 = 已匹配的字符数 - 对应的部分匹配值
function buildPatternTable(pattern: string): number[] {  //用于构建模式串的部分匹配表——构建LPS数组(时间复杂度为O(N+M)，其中N是文本串的长度，M是模式串的长度)
    const table: number[] = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;
  
    while (suffixIndex < pattern.length) {
      if (pattern[prefixIndex] === pattern[suffixIndex]) {
        table[suffixIndex] = prefixIndex + 1;
        prefixIndex++;
        suffixIndex++;
      } else if (prefixIndex === 0) {
        table[suffixIndex] = 0;
        suffixIndex++;
      } else {
        prefixIndex = table[prefixIndex - 1];
      }
    }
  
    return table;
  }
  
  function kmpSearch(text: string, pattern: string): number {
    const patternTable = buildPatternTable(pattern);
  
    let textIndex = 0;
    let patternIndex = 0;
  
    while (textIndex < text.length) {
      if (text[textIndex] === pattern[patternIndex]) {
        if (patternIndex === pattern.length - 1) {
          return textIndex - pattern.length + 1;
        }
        textIndex++;
        patternIndex++;
      } else if (patternIndex > 0) {
        patternIndex = patternTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  
    return -1;
  }
  
  // 示例
  const text = "ABCABDABABCABCDABDE";
  const pattern = "ABCDABD";
  const index = kmpSearch(text, pattern);
  console.log(index); // 输出：11