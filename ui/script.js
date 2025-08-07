document.getElementById("submitbtn").addEventListener("click", function () {
  const isIITChecked = document.getElementById("iit").checked;
  const isNITChecked = document.getElementById("nit").checked;
  const isIIITChecked = document.getElementById("iiit").checked;

  if (isIITChecked) {
    (async () => {
      const rank = parseInt(document.getElementById("rank").value);
      const category = document.getElementById("categorySelect").value;
      const gender = document.getElementById("genderSelect").value;
      const selectedBranch = branchSelect.getValue(true); // Assuming Choices.js
      await loadCutoffDataForIIT(rank, category, selectedBranch, gender);
    })();
  }
  if (isNITChecked) {
    (async () => {
      const rank = parseInt(document.getElementById("rank").value);
      const category = document.getElementById("categorySelect").value;
      const gender = document.getElementById("genderSelect").value;
      const state = document.getElementById("stateSelect").value;
      const selectedBranch = branchSelect.getValue(true); // Assuming Choices.js
      await loadCutoffDataForNIT(rank, category, selectedBranch, gender, state);
    })();
  }
  if (isIIITChecked) {
    (async () => {
      const rank = parseInt(document.getElementById("rank").value);
      const category = document.getElementById("categorySelect").value;
      const gender = document.getElementById("genderSelect").value;
      const state = document.getElementById("stateSelect").value;
      const selectedBranch = branchSelect.getValue(true); // Assuming Choices.js
      await loadCutoffDataForIIIT(rank, category, selectedBranch, gender, state);
    })();
  }
});

async function loadCutoffDataForIIT(rank, category, branches, gender) {
  try {
    const response = await fetch("../data/josaa_cutoffs_iits.json");
    const data = await response.json();

    const filtered = data.filter(entry => {
      const matchesCategory = entry.seat_type === category;
      const matchesGender = entry.gender === gender;
      const matchesBranch = branches.includes("ALL") || branches.includes(entry.branch);
      return matchesCategory && matchesGender && matchesBranch;
    });

    const closeOrAbove = filtered.filter(entry => rank <= entry.closing_rank);

    displayTableData(closeOrAbove, rank);
  } catch (err) {
    console.error("Error loading data:", err);
  }
}

async function loadCutoffDataForIIIT(rank, category, branches, gender) {
  try {
    const response = await fetch("../data/josaa_cutoffs_iiits.json");
    const data = await response.json();

    const filtered = data.filter(entry => {
      const matchesCategory = entry.seat_type === category;
      const matchesGender = entry.gender === gender;
      const matchesBranch = branches.includes("ALL") || branches.includes(entry.branch);
      return matchesCategory && matchesGender && matchesBranch;
    });

    const closeOrAbove = filtered.filter(entry => rank <= entry.closing_rank);

    displayTableData(closeOrAbove, rank);
  } catch (err) {
    console.error("Error loading data:", err);
  }
}

async function loadCutoffDataForNIT(rank, category, branches, gender, state){
    try {
        const response = await fetch("../data/josaa_cutoffs_nits.json");
        const data = await response.json();

        console.log("HI")

        const filtered = data.filter(entry => {
            const matchesCategory = entry.seat_type === category;
            const matchesGender = entry.gender === gender;
            const matchesBranch = branches.includes("ALL") || branches.includes(entry.branch);

            const isHomeState = entry.state === state || state === "ALL";
            const isQuotaRelevant = isHomeState ? (entry.quota === "HS" || entry.quota === "OS") : entry.quota === "OS";

            return matchesCategory && matchesGender && matchesBranch && isQuotaRelevant;
        })

        const closeOrAbove = filtered.filter(entry => rank <= entry.closing_rank);

        displayTableData(closeOrAbove, rank);

    } catch(err) {
        console.error("Error: ", err);
    }
}

function displayTableData(dataArray, enteredRank) {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; 

  dataArray.sort((a, b) => {
    const diffA = Math.abs(a.closing_rank - enteredRank);
    const diffB = Math.abs(b.closing_rank - enteredRank);
    return diffA - diffB;
  });

  dataArray.forEach(data => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.institute}</td>
      <td>${data.branch}</td>
      <td>${data.state}</td>
      <td>${data.quota}</td>
      <td>${data.seat_type}</td>
      <td>${data.gender}</td>
      <td>${data.opening_rank}</td>
      <td>${data.closing_rank}</td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("cutoff-table-container").style.display = "block";
  const container = document.getElementById("cutoff-table-container");
  container.style.display = "block";
  container.scrollIntoView({ behavior: "smooth" });
}
