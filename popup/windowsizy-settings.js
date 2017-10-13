document.addEventListener("click", (e) => {
    const desiredSize = JSON.parse(e.target.dataset.size);

    desiredSize.width
    desiredSize.height

    browser.windows.getCurrent().then(function(windowData){
        browser.windows.update(windowData.id,desiredSize)
    })
})