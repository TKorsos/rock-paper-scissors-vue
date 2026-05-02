# 🪨📄✂️ Kő‑Papír‑Olló – Vue 3 játék

Egy modern, animált, statisztikát vezető Kő‑Papír‑Olló játék, Vue 3 + Vite alapokon.  
A játék LocalStorage‑be menti az állapotot, így oldalfrissítés után is minden megmarad.

---

## ✨ Funkciók

- 🎮 Játékos vs. Gép  
- 🤖 Gép gondolkodás animáció  
- 📊 Pontszámláló  
- 📈 Statisztika (győzelem / vereség / döntetlen)  
- 💾 LocalStorage mentés  
- 🔄 Reset gomb  
- ⚡ Vite gyors fejlesztői környezet  
- 🎨 Tailwind CSS támogatás (később bővíthető)  

---

## 📦 Telepítés

```sh
npm install
```

---

## ▶️ Fejlesztői mód indítása

```sh
npm run dev
```

---

## 🏗 Build készítése

```sh
npm run build
```

---

## 🗂 Projekt felépítése

```sh
src/
  components/
    ChoiceButtons.vue
    ResultView.vue
    ScoreBoard.vue
    StatsBoard.vue
    ResetButton.vue
  App.vue
  main.ts
public/
  index.html
vite.config.ts
```

---

## 🎮 Játékmenet

- A játékos kiválasztja a Kő / Papír / Olló opciók egyikét.  
- A gép 1 másodpercig gondolkodik, majd választ.  
- A rendszer kiértékeli az eredményt:  
  - 🟢 Nyertél  
  - 🔴 Vesztettél  
  - ⚪ Döntetlen  
- A pontszámok és statisztikák automatikusan mentődnek LocalStorage‑be.  

---

## 💾 LocalStorage

A játék az alábbi adatokat menti:

- játékos pontszám  
- gép pontszám  
- győzelmek  
- vereségek  
- döntetlenek  
- utolsó választások  

A reset gomb mindent töröl (pontszámok + statisztika + választások).