const GITHUB_USERNAME = "TselotBeyene";

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function themeInit() {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

function escapeHtml(str) {
  return (str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadGitHubRepos() {
  const status = document.getElementById("githubStatus");
  const grid = document.getElementById("repoGrid");
  if (!status || !grid) return;

  status.textContent = "Loading repositories…";
  grid.innerHTML = "";

  try {
    const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`;
    const res = await fetch(url, { headers: { "Accept": "application/vnd.github+json" } });
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      status.textContent = "No public repositories found.";
      return;
    }

    status.textContent = `Showing ${Math.min(repos.length, 9)} recently updated repositories.`;

    grid.innerHTML = repos.map(repo => {
      const name = escapeHtml(repo.name);
      const desc = escapeHtml(repo.description || "No description yet.");
      const lang = escapeHtml(repo.language || "—");
      const stars = repo.stargazers_count ?? 0;
      const forks = repo.forks_count ?? 0;
      const updated = new Date(repo.updated_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

      return `
        <article class="card p-5">
          <div class="flex items-start justify-between gap-3">
            <h4 class="text-base font-extrabold tracking-tight">
              <a class="underline underline-offset-4 hover:no-underline" href="${repo.html_url}" target="_blank" rel="noreferrer">${name}</a>
            </h4>
            <span class="badge">${lang}</span>
          </div>

          <p class="mt-2 text-sm text-[hsl(var(--muted-foreground))]">${desc}</p>

          <div class="mt-4 flex flex-wrap items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
            <span class="pill">★ ${stars}</span>
            <span class="pill">⑂ ${forks}</span>
            <span class="pill">Updated: ${updated}</span>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            ${repo.homepage ? `<a class="btn btn-ghost text-sm" href="${repo.homepage}" target="_blank" rel="noreferrer">Live</a>` : ""}
            <a class="btn btn-primary text-sm" href="${repo.html_url}" target="_blank" rel="noreferrer">Code</a>
          </div>
        </article>
      `;
    }).join("");

  } catch (err) {
    console.error(err);
    status.textContent = "Could not load GitHub repositories (rate limit or network).";
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio Inquiry — ${name}`);
    const body = encodeURIComponent(
      `Hi Tselot,\n\n${message}\n\n— ${name}\n${email}`
    );

    window.location.href = `mailto:tselotbeyene70@gmail.com?subject=${subject}&body=${body}`;
  });
}

function initReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (els.length === 0) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function initToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 800) btn.classList.remove("hidden");
    else btn.classList.add("hidden");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function wireRepoRefresh() {
  document.getElementById("refreshRepos")?.addEventListener("click", loadGitHubRepos);
}

setYear();
themeInit();
initContactForm();
initReveal();
initToTop();
wireRepoRefresh();
loadGitHubRepos();
