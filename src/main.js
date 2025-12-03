document.addEventListener("DOMContentLoaded", () => {
  // --- 1. News Ticker Logic ---
  const newsData = [
    {
      id: 1,
      date: "2023-12-03",
      tag: "SYSTEM",
      title: "社团网站 1.0 版本上线测试",
      desc: "全新改版的社团主页正式上线，欢迎大家提交Bug。",
    },
    {
      id: 2,
      date: "2023-12-01",
      tag: "EVENT",
      title: "【招新】秋季学期招新面试名单公示",
      desc: "请各位通过初筛的同学注意查收邮件，按时参加面试。",
    },
    {
      id: 3,
      date: "2023-11-28",
      tag: "GAME",
      title: "自制RPG《异界幻想》Demo发布",
      desc: "开发部爆肝三个月的成果，现已开放内部下载试玩。",
    },
    {
      id: 4,
      date: "2023-11-20",
      tag: "NOTICE",
      title: "关于活动室借用的新规章制度",
      desc: "为了维护环境卫生，请大家离开时务必带走垃圾。",
    },
  ];

  let currentIndex = 0;
  let timer = null;
  const duration = 5000;

  const viewport = document.getElementById("newsViewport");
  const displayDay = document.getElementById("displayDay");
  const displayMonth = document.getElementById("displayMonth");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const tickerContainer = document.getElementById("newsTicker");

  function initTicker() {
    if (!viewport) return;

    // Generate DOM
    newsData.forEach((news, index) => {
      const div = document.createElement("div");
      div.className = `news-slide ${index === 0 ? "active" : ""}`;
      div.innerHTML = `
                <span class="news-tag">${news.tag}</span>
                <div class="news-title">${news.title}</div>
                <div class="news-desc">${news.desc}</div>
            `;
      viewport.appendChild(div);
    });

    updateDateDisplay(0);
    startTicker();
  }

  function updateDateDisplay(index) {
    if (!displayDay || !displayMonth) return;
    const dateObj = new Date(newsData[index].date);
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    displayDay.innerText = String(dateObj.getDate()).padStart(2, "0");
    displayMonth.innerText = months[dateObj.getMonth()];
  }

  function showSlide(index) {
    const slides = document.querySelectorAll(".news-slide");
    if (slides.length === 0) return;

    slides[currentIndex].classList.remove("active");

    currentIndex = index;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    slides[currentIndex].classList.add("active");
    updateDateDisplay(currentIndex);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startTicker() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, duration);
  }

  function pauseTicker() {
    clearInterval(timer);
  }

  // Event Listeners for Ticker
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      pauseTicker();
      nextSlide();
      startTicker();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      pauseTicker();
      prevSlide();
      startTicker();
    });
  }

  if (tickerContainer) {
    tickerContainer.addEventListener("mouseenter", pauseTicker);
    tickerContainer.addEventListener("mouseleave", startTicker);
  }

  // Initialize Ticker
  initTicker();

  // --- 2. Check-in Logic ---
  const checkInBtn = document.getElementById("checkInBtn");
  if (checkInBtn) {
    checkInBtn.addEventListener("click", () => {
      if (!checkInBtn.classList.contains("checked")) {
        checkInBtn.classList.add("checked");
        const icon = checkInBtn.querySelector("i");
        const span = checkInBtn.querySelector("span");
        if (icon) icon.className = "fa-solid fa-check";
        if (span) span.innerText = "已签到 (Day 24)";
      }
    });
  }

  // --- 3. API Logic (Group Size Query) ---
  const queryBtn = document.getElementById("queryBtn");
  const yearInput = document.getElementById("yearInput");
  const resultDisplay = document.getElementById("result");

  if (queryBtn && yearInput && resultDisplay) {
    queryBtn.addEventListener("click", async () => {
      const year = yearInput.value;
      if (!year) {
        resultDisplay.textContent = "请输入年份";
        return;
      }

      resultDisplay.textContent = "查询中...";

      try {
        // Use absolute URL to ensure it works even if frontend is not served by the backend
        const response = await fetch("http://localhost:11451/api/groupSize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ year: parseInt(year) }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.size) {
          resultDisplay.textContent = `${year}年群人数: ${data.size}`;
        } else {
          resultDisplay.textContent = "未找到该年份数据";
        }
      } catch (error) {
        console.error("Error:", error);
        resultDisplay.textContent = "查询失败，请稍后重试";
      }
    });
  }
});
