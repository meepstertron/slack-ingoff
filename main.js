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



const target = document.querySelector(".p-tab_rail__tab_container__context_target");

if (target) {
  target.insertAdjacentHTML("beforeend", `
    <div class="p-peek_trigger" role="none">
      <button class="c-button-unstyled p-tab_rail__button c-tabs__tab js-tab c-tabs__tab--full_width"
        data-qa="tabs_item"
        id="unified-files"
        aria-label="Files"
        aria-describedby="tab_rail_tab_item_description_unified-files"
        aria-haspopup="false"
        role="tab"
        tabindex="-1"
        aria-selected="false"
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
          <div aria-hidden="true" class="p-tab_rail__shortcut_hint" data-qa="tab_rail_shortcut_hint">4</div>
        </span>
      </button>
    </div>
  `);
} else {
  console.warn("Target container not found.");
}
