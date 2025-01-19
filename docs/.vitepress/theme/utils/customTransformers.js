function createCommentNotationTransformer(name, regex, onMatch, removeEmptyLines = false) {
  return {
    name,
    code(code) {
      const lines = code.children.filter((i) => i.type === "element");
      const linesToRemove = [];
      lines.forEach((line, idx) => {
        let nodeToRemove;
        for (const child of line.children) {
          if (child.type !== "element") continue;
          const text = child.children[0];
          if (text.type !== "text") continue;
          let replaced = false;
          text.value = text.value.replace(regex, (...match) => {
            if (onMatch.call(this, match, line, child, lines, idx)) {
              replaced = true;
              return "";
            }
            return match[0];
          });
          if (replaced && !text.value.trim()) nodeToRemove = child;
        }
        if (nodeToRemove) {
          line.children.splice(line.children.indexOf(nodeToRemove), 1);
          if (line.children.length === 0) {
            linesToRemove.push(line);
            if (removeEmptyLines) {
              const next = code.children[code.children.indexOf(line) + 1];
              if (next && next.type === "text" && next.value === "\n") linesToRemove.push(next);
            }
          }
        }
      });
      for (const line of linesToRemove) code.children.splice(code.children.indexOf(line), 1);
    },
  };
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function transformerNotationMap(options = {}, name = "@shikijs/transformers:notation-map") {
  const { classMap = {}, classActivePre = undefined } = options;
  return createCommentNotationTransformer(
    name,
    new RegExp(`\\s*(?://|/\\*|<!--|#|--|%{1,2}|;{1,2}|"|')\\s+\\[!code (${Object.keys(classMap).map(escapeRegExp).join("|")})(:[-+]?\\d+)?\\]\\s*(?:\\*/|-->)?\\s*$`),
    function (
      [
        _,
        match,
        range = ":1",
      ],
      _line,
      _comment,
      lines,
      index,
    ) {
      const lineNum = Number.parseInt(range.slice(1), 10);
      const sign = range[1];
      if (sign) {
        if (index + lineNum >= lines.length) return true;
        this.addClassToHast(lines[index + lineNum], classMap[match]);
      } else {
        lines.slice(index, index + lineNum).forEach((line) => {
          this.addClassToHast(line, classMap[match]);
        });
      }

      if (classActivePre) this.addClassToHast(this.pre, classActivePre);
      return true;
    },
  );
}

function customTransformerNotationDiff(options = {}) {
  const { classLineAdd = "diff add", classLineRemove = "diff remove", classActivePre = "has-diff" } = options;
  return transformerNotationMap(
    {
      classMap: {
        "++": classLineAdd,
        "--": classLineRemove,
      },
      classActivePre,
    },
    "transformers:custom-notation-diff",
  );
}

export { customTransformerNotationDiff };
