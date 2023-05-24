const { Titlebar } = require("custom-electron-titlebar")

window.addEventListener('DOMContentLoaded', () => {

    const options = {
        titleHorizontalAlignment: 'left',
        tooltips: {
            minimize: 'Скрыть',
            maximize: 'Раскрыть',
            restoreDown: 'Уменьшить',
            close: 'Закрыть'
          },
    };

  new Titlebar(options);
});