export function getReadingTime(content) {
  const WPM_EN = 175;
  const WPM_ZH = 250;
  const picPerMin = 7.5;
  const codeCharPerMin = 30;
  const mathCharPerMin = 30;

  const processContent = content
    .replace(/---[\s\S]*?---/, '')  // remove frontmatter
    .replace(/```[\s\S]*?```/g, '')  // remove code blocks
    .replace(/<[\s\S]*?>/g, '')  // remove html tags
    .replace(/\${1,2}[\s\S]*?\${1,2}/g, '')  // remove math formulas
    .replace(/!\[[\s\S]*?\]\([\s\S]*?\)/g, '')  // remove images
    .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '');  // remove links

  const chinese = processContent.match(/[\u4e00-\u9fa5]/g);
  const chineseCount = chinese ? chinese.length : 0;
  const chineseTime = chineseCount / WPM_ZH;

  const english = processContent.match(/[a-zA-Z]/g);
  const englishCount = english ? english.length : 0;
  const englishTime = englishCount / WPM_EN;

  const code = content.match(/```[\s\S]*?```/g);
  const codeCharCount = code ? code.reduce((acc, cur) => {
    return acc + cur.split(/\s+/).length - 1
  }, 0) : 0;
  const codeTime = codeCharCount / codeCharPerMin;

  const picCount = (content.match(/!\[[\s\S]*?\]\([\s\S]*?\)/g) || []).length;
  const picTime = picCount / picPerMin;

  const math = content.match(/\${1,2}[\s\S]*?\${1,2}/g);
  const mathCharCount = math ? math.reduce((acc, cur) => {
    return acc + cur.split(/\s+/).length - 1
  }, 0) : 0;
  const mathTime = mathCharCount / mathCharPerMin;

  const wordCount = chineseCount + englishCount + codeCharCount + mathCharCount;
  const wordTime = Math.ceil(chineseTime + englishTime + codeTime + mathTime);
  const totalTime = Math.ceil(wordTime + picTime);

  return {
    wordCount,
    wordTime,
    totalTime,
  };
}
