<script>
  import { evaluateExpression } from '../routes/api/server';
  
  let input = "";
  let displayValue = "0";

  const buttonExpression = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else {
      input += value;
      updateDisplay();
    }
  }

  const updateDisplay = () => {
    displayValue = input || "0";
  }

  const calculateResult = () => {
    try {
      const result = evaluateExpression(input);
      input = result.toString();
      updateDisplay();
    } catch (error) {
      displayValue = "Error";
    }
  }

  const clearDisplay = () => {
    input = "";
    updateDisplay();
  }
</script>


<body>
  <h1>Simple Svelte Calculator</h1>
  <table>
    <tr>
        <td colspan="4">
          <input class="result" type="text" bind:value={displayValue}>
        </td>
    </tr>

    <tr>
      <td><button class="reset" on:click={() => buttonExpression("C")}>C</td>
        <td><button class="reset" on:click={() => buttonExpression("(")}>(</td>
        <td><button class="reset" on:click={() => buttonExpression(")")}>)</td>
          <td><button class="operator" on:click={() => buttonExpression("/")}>/</td>
  </tr>

    <tr>
        <td><button class="num" on:click={() => buttonExpression("1")}>1</td>
        <td><button class="num" on:click={() => buttonExpression("2")}>2</td>
        <td><button class="num" on:click={() => buttonExpression("3")}>3</td>
          <td><button class="operator" on:click={() => buttonExpression("*")}>*</td>
    </tr>
    <tr>
        <td><button class="num" on:click={() => buttonExpression("4")}>4</td>
        <td><button class="num" on:click={() => buttonExpression("5")}>5</td>
        <td><button class="num" on:click={() => buttonExpression("6")}>6</td>
          <td><button class="operator" on:click={() => buttonExpression("-")}>-</td>
    </tr>
    <tr>
        <td><button class="num" on:click={() => buttonExpression("7")}>7</td>
        <td><button class="num" on:click={() => buttonExpression("8")}>8</td>
        <td><button class="num" on:click={() => buttonExpression("9")}>9</td>
          <td><button class="operator" on:click={() => buttonExpression("+")}>+</td>
    </tr>
    <tr>
        <td colspan="2"><button class="num" on:click={() => buttonExpression("0")}>0</td>
        <td><button class="num" on:click={() => buttonExpression(".")}>.</td>
        <td><button class="operator equal" on:click={() => buttonExpression("=")}>=</td>
    </tr>
  </table>
</body>
 