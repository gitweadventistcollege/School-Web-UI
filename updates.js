import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

/* Firebase Config */
const firebaseConfig = {
  apiKey: "AIzaSyDz4mIL0UdEz8sq6AladHrDQAPQQN12BZ0",
  authDomain: "college-adv-de-gtwe.firebaseapp.com",
  databaseURL: "https://college-adv-de-gtwe-default-rtdb.firebaseio.com",
  projectId: "college-adv-de-gtwe",
  storageBucket: "college-adv-de-gtwe.appspot.com",
  messagingSenderId: "951411885894",
  appId: "1:951411885894:web:ade65f06923987b21c8747",
  measurementId: "G-413WQW7EEP"
};

/* Init */
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* DOM targets */
const newsContainer = document.getElementById("publicNews");
const holidayContainer = document.getElementById("publicHoliday");
const toggleBtn = document.getElementById("toggleHolidayBtn");
const updatesWrapper = document.querySelector(".updates-wrapper");
const holidayCol = document.getElementById("holidayColumn");

/* Helpers */
function extractYouTubeId(url) {
  if (!url) return "";
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
}
function youtubeEmbedUrl(link) {
  const id = extractYouTubeId(link);
  return id ? `https://www.youtube.com/embed/${id}` : "";
}

/* Render News */
function renderNews(list) {
  newsContainer.innerHTML = "";
  if (!list.length) {
    newsContainer.innerHTML = "<p>No news available.</p>";
    return;
  }

  list.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "news-card";

    const img = document.createElement("img");
    img.src = item.image || "images/default-news.jpg";
    img.alt = item.title;
    wrapper.appendChild(img);

    const content = document.createElement("div");
    content.className = "news-content";

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    content.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = item.description;
    content.appendChild(p);

    if (item.youtube) {
      const iframe = document.createElement("iframe");
      iframe.src = youtubeEmbedUrl(item.youtube);
      iframe.width = "100%";
      iframe.height = "250";
      iframe.setAttribute("allowfullscreen", "true");
      content.appendChild(iframe);
    }

    const dateEl = document.createElement("small");
    dateEl.textContent = new Date(item.dateISO).toLocaleDateString();
    content.appendChild(dateEl);

    wrapper.appendChild(content);
    newsContainer.appendChild(wrapper);
  });
}

/* Render Holiday Packages */
function renderHolidays(list) {
  holidayContainer.innerHTML = "";
  if (!list.length) {
    holidayContainer.innerHTML = "<p>No holiday packages yet.</p>";
    return;
  }

  list.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "holiday-card";

    const h4 = document.createElement("h4");
    h4.textContent = item.title;
    wrapper.appendChild(h4);

    const p = document.createElement("p");
    p.textContent = item.description;
    wrapper.appendChild(p);

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.className = "download-btn";
    link.textContent = "📥 Download Package";
    wrapper.appendChild(link);

    holidayContainer.appendChild(wrapper);
  });
}

/* Firebase Listeners */
onValue(ref(db, "updates/news"), snap => {
  const data = snap.val() || {};
  const list = Object.values(data);
  list.sort((a, b) => (b.dateISO || b.id).localeCompare(a.dateISO || a.id));
  renderNews(list);
});

onValue(ref(db, "updates/holidays"), snap => {
  const data = snap.val() || {};
  const list = Object.values(data);
  renderHolidays(list);
});

/* Toggle Holiday Section */
toggleBtn.addEventListener("click", () => {
  holidayCol.classList.toggle("active");
  updatesWrapper.classList.toggle("with-holiday");

  if (holidayCol.classList.contains("active")) {
    toggleBtn.textContent = "❌ Hide Holiday Packages";
  } else {
    toggleBtn.textContent = "📦 Show Holiday Packages";
  }
});
