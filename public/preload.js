const { Titlebar } = require("custom-electron-titlebar")

window.addEventListener('DOMContentLoaded', () => {

    const options = {
    	backgroundColor: 'var(--bg-color)',
    	itemBGColor: 'var(--text-color)',
        titleHorizontalAlignment: 'left',
        tooltips: {
            minimize: 'Скрыть',
            maximize: 'Раскрыть',
            restoreDown: 'Уменьшить',
            close: 'Закрыть'
          },
    };

  new Titlebar(options);

  var root = document.getElementsByTagName( 'html' )[0];
  root.setAttribute( 'class', 'electron' );
  
});
