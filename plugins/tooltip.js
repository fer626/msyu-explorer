(() => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

  window.addEventListener('resize', (ele) => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)    
  })
  window.addEventListener('load', (ele) => {    
    [...document.querySelectorAll('.ico-app')].forEach((v, k, arr) => {
      v.addEventListener('mouseenter', (ele) => {
        let tooltip = ele.target.querySelector('.tooltip')
        if (!isFullVisible(tooltip)) {
          console.log('ist\'n fully viewed!')
          getVisiblePositionLoss(tooltip)
        }
      })
    })
  })
})();

function isFullVisible (ele) {
  let ePos = ele.getBoundingClientRect()
  console.log('coordenates: ', ePos)
  return ePos.left >= 0 && ePos.top >= 0 && 
      window.screen.height >= ePos.bottom && 
      window.screen.width >= ePos.right
}
function getVisiblePositionLoss (ele) {
  let taskbar = document.querySelector('.taskbar')
  const newLeft = ((window.screen.width - ele.clientWidth) / 2) + 'px'

  console.log('newLeft', newLeft)

  ele.style.left = newLeft

  console.log('newPosition:', ele.getBoundingClientRect())

  // const newTop = (((window.innerHeight - taskbar.clientHeight) - 5) - ele.clientHeight) + 'px'
  // console.log('top calc:', newTop)
  // ele.style.top = newTop

  // console.log('tolbar new positionl:', ele.getBoundingClientRect())
  // console.log('bottom tootip:', taskbar.getBoundingClientRect().top + 5)
  // console.log('position taskbar:', taskbar.getBoundingClientRect())
  // console.log('Height taskbar:', taskbar.clientHeight)
  // console.log('real window height:', (window.innerHeight - taskbar.clientHeight) - 5)
  // console.log('real toast position:', ((window.innerHeight - taskbar.clientHeight) - 5) - ele.clientHeight)
}
