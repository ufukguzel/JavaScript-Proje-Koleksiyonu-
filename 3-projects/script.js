function appendToResult(value) {
    document.getElementById('result').value += value;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function deleteLastChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }

  function computeResult() {
    var result = document.getElementById('result').value;
    var computation = eval(result);
    document.getElementById('result').value = computation;
  }