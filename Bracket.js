// Test string - Expected result
// {} - True
// }{ - False (closed bracket can't proceed all open brackets.)
// {{} - False (one bracket pair was not closed)
// "" - True. (no brackets in the string will return True)
// {abc...xyz} - True (non-bracket characters are ignored appropriately)

function checkBrackets(str) {
  const brackets = {
    "{": "}",
  };
  const closeBracket = ["}"];

  const stack = [];

  for (let v of str) {
    if (brackets[v]) {
      stack.push(brackets[v]);
    } else {
      if (closeBracket.includes(v)) {
        if (stack.pop() !== v) return false;
      }
    }
  }

  return stack.length === 0;
}

exports.checkBrackets = checkBrackets;
