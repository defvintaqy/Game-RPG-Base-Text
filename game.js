// ================= DATA DATABASE & SISTEM EKONOMI =================

const shopItems = {
    desa_0 :{
        "Ramuan Jamu": 25,
        "Bambu": 10,
        "Serat": 8,
        "Kulit": 15,

},
    desa_1: {
        "Ramuan Jamu": 25,
        "Bambu": 10,
        "Serat": 8,
        "Kulit": 15,

    },

    desa_2: {
        "Ramuan Jamu": 25,
        "Bambu": 15,
        "Kulit": 15,
        "Serat": 12
    },

    desa_3: {
        "Ramuan Jamu": 25,
        "Kulit": 20,
        "Bambu": 15,
        "Serat": 12
    },

    desa_4: {
        "Ramuan Jamu": 25,
        "Serat": 30,
        "Kulit": 20,
        "Bambu": 15
    },

    desa_5: {
        "Ramuan Jamu": 25,
        "Serat": 30,
        "Kulit": 20,
        "Bambu": 15

    }
};



const lootByDesa = {
    0: ["Bambu", "Serat", "Daging Kelinci"],
    1: ["Bambu", "Serat", "Daging Rusa", "Daging Kelinci"],
    2: ["Kulit", "Daging Celeng", "Bambu", "Serat", "Daging Rusa", "Daging Kelinci"],
    3: ["Kulit", "Serat", "Batu Panas"],
    4: ["Serat Langka", "Kulit Tebal", "Bambu", "Serat", "Daging Rusa", "Daging Kelinci"],
    5: ["Fragmen Cahaya", "Bambu", "Serat", "Daging Rusa", "Daging Kelinci"]
};

const magicSkills = {
    "Bumi Gonjang-Ganjing": { mp: 10, power: 45 },
    "Angin Lesus": { mp: 35, power: 150 },
    "Tirta Amerta": { mp: 40, power: 180 },
    "Api Brahmanda": { mp: 45, power: 220 },
    "Bayangan Sukma": { mp: 55, power: 300 },
    "Cakra Mahadewa": { mp: 70, power: 500 }
};



// ================= DATA NPC & DIALOG CLUE =================
const npcByDesa = {
    0: [
        "Tetua Desa",
        "Mbok Jamu",
        "Pandai Besi",
        "Anak Gembala",
        "Guru Ngaji",
        "Penjaga Hutan",
        "Dukun Desa",
        "Pedagang Keliling",
        "Petani Tua",
        "Bekas Prajurit"
    ],

    1: [
        "Tetua Wonosari",
        "Penari Topeng",
        "Penjaga Angin",
        "Empu Anyaman",
        "Pendeta Senyap",
        "Pengintai Bukit",
        "Dukun Angin",
        "Pedagang Kain",
        "Petani Jagung",
        "Veteran Perang"
    ],

    2: [
        "Tetua Pesisir",
        "Nelayan Tua",
        "Penjaga Mercusuar",
        "Pendeta Air",
        "Tabib Laut",
        "Penjaga Karang",
        "Dukun Samudra",
        "Pedagang Garam",
        "Pelaut Cacat",
        "Ksatria Tenggelam"
    ],

    3: [
        "Resi Gunung",
        "Penambang Lava",
        "Penjaga Kawah",
        "Empu Api",
        "Pertapa Panas",
        "Dukun Merapi",
        "Pedagang Batu",
        "Penjinak Salamander",
        "Pendosa Bertobat",
        "Ksatria Hangus"
    ],

    4: [
        "Ratu Rimba",
        "Pemburu Bayangan",
        "Penjaga Akar",
        "Pawang Siluman",
        "Pendeta Hutan",
        "Dukun Malam",
        "Pedagang Jimat",
        "Penyintas Kutukan",
        "Roh Penuntun",
        "Ksatria Hilang"
    ],

    5: [
        "Penjaga Gerbang Langit",
        "Pendeta Cahaya",
        "Penulis Takdir",
        "Penjaga Waktu",
        "Utusan Dewa",
        "Arwah Penimbang",
        "Dukun Surya",
        "Penjaga Relik",
        "Prajurit Cahaya",
        "Bayangan Takdir"
    ]
};

const bossCluesStory = [
  // Desa 0
  [
    "💬 Tetua Desa: 'Hanya serangan bumi bisa mengguncangnya, Kunto!'",
    "Mbok Jamu: 'Tidak ada yang bisa saya bantu.'",
    "Pandai Besi: 'Diam saja di rumah…'",
    "Anak Gembala: 'Dapatkan 3 bambu dan 2 serat, maka kamu dapat melatih skill bumi gonjang-ganjing!'",
    "Guru Ngaji: 'Tidak ada petunjuk, Kunto.'",
    "Penjaga Hutan: 'Tidak ada petunjuk, Kunto.'",
    "Dukun Desa: 'Tidak ada petunjuk, Kunto.'",
    "Pedagang Keliling: 'Tidak ada petunjuk, Kunto.'",
    "Petani Tua: 'Tidak ada petunjuk, Kunto.'",
        "Bekas Prajurit: 'Tidak ada petunjuk, Kunto.'"
  ],
  // Desa 1
  [
    "Tetua Wonosari: 'Angin Lesus bisa menembus pelindungnya'",
    "Penari Topeng: 'Tidak apapun yang bisa dicari dari saya.'",
    "Penjaga Angin: 'Diam saja, jangan ganggu, Kunto.'",
    "💬 Empu Anyaman: 'Hanya sihir angin yang bisa melukainya! Berhati-hatilah, Kunto.'",
    "Pendeta Senyap: 'Dapatkan 5 Bambu dan 4 Serat, maka kamu dapat melatih skill Angin Lesus.'",
    "Pengintai Bukit: 'Tidak ada petunjuk, Kunto.'",
    "Dukun Angin: 'Tidak ada petunjuk, Kunto.'",
    "Pedagang Kain: 'Tidak ada petunjuk, Kunto.'",
    "Petani Jagung: 'Tidak ada petunjuk, Kunto.'",
    "Vetreran Perang: 'Tidak ada petunjuk, Kunto.'"
  ],
  // Desa 2
  [
    "Tetua Pesisir: 'Tirta Amerta akan menembus kulit karangnya!'",
    "Nelayan Tua: 'Tidak ada petunjuk, Kunto.'",
    "💬 Penjaga Mercusuar: 'Hanya sihir air yang efektif!'",
    "Pendeta Air: 'Tidak ada petunjuk, Kunto.'",
    "Tabib Laut: 'Tidak ada petunjuk, Kunto.'",
    "Penjaga Karang: 'Dapatkan 6 Serat dan 3 Kulit untuk melatih skill Tirta Amerta'",
    "Dukun Samudra: 'Tidak ada petunjuk, Kunto.'",
    "Pedagang Garam: 'Tidak ada petunjuk, Kunto.'",
    "Pelaut Cacat: 'Tidak ada petunjuk, Kunto.'",
    "Ksatria Tenggelam: 'Tidak ada petunjuk, Kunto.'"
  ],
  // Desa 3
    [
    "Resi Gunung: 'Api Brahmanda hanya tunduk pada api murni.'",
    "Penambang Lava: 'Lava tidak bisa dilawan dengan baja biasa.'",
    "Penjaga Kawah: 'Empu Api tahu caranya.'",
    "💬 Empu Api: 'Gunakan Api Brahmanda, atau kau akan hangus.'",
    "Pertapa Panas: 'Panas ini bukan sembarang panas.'",
    "Dukun Merapi: 'Dukun Merapi menyimpan rahasia.'",
    "Pedagang Batu: 'Batu panas bisa jadi kunci.'",
    "Penjinak Salamander: 'Pedagang menjual batu inti.'",
    "Pendosa Tobat: 'Aku gagal… jangan ulangi.'",
    "Ksatria Hangus: 'Dapatkan 8 Serat dan 5 Kulit untuk melatih skill Api Brahmanda.'"
   ],
  // Desa 4 – Bayangan
  [
    "Ratu Rimba: 'Ratu Siluman hidup dari ketakutanmu.'",
    "Pemburu Bayangan: 'Bayangan tak bisa diserang sembarang.'",
    "Penjaga Akar: 'Hanya jiwa tenang yang selamat.'",
    "Pawang Siluman: 'Dapatkan Bayangan Sukma.'",
    "Penndeta Hutan: 'Kutukan melemah jika kau berani.'",
    "Dukun Malam: 'Dukun Malam tahu ritualnya.'",
    "Pedagang Jimat: 'Jimat hutan bisa menahan siluman.'",
    "Penyintas Kutukan: 'Jangan bertarung sendirian, Dapatkan 8 Kulit dan 6 Serat untuk melatih skill Bayangan Sukma.'",
    "Roh Penuntun: 'Aku kehilangan segalanya.'",
    "Ksatria Hilang: 'Ksatria hilang di kegelapan.'"
  ],
  // Desa 5 – Cahaya
 [
    "Penjaga Gerbang Langit: 'Batara Kala hanya tunduk pada cahaya sejati.'",
    "Pendeta Cahaya: 'Cahaya palsu akan menghancurkanmu.'",
    "Penulis Takdir: 'Takdir tidak bisa dilawan, hanya diterima.'",
    "Penjaga Waktu: 'Cakra Mahadewa adalah satu-satunya jalan. Dapatkan 12 Kulit dan 10 Serat untuk melatih skill Cakra Mahadewa.'",
    "Utusan Dewa: 'Dewa menguji, bukan menghukum.'",
    "Arwah Penimbang: 'Relik kuno membuka jalan.'",
    "Dukun Surya: 'Penjaga waktu telah memilihmu.'",
    "Penjaga Relik: 'Ini akhir segalanya.'",
    "Prajurit Cahaya: 'Sedikit yang kembali dari sini.'",
    "Bayangan Takdir: 'Takdir menantimu, Kunto.'"
],
];

// ================= PLAYER STATE =================
let p = {
    nama: "Kunto Wijaya",
    hp: 100, maxHp: 100, mp: 50, maxMp: 50,
    coin: 100, xp: 0, lv: 1,
    inv: {
        "Ramuan Jamu": 1
    },
    
    materials: { Bambu: 0, Serat: 0, Kulit: 0 },
    skills: [],
    atk: 15, def: 5, desaClear: 0,
    energy: 15, maxEnergy: 15,
    interactedNPCs: [],
    currentDesaIdx: 0
};

function addItem(item, qty = 1) {
    p.inv[item] = (p.inv[item] || 0) + qty;
}

function removeItem(item, qty = 1) {
    if (!p.inv[item]) return false;
    p.inv[item] -= qty;
    if (p.inv[item] <= 0) delete p.inv[item];
    return true;
}


const daftarDesa = [
    { id: 0, nama: "Karangdempel", boss: "Ki Lurah Sadis", magic: "Bumi Gonjang-Ganjing", hpB: 150, shop: "desa_0", weakness: "Bumi" },
    { id: 1, nama: "Wonosari", boss: "Nyi Ageng Kelam", magic: "Angin Lesus", hpB: 350, shop: "desa_1", weakness: "Angin" },
    { id: 2, nama: "Segoro Kidul", boss: "Pangeran Karang", magic: "Tirta Amerta", hpB: 600, shop: "desa_2", weakness: "Air" },
    { id: 3, nama: "Gunung Merapi", boss: "Empu Lava", magic: "Api Brahmanda", hpB: 900, shop: "desa_3", weakness: "Air" },
    { id: 4, nama: "Rimba Purba", boss: "Ratu Siluman", magic: "Bayangan Sukma", hpB: 1300, shop: "desa_4", weakness: "Api" },
    { id: 5, nama: "Kahyangan", boss: "Batara Kala", magic: "Cakra Mahadewa", hpB: 2000, shop: "desa_5", weakness: "Cahaya" }
];

//global

let farmingCooldownEnd = 0;


// ================= CORE FUNCTIONS =================
function pindahDesa(idx) {
    p.currentDesaIdx = idx;
    renderScene(idx);
    showNotif(`🚶‍♂️ Kunto melakukan perjalanan ke ${daftarDesa[idx].nama}`);
}
const bossStats = {
    0: { atk: 20, def: 5 },    // Ki Lurah Sadis
    1: { atk: 35, def: 15 },   // Nyi Ageng Kelam
    2: { atk: 50, def: 25 },   // Pangeran Karang
    3: { atk: 70, def: 40 },   // Empu Lava
    4: { atk: 90, def: 60 },   // Ratu Siluman
    5: { atk: 120, def: 90 }   // Batara Kala
};


function showNotif(msg) {
    const area = document.getElementById("notification-area");
    const div = document.createElement("div");
    div.className = "notif";
    div.innerText = msg;
    area.appendChild(div);
    setTimeout(() => div.remove(), 2000);
}


// ================= REGENERASI MANA =================
setInterval(() => {
    if (p.mp < p.maxMp) {
        p.mp = Math.min(p.maxMp, p.mp + 5);
        updateUI();
    }
}, 1000);


function updateUI() {
    const nextXp = p.lv * 200;
    if (p.xp >= nextXp) {
        p.xp -= nextXp;
        p.lv++;
    
        // HP & MP
        p.maxHp += 40;
        p.maxMp += 20;
        p.hp = p.maxHp;
        p.mp = p.maxMp;
    
        // STAT TAMBAHAN TIAP LEVEL
        p.atk += 5;
        p.def += 5;
    
        showNotif("✨ LEVEL UP! ATK +5, DEF +5");
    }
    
    document.getElementById("player-stats").innerHTML = `
        <b>${p.nama} (Lv.${p.lv})</b><br>
        ❤️ HP: ${p.hp}/${p.maxHp} | 💧 MP: ${p.mp}/${p.maxMp} | 💰 Coin: ${p.coin}<br>
        ⚔️ ATK: ${p.atk} | 🛡️ DEF: ${p.def} | ⚡ Energi: ${p.energy}/15
    `;
    
   // ==== INVENTORY STRING (OBJECT) ====
let invStr = "";
for (let item in p.inv) {
    invStr += `${item} : ${p.inv[item]} | `;
}
if (invStr === "") invStr = "Kosong";

// ==== MATERIAL STRING ====
let matStr = "";
for (let m in p.materials) {
    if (p.materials[m] > 0) {
        matStr += `${m} : ${p.materials[m]} | `;
    }
}
if (matStr === "") matStr = "Kosong";

// ==== RENDER UI ====
document.getElementById("inventory-display").innerHTML = `
🎒 <b>Inventory:</b> ${invStr}<br>
🛠️ <b>Materials:</b> ${matStr}<br>
✨ <b>Magic:</b> ${p.skills.join(", ") || "Belum ada"}
`;

}


function renderNPCs() {
    const container = document.getElementById("npc-buttons");
    container.innerHTML = "";
    document.getElementById("npc-list").style.display = "block";

    const roles = npcByDesa[p.currentDesaIdx];

    roles.forEach((role, idx) => {
        const btn = document.createElement("button");

        btn.innerText =
            (p.interactedNPCs.includes(idx) ? "✅ " : "") + role;

        btn.onclick = () => {
            const info = bossCluesStory[p.currentDesaIdx][idx];

            // tandai pernah dikunjungi (sekali saja)
            if (!p.interactedNPCs.includes(idx)) {
                p.interactedNPCs.push(idx);
                renderNPCs();
            }

            showNotif(info);
            alert(`${role}:\n"${info}"`);
        };

        container.appendChild(btn);
    });
}



// ================= ALTERNATIF CARA MENDAPAT SKILL =================
const skillRituals = {
    "Bumi Gonjang-Ganjing": { Bambu: 3, Serat: 2 },
    "Angin Lesus": { Bambu: 5, Serat: 4 },
    "Tirta Amerta": { Serat: 6, Kulit: 3 },
    "Api Brahmanda": { Serat: 8, Kulit: 5 },
    "Bayangan Sukma": { Kulit: 8, Serat: 6 },
    "Cakra Mahadewa": { Kulit: 12, Serat: 10 }
};



// ================= FUNSI LATIH SKILL VIA RITUAL =================
function tryLearnSkill(skillName) {
    // 🔒 CEK SUDAH PUNYA SKILL
    if (p.skills.includes(skillName)) {
        showNotif(`ℹ️ Kamu sudah punya skill ${skillName}.`);
        return;
    }

    const ritual = skillRituals[skillName];

    // CEK RITUAL ADA
    if (!ritual) {
        showNotif("⚠️ Ritual skill tidak ditemukan!");
        return;
    }

    //CEK MATERIAL
    for (let m in ritual) {
        if ((p.materials[m] || 0) < ritual[m]) {
            showNotif("⚠️ Material ritual tidak cukup untuk mempelajari skill ini!");
            return;
        }
    }

    for (let m in ritual) {
        p.materials[m] -= ritual[m];
        if (p.materials[m] <= 0) delete p.materials[m];
    }

    // ✨ TAMBAH SKILL
    p.skills.push(skillName);

    showNotif(`🌪️ Kamu berhasil mempelajari ${skillName}!`);
    updateUI();
}

// ================= SHORTCUT LATIH SKILL DI MENU =================
function renderScene(idx) {
    const desa = daftarDesa[idx];
    p.currentDesaIdx = idx;
    p.interactedNPCs = [];
    
    document.getElementById("location-name").innerText = `📍 Desa ${idx + 1}: ${desa.nama}`;
    document.getElementById("story-text").innerText = `Kunto Wijaya memasuki ${desa.nama}. \nDesa ini dijajah oleh ${desa.boss}. Bicara pada 10 warga sebelum melawan!`;

    const btns = document.getElementById("action-buttons");
btns.innerHTML = "";
// ================= NAVIGASI DESA =================
daftarDesa.forEach((desa, i) => {
    if (i !== p.currentDesaIdx) {
        const btn = document.createElement("button");
        btn.innerText = `🗺️ Ke Desa ${i + 1}: ${desa.nama}`;
        btn.onclick = () => {
            showNotif(`🚶‍♂️ Perjalanan ke ${desa.nama} dimulai...`);
            renderScene(i);
        };
        btns.appendChild(btn);
    }
});

    // Tombol Aksi Utama
    createBtn("🌿 Berburu/Farm", () => doFarming());
    createBtn("🎲 Judi Dadu (20c)", () => doGambling());
    createBtn("🛒 Toko", () => openShop());
    
   // ✨ Shortcut Latih Skill Desa
if (p.currentDesaIdx === 0) {
    createBtn("🪄 Latih Bumi Gonjang-Ganjing", () =>
        tryLearnSkill("Bumi Gonjang-Ganjing")
    );
}

if (p.currentDesaIdx === 1) {
    createBtn("🌪️ Latih Angin Lesus", () =>
        tryLearnSkill("Angin Lesus")
    );
}
if (p.currentDesaIdx === 2)
    createBtn("💧 Latih Tirta Amerta", () => tryLearnSkill("Tirta Amerta"));

if (p.currentDesaIdx === 3)
    createBtn("🔥 Latih Api Brahmanda", () => tryLearnSkill("Api Brahmanda"));

if (p.currentDesaIdx === 4)
    createBtn("🌑 Latih Bayangan Sukma", () => tryLearnSkill("Bayangan Sukma"));

if (p.currentDesaIdx === 5)
    createBtn("✨ Latih Cakra Mahadewa", () => tryLearnSkill("Cakra Mahadewa"));

    const bossBtn = document.createElement("button");
    bossBtn.innerText =
    p.desaClear > desa.id
        ? "⚔️ LAWAN BOSS (ULANG)"
        : `🔒 LAWAN BOSS`;


    bossBtn.className = "boss-btn";
    bossBtn.onclick = () => {
        // kalau desa sudah clear, langsung lanjut
        if (p.desaClear > desa.id) {
            startBattle(desa);
            return;
        }
    
        // kalau belum clear, wajib bicara NPC
        if (p.interactedNPCs.length < 10) {
            showNotif(`🗣️ Bicara dengan ${10 - p.interactedNPCs.length} warga lagi!`);
            return;
        }
    
        startBattle(desa);
    };
    
    
    btns.appendChild(bossBtn);

    renderNPCs();
    updateUI();
}

function createBtn(t, f) {
    const b = document.createElement("button");
    b.innerText = t; b.onclick = f;
    document.getElementById("action-buttons").appendChild(b);
}

// ================= GAMEPLAY ACTIONS =================

function doFarming() {
    const now = Date.now();

    // kalau masih cooldown
    if (now < farmingCooldownEnd) {
        const sisaDetik = Math.ceil((farmingCooldownEnd - now) / 1000);
        showNotif(`⏳ Energi pulih dalam ${sisaDetik} detik`);
        return;
    }

    //  kalau energi habis → set cooldown
    if (p.energy <= 0) {
        showNotif("⚡ Energi habis! Memulihkan energi...");
        farmingCooldownEnd = now + 30 * 1000;

        setTimeout(() => {
            p.energy = p.maxEnergy;
            showNotif("⚡ Energi pulih sepenuhnya!");
            updateUI();
        }, 30 * 1000);

        return;
    }

    // 🔻 farming normal
    p.energy--;

    const lootList = lootByDesa[p.currentDesaIdx];
    const dapat = lootList[Math.floor(Math.random() * lootList.length)];

    if (dapat.includes("Daging")) {
        addItem(dapat);

        showNotif(`🏹 Buruan: ${dapat}`);
    } else {
        p.materials[dapat] = (p.materials[dapat] || 0) + 1;
        showNotif(`🌿 Material: ${dapat}`);
    }

    p.xp += 25;
    updateUI();

    //  kalau ini farm TERAKHIR → langsung trigger cooldown
    if (p.energy === 0) {
        showNotif("⏳ Energi habis, cooldown 30 detik dimulai");
        farmingCooldownEnd = now + 30 * 1000;

        setTimeout(() => {
            p.energy = p.maxEnergy;
            showNotif("⚡ Energi pulih sepenuhnya!");
            updateUI();
        }, 30 * 1000);
    }
}


function doGambling() {
    if (p.coin < 20) {
        showNotif("💸 UANGMU HABIS!! TOBAT DONG GAUSAH KEBANYAKAN JUDI.");
        return;
    }

    p.coin -= 20;
    showNotif("🎲 Kocok Dadu...");

    setTimeout(() => {
        const roll = Math.random();

        // 10% JACKPOT
        if (roll < 0.90) {
            p.coin += 120;
            showNotif("💎 JACKPOT!!! +120");

        // 40% MENANG BIASA
        } else if (roll < 0.90) {
            const win = Math.floor(Math.random() * 7) * 5 + 10;
            p.coin += win;
            showNotif(`💰 MENANG! +${win}`);

        // 50% KALAH
        } else {
            showNotif("💸 HAHAHA KALAH LUH");

            if (p.coin <= 0) {
                showNotif("⚠️ Kamu bangkrut akibat judi!");
            }
        }

        updateUI();
    }, 600);
}


function openShop() {
    const desa = daftarDesa[p.currentDesaIdx];
    const items = shopItems[desa.shop];
    let txt = `--- TOKO ${desa.nama.toUpperCase()} ---\n`;
    for(let i in items) txt += `- ${i}: ${items[i]} Coin\n`;
    txt += `\nKetik .beli [nama]`;
    document.getElementById("story-text").innerText = txt;
}


// ================= BATTLE SYSTEM =================

function startBattle(desa) {
    battleTurn(desa, desa.hpB, "Kunto menantang takdir!");
}
function battleTurn(desa, bHp, msg) {
    document.getElementById("story-text").innerHTML =
        `<b>VS ${desa.boss.toUpperCase()}</b><br>${msg}<br><br>HP Boss: ${bHp}`;

    const btns = document.getElementById("action-buttons");
    btns.innerHTML = "";

    // SERANG FISIK (isSkill = false)
    createBtn("🗡️ Serang Fisik", () =>
        executeTurn(desa, bHp, p.atk, "Kunto menyerang!", false)
    );

    // SKILL (isSkill = true)
    p.skills.forEach(sNama => {
        createBtn(`✨ ${sNama}`, () => {
            const s = magicSkills[sNama];
            if (p.mp < s.mp) return alert("Mana habis!");

            p.mp -= s.mp;
            if (s.heal) p.hp = Math.min(p.maxHp, p.hp + s.heal);

            executeTurn(
                desa,
                bHp,
                s.power,
                `Kunto merapal ${sNama}!`,
                true
            );
        });
    });
}


// ================= FUNSI EKSEKUSI MAGIC BUMI GONJANG-GANJING =================
function executeTurn(desa, bHp, kDmg, kMsg, isSkill) {
    const boss = bossStats[desa.id];

    let finalDmg = Math.max(5, kDmg - boss.def);

    // 2x Damage jika memakai Bumi Gonjang-Ganjing
    if (kMsg.includes("Bumi Gonjang-Ganjing")) finalDmg *= 2;

    // Weakness Angin Lesus
    if (desa.id === 1 && kMsg.includes("Angin Lesus")) {
        finalDmg *= 2;
        showNotif("🌪️ WEAKNESS TERKENA! Damage Angin Lesus 2x!");
    }

    // Boss kebal fisik
    if (desa.id === 2 && !isSkill) finalDmg = 5;

    // ===== DAMAGE KE BOSS =====
    let newBHp = bHp - finalDmg;

    // ===== LIFESTEAL RAMUAN JAMU =====
    if (p.lifesteal > 0 && isSkill) {
        const heal = Math.floor(finalDmg * p.lifesteal);
        p.hp = Math.min(p.maxHp, p.hp + heal);
        showNotif(`🩸 Lifesteal aktif! HP +${heal}`);
    }

    let bossAtk = Math.max(5, boss.atk - p.def);

    // ===== MENANG =====
    if (newBHp <= 0) {
        p.desaClear++;
        p.coin += 500;
        p.xp += 1000;
    
        if (!p.skills.includes(desa.magic)) p.skills.push(desa.magic);
    
        // === CEK DESA TERAKHIR (DESA 6) ===
        if (desa.id === 5) {
            alert(`AKHIR PERJALANAN! ${desa.boss} tumbang!`);
            showEpilogue();
            updateUI();
            return;
        }
    
        alert(`MENANG! ${desa.boss} musnah. Kunto menyerap Magic ${desa.magic}!`);
        renderScene(desa.id);
        updateUI();
        return;
    }
    

    // ===== BOSS BALAS =====
    p.hp -= bossAtk;

    if (p.hp <= 0) {
        showNotif("💀 Kunto tumbang! Diselamatkan warga desa...");

        setTimeout(() => {
            p.hp = Math.floor(p.maxHp * 0.5);
            p.mp = Math.floor(p.maxMp * 0.5);
            p.coin = Math.max(0, p.coin - 50);
            p.energy = p.maxEnergy;

            showNotif("⚠️ Penalti: -50 coin, HP & MP dipulihkan sebagian");
            renderScene(p.currentDesaIdx);
            updateUI();
        }, 800);

        return;
    }

    battleTurn(
        desa,
        newBHp,
        `${kMsg} (-${finalDmg})<br>${desa.boss} membalas (-${bossAtk} HP)`
    );

    updateUI();
}



// ================= INTEGRASI DI COMMAND PARSER =================
function prosesCommand() {
    const input = document.getElementById("cmdInput");
    const val = input.value.trim();
    if (!val) return;

    const cmd = val.split(" ")[0];
    const target = val.slice(cmd.length + 1);

    // ================= JUAL =================
    if (cmd === ".jual") {

        // Jual item inventory
        if (p.inv[target] && p.inv[target] > 0) {
            p.inv[target]--;
            if (p.inv[target] === 0) delete p.inv[target];

            p.coin += 15;
            showNotif(`💰 Jual ${target} +15c`);
            updateUI();
        }

        // Jual material
        else if (p.materials[target] && p.materials[target] > 0) {
            p.materials[target]--; // ❌ jangan delete key

            p.coin += 10;
            showNotif(`💰 Jual material ${target} +10c`);
            updateUI();
        }

        else {
            showNotif(`⚠️ Kamu tidak punya ${target}`);
        }
    }

    // ================= MAKAN =================
    else if (cmd === ".makan") {

        if (!p.inv[target] || p.inv[target] <= 0) {
            showNotif(`⚠️ Kamu tidak punya ${target}`);
        }

        else if (target === "Ramuan Jamu") {
            p.lifesteal = 0.5;
            removeItem(target, 1);
            showNotif("🧪 Ramuan Jamu diminum! Lifesteal +50%");
            updateUI();
        }

        else if (target.includes("Daging")) {
            p.hp = Math.min(p.maxHp, p.hp + 30);
            removeItem(target, 1);
            showNotif("🍖 Nyam! HP bertambah");
            updateUI();
        }

        else {
            showNotif("⚠️ Item ini tidak bisa dimakan!");
        }
    }

    // ================= BELI =================
    else if (cmd === ".beli") {
        const desa = daftarDesa[p.currentDesaIdx];
        const items = shopItems[desa.shop];
        const harga = items[target];

        if (!harga) {
            showNotif(`⚠️ Barang ${target} tidak tersedia!`);
        }
        else if (p.coin < harga) {
            showNotif(`⚠️ Coin tidak cukup!`);
        }
        else {
            p.coin -= harga;

            // material vs item
            if (Object.prototype.hasOwnProperty.call(p.materials, target)) {
                p.materials[target] = (p.materials[target] || 0) + 1;
                showNotif(`🧺 Membeli material ${target}`);
            } else {
                addItem(target, 1);
                showNotif(`🛒 Membeli ${target}`);
            }

            updateUI();
        }
    }

    // ================= CHEAT TAMAT =================
    else if (cmd === ".tamat") {
        p.lv = 15;
        p.xp = 0;

        p.maxHp = 1200;
        p.hp = p.maxHp;

        p.maxMp = 700;
        p.mp = p.maxMp;

        p.atk = 220;
        p.def = 160;

        p.coin = 9999;
        p.energy = p.maxEnergy;
        p.lifesteal = 0.75;

        p.skills = [
            "Bumi Gonjang-Ganjing",
            "Angin Lesus",
            "Tirta Amerta",
            "Api Brahmanda",
            "Bayangan Sukma",
            "Cakra Mahadewa"
        ];

        p.desaClear = 5;

        showNotif("👁️ MODE TAMAT DIAKTIFKAN");
        alert(`🔥 MODE TAMAT 🔥
Lv 15 | Semua Skill Terbuka
Kahyangan Siap Ditantang`);

        renderScene(5);
        updateUI();
    }

    // ================= COMMAND TIDAK DIKENAL =================
    else {
        showNotif("❓ Command tidak dikenal");
    }

    // clear input
    input.value = "";
}


function showEpilogue() {
    document.getElementById("story-text").innerHTML = `
        <h2>🌅 EPILOG</h2>
        <p>
        Enam desa telah dilewati.<br>
        Enam kutukan telah dipatahkan.<br><br>

        Kunto berdiri di puncak tanah yang dulu retak oleh amarah para leluhur.
        Angin berhembus pelan, membawa aroma tanah basah dan doa yang akhirnya terjawab.<br><br>

        Tidak ada sorak kemenangan.<br>
        Tidak ada pesta perayaan.<br><br>

        Hanya satu hal yang tersisa:<br>
        <b>kedamaian.</b><br><br>

        Para roh kembali beristirahat.<br>
        Desa-desa mulai membangun ulang kehidupannya.<br><br>

        Nama Kunto mungkin akan dilupakan oleh waktu,<br>
        tapi langkahnya telah mengubah takdir tanah ini selamanya.
        </p>

        <hr>
        <b>🎮 TAMAT – TERIMA KASIH TELAH BERMAIN</b>
    `;

    document.getElementById("action-buttons").innerHTML = "";
}


// Inisialisasi Game
renderScene(0);
updateUI();