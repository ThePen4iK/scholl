const tabs = (triggerBtn, triggerSelector, activeClassTab, activeClassContent) => {
    const buttons = document.querySelectorAll(triggerBtn)
    const blocks = document.querySelectorAll(triggerSelector)
  console.log(buttons,'buttons')
    if (!buttons.length || !blocks.length) return
    const blocksHide = () => {
      buttons.forEach(item => item.classList.remove(activeClassTab))
      blocks.forEach(item => item.classList.remove(activeClassContent))
    }

    buttons.forEach((item, index) => {
      item.addEventListener('click', () => {
        blocksHide()

        item.classList.add(activeClassTab)

        if (blocks[index]) blocks[index].classList.add(activeClassContent)
      })
    })
}
export default tabs;
