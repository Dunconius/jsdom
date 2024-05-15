const themes = {
    light: {
        background: "#ffffff",
        color: "blue"

    },
    dark: {
        background: "#202020",
        color: "white"

    }
};

function changeCssTheme(themeName){
    for (const variable in themes[themeName]){
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable])
        console.log('Updated CSS variable --' + variable);
    }
}

changeCssTheme("dark");