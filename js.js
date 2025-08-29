
// Call History
const callHistoryData = []

// Hear Count 
const heartCount = document.getElementById("heart-count");

// All Card Heart Button Select:
const heartButtons = document.querySelectorAll(".heart-btn");

let count = 0;

heartButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    heartCount.textContent = count;
    return
    

    // Heart change empty to filed:
    button.classList.remove("heart-btn");
    button.classList.add("heart-btn", "text-red-500");
  });


})

// Coin & History Section:

let coinCount = document.getElementById("coin-count");
let currentCoins = parseInt(coinCount.innerText);

// Call History Section
const historySection = document.getElementById("call-history-section");

// Function: Add to Call History
function addToHistory(serviceName, serviceNumber) {
  const entry = document.createElement("div");
  entry.className = "flex justify-between items-center py-2 border-b border-gray-200";
  entry.innerHTML = `
    <span class="call-history">${serviceName} (${serviceNumber})</span>
    <span class="text-gray-800 text-sm">${new Date().toLocaleTimeString()}</span>
  `;
  historySection.appendChild(entry);
}

// Function: Handle Call
function handleCall(serviceName, serviceNumber) {
  if (currentCoins < 20) {
    alert("⚠️ Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  // lost coins
  currentCoins -= 20;
  coinCount.innerText = currentCoins;

  // Show alert
  alert(`📞 Calling ${serviceName} - ${serviceNumber}`);

  // Add to Call History
  addToHistory(serviceName, serviceNumber);
}

// ----------------------------
// Attach Event Listeners
// ----------------------------
document.getElementById("all-call-btn").addEventListener("click", () => {
  handleCall("National Emergency", "999");
});

document.getElementById("police-call-btn").addEventListener("click", () => {
  handleCall("Police Helpline", "999");
});

document.getElementById("fire-call-btn").addEventListener("click", () => {
  handleCall("Fire Service", "999");
});

document.getElementById("health-call-btn").addEventListener("click", () => {
  handleCall("Ambulance Service", "1994-999999");
});

document.getElementById("help-call-btn").addEventListener("click", () => {
  handleCall("Women & Child Helpline", "109");
});

document.getElementById("govt-call-btn").addEventListener("click", () => {
  handleCall("Anti-Corruption Helpline", "106");
});

document.getElementById("all2-call-btn").addEventListener("click", () => {
  handleCall("Electricity Helpline", "16216");
});

document.getElementById("ngo-call-btn").addEventListener("click", () => {
  handleCall("Brac Helpline", "16445");
});

document.getElementById("travel-call-btn").addEventListener("click", () => {
  handleCall("Bangladesh Railway", "163");
});

// ----------------------------
// Clear Button
// ----------------------------
document.querySelector("#call-history-section button").addEventListener("click", () => {
  historySection.innerHTML = `
    <div class="flex justify-between items-center mb-4">
      <h1 class="font-[500] text-[18px] ">
        <i class="fa-solid fa-clock-rotate-left mr-2 text-[20px]"></i>Call History
      </h1>
      <button class="bg-[#00a63e] text-white px-7 py-2 rounded-4xl">Clear</button>
    </div>
  `;
});


//Copy Count Navbar
let copyCount = 0;
const copyCountEl = document.querySelector("#copy-count span");

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {

    const number = this.parentElement.parentElement.querySelector("p.service-nmbr").innerText;

    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      copyCountEl.innerText = copyCount; 
      alert(`✅ Number Copied: ${number}`);
    });
  });
});


