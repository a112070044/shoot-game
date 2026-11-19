# 專案技能（Claude Code Skills）

這個資料夾裡的技能會在任何以這個專案開啟的 Claude Code 對話中自動載入（雲端或本機都一樣）。
Claude 會在需要時讀取對應的技能，照裡面的流程與最佳做法開發。

## 來源

| 技能 | 來源 | 授權 |
|---|---|---|
| fps-shooter、game-feel、performance-optimization、audio-design、game-ai、level-design、threejs-scene-setup、threejs-materials-lighting、threejs-gltf-loading、prototype-fast、game-docs | [gamedev-skills/awesome-gamedev-agent-skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills)（版本 `c6ca6c4`） | Apache-2.0，見 `_licenses/` |
| threejs-screen-space-ambient-occlusion、threejs-shadow-systems、threejs-bloom、threejs-exposure-color-grading、threejs-visual-validation、threejs-procedural-vfx | [scottstts/Threejs-Awesome-Graphics-Agent-Skills](https://github.com/scottstts/Threejs-Awesome-Graphics-Agent-Skills)（版本 `53eb5a2`） | MIT，見 `_licenses/` |

修改：只保留與本專案（Three.js 網頁射擊遊戲）相關的技能；移除給其他 AI 工具用的 `agents/` 設定檔，以及 threejs-procedural-vfx 的大型範例程式。技能內容本身未修改。

## 移除或更新

- 不想用某個技能：刪掉它的資料夾即可。
- 更新：重新從上面的來源複製對應資料夾。
