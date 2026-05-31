let activeCategory = "all";

// ── Render Cards ───────────────────────────────────────────
function renderCards(list) {
  const grid = document.getElementById("commandGrid");
  const noResults = document.getElementById("noResults");
  const count = document.getElementById("resultsCount");

  grid.innerHTML = "";

  if (list.length === 0) {
    noResults.style.display = "block";
    count.textContent = "";
    return;
  }

  noResults.style.display = "none";
  count.textContent = `${list.length} command${list.length !== 1 ? "s" : ""} found`;

  list.forEach(cmd => {
    const card = document.createElement("div");
    card.className = `card cat-${cmd.category}`;

    // Format example — split by newline for multiple examples
    const exampleLines = cmd.example
      .split("\n")
      .map(line => `<div class="example-line">&gt; ${escapeHtml(line)}</div>`)
      .join("");

    card.innerHTML = `
      <div class="card-header">
        <span class="category-badge ${cmd.category}">${badgeLabel(cmd.category)}</span>
        <button class="copy-btn">Copy</button>
      </div>
      <div class="command-name">${escapeHtml(cmd.command)}</div>
      <div class="description">${escapeHtml(cmd.description)}</div>
      <div class="example-block">${exampleLines}</div>
    `;

    // Copy the first example line for this command
    const firstExample = cmd.example.split("\n")[0];
    card.querySelector(".copy-btn").addEventListener("click", () => copyCommand(firstExample));

    grid.appendChild(card);
  });
}

// ── Badge Labels ───────────────────────────────────────────
function badgeLabel(cat) {
  const labels = {
    network: "🌐 Network",
    user:    "👤 User & AD",
    disk:    "💾 Disk",
    system:  "🖥️ System",
    process: "⚙️ Process",
    remote:  "🔗 Remote"
  };
  return labels[cat] || cat;
}

// ── Search Filter ──────────────────────────────────────────
function filterCommands() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  let filtered = commands.filter(cmd => {
    const matchesSearch =
      cmd.command.toLowerCase().includes(query) ||
      cmd.description.toLowerCase().includes(query) ||
      cmd.example.toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "all" || cmd.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  renderCards(filtered);
}

// ── Category Filter ────────────────────────────────────────
function filterByCategory(category, btn) {
  activeCategory = category;

  // Update active button style
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  filterCommands();
}

// ── Copy to Clipboard ──────────────────────────────────────
function copyCommand(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

// ── Escape HTML ────────────────────────────────────────────
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ── Init ───────────────────────────────────────────────────
renderCards(commands);
