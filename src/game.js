const script = [
    // --- Prologue: Recruitment Fair ---
    {
        id: "start",
        background: "../assets/bg_recruitment_fair.png",
        sprite: null,
        speaker: "我",
        text: "今天是大学社团招新日，校园里热闹非凡。到处都是五颜六色的横幅和吆喝声。",
        choices: [
            { text: "四处看看", next: "meet_mascot" }
        ]
    },
    {
        id: "meet_mascot",
        background: "../assets/bg_recruitment_fair.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "？？？",
        text: "哎呀！这位同学，我看你骨骼惊奇，一定是二次元的好苗子！",
        choices: [
            { text: "你是谁？", next: "intro" }
        ]
    },
    {
        id: "intro",
        background: "../assets/bg_recruitment_fair.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "我是 Fantasy 动漫社的看板娘——幻幻！既然被我抓到了，就别想跑啦！来参观一下我们的社团吧！",
        choices: [
            { text: "好...好的", next: "enter_club" },
            { text: "被强行拖走...", next: "enter_club" }
        ]
    },

    // --- Chapter 1: Art Department ---
    {
        id: "enter_club",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "欢迎来到我们的秘密基地！首先带你看看我们的【美术部】，也就是所谓的“灵魂画师”聚集地！",
        choices: [
            { text: "哇，好多画板", next: "art_dept" }
        ]
    },
    {
        id: "art_dept",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "这里的大佬们正在为新刊绘制封面。你觉得这张海报的主色调应该用什么颜色好呢？",
        choices: [
            { text: "热情的红色", next: "art_red" },
            { text: "冷静的蓝色", next: "art_blue" }
        ]
    },
    {
        id: "art_red",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "红色！很有活力呢，就像我一样！美术部长一定会喜欢的。",
        choices: [
            { text: "继续参观", next: "write_dept" }
        ]
    },
    {
        id: "art_blue",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "蓝色吗？嗯...很有深度的感觉，适合那种忧郁的剧情片。",
        choices: [
            { text: "继续参观", next: "write_dept" }
        ]
    },

    // --- Chapter 2: Writing Department ---
    {
        id: "write_dept",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_shocked.png",
        speaker: "幻幻",
        text: "嘘...那边那群正在抓头发的人，就是【文案部】的成员。他们正在为剧本的结局吵架呢。",
        choices: [
            { text: "发生什么了？", next: "write_conflict" }
        ]
    },
    {
        id: "write_conflict",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "他们在纠结勇者最后是打败了魔王，还是爱上了魔王。你觉得呢？",
        choices: [
            { text: "当然是打败魔王！正义必胜！", next: "write_cliche" },
            { text: "爱上魔王！这才是反转！", next: "write_twist" }
        ]
    },
    {
        id: "write_cliche",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "王道剧情！虽然老套，但永远热血！文案组长给你点了个赞。",
        choices: [
            { text: "下一站", next: "dev_dept" }
        ]
    },
    {
        id: "write_twist",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_shocked.png",
        speaker: "幻幻",
        text: "哇，你的口味很独特嘛！不过现在的观众确实喜欢这种...禁忌之恋？",
        choices: [
            { text: "下一站", next: "dev_dept" }
        ]
    },

    // --- Chapter 3: Dev Department ---
    {
        id: "dev_dept",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "这边这片漆黑的角落...就是【开发部】。也就是制作这个网页游戏的地方。",
        choices: [
            { text: "看起来好专业", next: "dev_bug" }
        ]
    },
    {
        id: "dev_bug",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_shocked.png",
        speaker: "幻幻",
        text: "啊！程序猿小哥好像崩溃了，代码跑不起来。你能帮他看看哪里错了吗？",
        choices: [
            { text: "少了个分号 ;", next: "dev_fix" },
            { text: "重启试试", next: "dev_reboot" }
        ]
    },
    {
        id: "dev_fix",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "天哪！你居然一眼就看出来了！程序猿小哥感动得痛哭流涕，说你是救世主！",
        choices: [
            { text: "深藏功与名", next: "promo_dept" }
        ]
    },
    {
        id: "dev_reboot",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "重启确实能解决90%的问题...哦！真的跑起来了！不愧是万能修理法。",
        choices: [
            { text: "深藏功与名", next: "promo_dept" }
        ]
    },

    // --- Chapter 4: Promotion Department ---
    {
        id: "promo_dept",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "最后是我们的【宣发部】！这里有漂亮的Coser小姐姐和剪辑大神哦。",
        choices: [
            { text: "我想看小姐姐", next: "promo_slogan" }
        ]
    },
    {
        id: "promo_slogan",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "我们在想今年的招新口号。你觉得哪句更吸引人？",
        choices: [
            { text: "“二次元拯救世界！”", next: "promo_A" },
            { text: "“在这里，找到你的同伴。”", next: "promo_B" }
        ]
    },
    {
        id: "promo_A",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "中二魂燃烧起来了！这才是动漫社该有的气势！",
        choices: [
            { text: "结束参观", next: "epilogue" }
        ]
    },
    {
        id: "promo_B",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_explaining.png",
        speaker: "幻幻",
        text: "好温馨...确实，大家聚在一起才是最重要的。",
        choices: [
            { text: "结束参观", next: "epilogue" }
        ]
    },

    // --- Epilogue ---
    {
        id: "epilogue",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "参观了一圈，你觉得怎么样？Fantasy 动漫社是不是很有趣？",
        choices: [
            { text: "我想加入！", next: "join" }
        ]
    },
    {
        id: "join",
        background: "../assets/bg_clubroom.png",
        sprite: "../assets/mascot_happy.png",
        speaker: "幻幻",
        text: "太棒了！欢迎加入我们的大家庭！快去首页点击“加入我们”填表吧！",
        choices: [
            { text: "回到首页", action: "go_home" }
        ]
    }
];

// --- Engine Logic ---

let currentSceneId = "start";
const bgLayer = document.getElementById("background-layer");
const charSprite = document.getElementById("character-sprite");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");
const choiceOverlay = document.getElementById("choice-overlay");
const choicesContainer = document.getElementById("choices-container");
const dialogueBox = document.getElementById("dialogue-box");

function renderScene(sceneId) {
    const scene = script.find(s => s.id === sceneId);
    if (!scene) return;

    // Update Background
    if (scene.background) {
        bgLayer.style.backgroundImage = `url('${scene.background}')`;
    }

    // Update Sprite
    if (scene.sprite) {
        charSprite.src = scene.sprite;
        charSprite.classList.remove("hidden");
    } else {
        charSprite.classList.add("hidden");
    }

    // Update Text
    speakerName.innerText = scene.speaker;
    dialogueText.innerText = ""; // Clear text for typing effect
    typeText(scene.text);

    // Handle Choices
    currentSceneId = sceneId;
}

function typeText(text) {
    let index = 0;
    dialogueText.innerHTML = "";
    const interval = setInterval(() => {
        dialogueText.innerHTML += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 30); // Typing speed
}

function showChoices() {
    const scene = script.find(s => s.id === currentSceneId);
    if (!scene || !scene.choices) return;

    choicesContainer.innerHTML = "";
    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = choice.text;
        btn.onclick = () => {
            if (choice.action === "go_home") {
                window.location.href = "index.html";
            } else {
                choiceOverlay.classList.add("hidden");
                renderScene(choice.next);
            }
        };
        choicesContainer.appendChild(btn);
    });

    choiceOverlay.classList.remove("hidden");
}

// Click to advance
dialogueBox.addEventListener("click", () => {
    // If choices are already shown, do nothing (wait for choice)
    if (!choiceOverlay.classList.contains("hidden")) return;

    // Check if current scene has choices
    const scene = script.find(s => s.id === currentSceneId);
    if (scene && scene.choices) {
        showChoices();
    }
});

// Start Game
renderScene("start");
