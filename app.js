const initial_val = document.getElementById("initial-value");
const stock_qty = document.getElementById("stock-quantity");
const curr_val = document.getElementById("current-value");
const check_btn = document.getElementById("btn");
const message = document.getElementById("message");

function calculate_profit_or_loss(initial, current, quantity) {
  if (current > initial) {
    let profit = (current - initial) * quantity;
    let profit_percentage = (profit / initial) * 100;
    message.style.color = "#9370DB";
    message.style.border = "1px solid #808080";
    message.style.backgroundColor = "4B0082";
    message.innerText = `Your Total Profit is ${profit.toFixed(
      1
    )} \n Percentage Profit is ${profit_percentage} %`;
  } else if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;
    showMessage(
      `Your Total Loss is ${loss.toFixed(
        2
      )} \nPercentage loss is ${lossPercentage.toFixed(1)} %`
    );
  } else {
    showMessage("Neither Profit Nor Loss!");
  }
  reject();
}

function showMessage(msg) {
  message.innerText = msg;
  message.style.color = "#ff4500";
}

function reject() {
  let p = initial_val.value;
  let q = stock_qty.value;
  let c = curr_val.value;
  let msg = "Please fill all above fields !!";
  if (p == "") {
    showMessage(msg);
  }
  if (q == "") {
    showMessage(msg);
  }
  if (c == "") {
    showMessage(msg);
  }
  if (p < 0 || q < 0 || c < 0) {
    showMessage("Please enter a valid number!!");
  }
}

function clickHandler() {
  console.log("hello world");
  p = Number(initial_val.value);
  c = Number(curr_val.value);
  quant = Number(stock_qty.value);

  calculate_profit_or_loss(p, c, quant);
}

check_btn.addEventListener("click", clickHandler);
