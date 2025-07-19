const clearBtn = document.getElementById("clearBtn");
const equalBtn = document.getElementById("equalBtn");
const btnContainer = document.querySelector(".btn-container");
const input = document.querySelector("input");

btnContainer.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("btn") &&
    e.target !== clearBtn &&
    e.target !== equalBtn
  ) {
    input.value += e.target.textContent;
  } else {
    return;
  }
});

const equalLogic = function () {
  try {
    const result = eval(input.value);

    if (typeof result === "number" && isFinite(result)) {
      input.value = result;
    } else {
      throw new Error("Invalid result");
    }
  } catch (error) {
    input.value = "Error";
    setTimeout(function () {
      input.value = "";
    }, 1000);
  }
};

equalBtn.addEventListener("click", equalLogic);

clearBtn.addEventListener("click", function () {
  input.value = "";
});

const operations = ["*", "/", "+", "-"];
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if ((+e.key >= 1 && +e.key <= 9) || operations.includes(e.key)) {
    input.value += e.key;
  }

  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (e.key === "=" || e.key === "Enter") {
    equalLogic();
  }

  if (e.key === "c") {
    input.value = "";
  }
});
