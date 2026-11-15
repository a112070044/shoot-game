# shoot-game

「地下室 B2」— 第一人稱槍戰（Three.js，單一 `index.html`）。

- 以任何 HTTPS 靜態主機（例如 GitHub Pages）提供即可遊玩。
- **手機直接玩**：陀螺儀或觸控瞄準、左半畫面移動、「開鏡」「換槍」「換彈」按鈕。
- **手機當遙控器**：在電腦／電視的瀏覽器開啟遊戲，按「手機當遙控器」，用手機掃 QR Code；直握手機把頂端指向螢幕，轉動手機瞄準。
- **桌機**：WASD、滑鼠、右鍵開鏡、R 換彈、1–4 / Q / 滾輪換槍。
- 武器：手槍、衝鋒槍、霰彈槍、狙擊步槍。
- 模式：生存（每波選強化、每 5 波首領）、停電（只剩槍燈）、限時獵殺（120 秒）。

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

殘響不是錄音，而是依地下室尺寸（22×30×3.4 m）以程式模擬的脈衝響應。
