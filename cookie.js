let cookies = 0;
let autoClickers = 0;

function updateDisplay() {
  document.getElementById('counter').innerText = `Cookies: ${cookies}`;
}

function clickCookie() {
  cookies++;
  updateDisplay();
}

function buyUpgrade() {
  if (cookies >= 30) {
    cookies -= 30;
    autoClickers++;
    setInterval(() => {
      cookies++;
      updateDisplay();
    }, 500);
    updateDisplay();
  } else {
    alert("Not enough cookies!");
  }
}