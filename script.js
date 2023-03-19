const len = document.querySelector("#txt");
const input_el = document.querySelector("#rnginp");
const txtinp = document.querySelector("#txtinp");
const btnGen = document.querySelector("#btngen");
const btnCopy = document.querySelector("#btncopy");
const uprinp = document.querySelector("#uprinp");
const lwrinp = document.querySelector("#lwrinp");
const nbrinp = document.querySelector("#nbrinp");
const sblinp = document.querySelector("#sblinp");
let tmp = "";

function getValue() {
  tmp = input_el.value;
  len.textContent = tmp;
}

btnGen.addEventListener("click", () => {
  txtinp.value = generate();
});

btnCopy.addEventListener("click", () => {
  txtinp.select();
  txtinp.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(txtinp.value);
  alert("Password copied: " + txtinp.value);
});

function generate() {
  const length = parseInt(tmp);
  let password = "";
  let elements = "";
  uprinp.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lwrinp.value = "abcdefghijklmnopqrstuvwxyz";
  nbrinp.value = "0123456789";
  sblinp.value = "!\"#$%&'*+,./:;=?@\\^`|~_-[]{}()<>";
  let tmp0 = "";
  let tmp1 = "";
  let tmp2 = "";
  let tmp3 = "";
  if (uprinp.checked) {
    tmp0 = uprinp.value;
  }
  if (lwrinp.checked) {
    tmp1 = lwrinp.value;
  }
  if (nbrinp.checked) {
    tmp2 = elements.concat(nbrinp.value);
  }
  if (sblinp.checked) {
    tmp3 = sblinp.value;
  }
  elements = tmp0.concat(tmp1).concat(tmp2).concat(tmp3);
  console.log(elements);
  for (let i = 0; i <= length - 1; i++) {
    let randomNumber = Math.floor(Math.random() * elements.length);
    password += elements.substring(randomNumber, randomNumber + 1);
  }
  return password;
}
