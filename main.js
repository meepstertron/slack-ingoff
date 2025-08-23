console.log("Slack-Ingoff Loaded! :D")

window.addEventListener('keydown', (e) => {
  if (e.key === 'F12') {
    // Try to open dev tools if possible
    if (window.require) {
      const { remote } = window.require('electron');
      remote.getCurrentWindow().webContents.openDevTools();
    } else {
      console.log('Electron remote module not accessible');
    }
  }
});

window.addEventListener("load", () => {
  const tryInjectButton = () => {
    const target = document.querySelector(".p-tab_rail__tab_menu");
    if (!target) return setTimeout(tryInjectButton, 100);

    // Avoid adding multiple buttons
    if (document.querySelector(".slacking-off-button")) return;

    target.insertAdjacentHTML("beforeend", `
      <div class="p-peek_trigger slacking-off slacking-off-button" role="none">
        <button class="c-button-unstyled p-tab_rail__button c-tabs__tab js-tab c-tabs__tab--full_width"
          aria-label="Slack-ing off"
          type="button">
          <span class="c-tabs__tab_content">
            <div class="p-tab_rail__button__icon">
              <div class="p-tab_rail__button__icon_inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-sparkles-icon lucide-sparkles">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 
                  1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 
                  1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594
                  l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 
                  1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </div>
            </div>
            <div class="position_relative">
              <div class="p-tab_rail__button__label">Slack-ing off</div>
            </div>
          </span>
        </button>
      </div>
    `);

    console.log("[Slack-ing off] button injected ✅");

   
    addButtonListeners();
  };

  const addButtonListeners = () => {
    const button = document.querySelector(".slacking-off-button");
    if (!button) return;

    button.addEventListener("click", () => {
      const child = window.open("", "", "width=600,height=400");
      if (child) {
        child.document.write(`
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Config</title>
    <style></style>
  </head>
  <body>
    <div style="margin-bottom: 20px;">
      <span style="font-size: xx-large;">Change yo settings</span> v0.0.1
    </div>

    

    <section style="outline: 1px dashed #ccc; padding: 5px;">
        <span style="font-size: larger;">Oooo Themes :D <button class="refetch-themes">Refetch from repo</button></span>
        <div class="theme-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
            <div class="theme-entry" style="outline: 1px solid;"><span>themename</span><span> by author</span><button>Apply theme</button></div>
        </div>

    </section>
  </body>
  <script>
    const fetchThemeList = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/meepstertron/slack-ingoff/2e114b8aa38c1e2e77a1e4f0b6cb194d11d29b96/themes/themes.json");
        const themes = await response.json();
        console.log("Fetched themes:", themes);
      } catch (error) {
        console.error("Error fetching themes:", error);
      }
    };

    const button = document.querySelector(".refetch-themes");
    button.addEventListener("click", () => {
      
    });
  </script>
</html>

        `);
        child.document.close();
      }
    });
  };

  tryInjectButton();
});


window.loadCSS = (href) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};


