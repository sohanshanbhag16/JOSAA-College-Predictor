# 🎓 JOSAA College Predictor 2026

A sleek and accurate college predictor tool based on **JOSAA 2025 opening and closing ranks**. Built for JEE aspirants by an ex-aspirant, this tool allows users to filter colleges based on rank, category, gender, branch preferences, and institute types (IIT, NIT, IIIT). It supports intelligent filtering, ranking proximity sorting, and state-wise seat allocation logic.

---

<h1 align='center'><a target="_blank" href='https://sohanshanbhag16.github.io/JOSAA-College-Predictor/ui/index.html' >Go to Website</a>➡️</h1>

---

## 🔍 Features

- ✅ Predicts colleges based on JEE Main/Advanced rank
- 📊 Uses official JOSAA 2025 cutoff data
- 🔁 Smart sorting by proximity to user's rank
- 🎯 Filters by:
  - Category (OPEN, OBC-NCL, SC, ST, etc.)
  - Gender (Gender-Neutral, Female-only)
  - Branch(es) (Multi-select with Choices.js)
  - Institute Type (IIT, NIT, IIIT)
  - Home State for HS/OS quota filtering (NITs only)
- 💡 Optional percentile-to-rank estimator
- 💬 Feedback widget for user suggestions
- ⚡ Fast, responsive UI built with Bootstrap 5
---

## 🧠 How It Works

1. User enters rank or estimates it from JEE percentile.
2. Filters are applied (category, gender, branch, etc.).
3. JSON data is loaded and matched with filters.
4. Results are sorted by how close each college's closing rank is to user's rank.
5. NIT logic accounts for Home State quota vs Other State quota.
6. Matching colleges are displayed in a Bootstrap-styled table.

---

## 📌 Tech Stack

- HTML5, CSS3, JS (Vanilla)
- [Bootstrap 5](https://getbootstrap.com/)
- [Choices.js](https://github.com/Choices-js/Choices)
- Font Awesome / Bootstrap Icons

---

## 📢 Future Improvements

- 🔐 Firebase backend to collect feedback
- 📈 Graphs for trend analysis
- 🧮 Category-wise percentile → rank converters
