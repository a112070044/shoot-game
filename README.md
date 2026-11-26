# shoot-game

「地下室 B2」— 第一人稱槍戰（Three.js，單一 `index.html`）。

- 以任何 HTTPS 靜態主機（例如 GitHub Pages）提供即可遊玩。
- **安裝成 App**：iPhone 用 Safari 開啟 → 分享 → 加入主畫面；Android 用 Chrome 開啟 → 選單 → 安裝應用程式。安裝後從主畫面開啟就是全螢幕，玩過一次之後沒有網路也能玩（手機遙控器模式除外，需要網路配對）。
- **手機直接玩**：陀螺儀或觸控瞄準、左半畫面移動、「開鏡」「換槍」「換彈」按鈕。
- **手機當遙控器**：在電腦／電視的瀏覽器開啟遊戲，按「手機當遙控器」，用手機掃 QR Code；直握手機把頂端指向螢幕，轉動手機瞄準。
- **桌機**：WASD、滑鼠、左鍵射擊／揮擊、右鍵開鏡、R 換彈、1–6 選基本武器、7–0 選掉落武器、Q／滾輪輪流切換。
- 基本武器：手槍、衝鋒槍、霰彈槍、狙擊步槍、斧頭、掃把（台灣傳統紅色塑膠掃把，攻擊弱但能把一群殭屍推開並暈眩）。
- 掉落武器：打倒殭屍有機率掉落武器箱（重型殭屍與首領機率較高），走過去撿起，子彈用完自動丟掉——加特林、火箭筒、榴彈發射器、手榴彈。爆炸有範圍傷害，離太近自己也會受傷。
- 設定：主選單（或暫停畫面）可調轉向靈敏度、音效與環境音音量、「減少震動與閃光」、顯示 FPS；電腦版另有「環境光遮蔽」（角落與物體底部的自然陰影，太吃力時會自動關閉）。
- 殭屍只追「最後看到你的位置」：躲到柱子後面不出聲，牠們會先去你原本的位置找；開槍或爆炸會暴露位置。
- 模式：生存（每波選強化、每 5 波首領）、停電（只剩槍燈）、限時獵殺（120 秒）。
- 地圖：**地下室**（水泥柱、木箱、鐵桶）與**義莊**（紅漆柱、一排排待運回鄉的棺木、神桌牌位、白紙「奠」字燈籠）。在主選單切換，每種模式都能搭配任一張地圖。
- 義莊裡大多是清朝殭屍，有些會從棺木旁直挺挺地立起來；環境音換成風聲、木頭嘎吱聲和遠處的搖鈴。
- 新怪物：**女鬼**（第 3 波起，白衣長髮、飄浮、能穿過柱子與棺木，靠近時尖叫）、**魔神仔**（第 4 波起，矮小快速、幾乎透明只看得到綠眼睛、沒有影子，靠近或被打中才現形）。
- 第一次玩會有新手教學；手機觸控有「輔助瞄準」（設定可關）；最佳分數依模式＋地圖分開記；結算畫面可以「分享戰績圖」。
- 暫停：手機右上角按鈕、電腦 Esc／P，切到背景會自動暫停。按住「換槍」往清單滑，手指停在哪把、放開就換哪把（滑到空白處放開＝取消）；長按不動也可以直接點選。

## 音效來源

`sfx/` 內的音檔由下列素材裁切、正規化後合併而成，全部為 CC0 1.0（公眾領域）授權，取自 OpenGameArt.org：

| 用途 | 素材 | 作者 |
|---|---|---|
| 四種槍聲 | The Free Firearm Sound Library（Walther PPQ、Carl Gustav M45、Benelli Nova、Tikka T3 近距離錄音） | Ylmir |
| 換彈匣、拉滑套、拉槍機 | Gun reload sounds、Handgun Reload Sound Effect | Joaken 等 |
| 霰彈槍上膛與裝彈 | Shotgun Reload Sound effects | — |
| 殭屍叫聲 | Zombies Sound Pack、Zombie moans、16 Monster Growls | Dome 等 |
| 踩水、落地濺水 | 40 CC0 water / splash / slime SFX | rockseller |
| 地下室滴水環境音 | Dripping water loop | supergamez2014 |
| 空間底噪 | Loopable Dungeon Ambience | IgnasD |
| 水滴 | Water Drops | — |
| 子彈擊中肉、石、金屬 | Impact | qubodup |
| 彈殼落地（銅板聲升調） | Coin Drop | — |
| 爆炸 | Explosions、Muffled Distant Explosion（兩者疊合） | compufox、Cokabear |
| 火箭發射 | Rocket launch | — |
| 揮擊破風聲 | Swishes Sound Pack | qubodup |

殘響不是錄音，而是依地下室尺寸（22×30×3.4 m）以程式模擬的脈衝響應。

## 3D 模型來源

`models/` 內的模型下載自 Sketchfab，已減面、縮小並壓縮貼圖後使用：

| 檔案 | 遊戲中的角色 | 原作 | 作者 | 授權 |
|---|---|---|---|---|
| `z1.glb` | 屍變（乾屍） | [Zombie](https://sketchfab.com/3d-models/zombie-6ff73b06cf63405d9557720c78cf5e0c) | [David Glynch](https://sketchfab.com/yaveselyigolovastic) | Sketchfab Standard |
| `z2.glb` | 屍變（焦屍） | [Zombie](https://sketchfab.com/3d-models/zombie-95ea4fdb12314e3f96963a0c99fe4f4d) | [Gowo.Stoyanov](https://sketchfab.com/Gowo.Stoyanov) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| `z3.glb` | 快速型 | [Zombie Monster Walk](https://sketchfab.com/3d-models/zombie-monster-walk-a271cc8970384f5b807a73fb7d1fe09e) | [LostBoyz2078](https://sketchfab.com/LostModels2025) | [CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/)（**不可商用**） |
| `z4.glb` | 重型、巨型首領 | [Meaty zombie](https://sketchfab.com/3d-models/meaty-zombie-a024c6592c85493ea36f66e74903736f) | [Karabas Studio](https://sketchfab.com/Alexei777) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |

修改內容：減少多邊形數量、貼圖縮小為 1024×1024 並轉為 WebP、移除地板平面與多餘的貼圖座標。走路與攻擊動作（z1、z2、z4）由遊戲程式驅動骨架產生。

清朝殭屍、所有槍枝、斧頭、掃把、手榴彈模型都由程式產生，不使用外部素材。

## 開發用的 Claude 技能

`.claude/skills/` 內有 15 個遊戲開發技能（射擊手感、效能、音效、敵人 AI、關卡、Three.js 光影與特效、快速原型與設計文件流程），以這個專案開啟 Claude Code 時會自動載入。來源與授權見 `.claude/skills/README.md`。
