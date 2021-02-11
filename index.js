const tabs = document.querySelectorAll('.tab__name'),
      contents = document.querySelectorAll('.tab__content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        removeActiveItem();

        let clickTab = tab.dataset.tab;

        tabs[clickTab - 1].classList.add('active')
        contents[clickTab - 1].classList.add('active')
    })
})


const removeActiveItem = () => {

    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    contents.forEach(content => {
        content.classList.remove('active')
    })
}
