(() => {
  window.addEventListener('load', (ele) => {
    [...document.querySelectorAll('.ico-app')].forEach((v, k, arr) => {
      v.addEventListener('mouseenter', (ele) => {
        let tooltip = ele.target.querySelector('.tooltip')
        if (!isFullVisible(tooltip)) {
          getVisiblePositionLoss(tooltip)
        }
      })
    })
  })
})();

function isFullVisible (ele) {
  let ePos = ele.getBoundingClientRect()
  console.log('coordenates: ', ePos)
  return ePos.left >= 0 && ePos.top >= 0 && window.innerHeight >= ePos.bottom && window.innerWidth >= ePos.right
}
function getVisiblePositionLoss (ele) {
  let taskbar = document.querySelector('.taskbar')
  ele.style.left = ((window.innerWidth - ele.clientWidth) / 2) + 'px'
  console.log('top calc:', (((window.innerHeight - taskbar.clientHeight) - 5) - ele.clientHeight) + 'px')
  ele.style.top = (((window.innerHeight - taskbar.clientHeight) - 5) - ele.clientHeight) + 'px'

  // console.log('bottom tootip:', taskbar.getBoundingClientRect().top + 5)
  // console.log('position taskbar:', taskbar.getBoundingClientRect())
  // console.log('Height taskbar:', taskbar.clientHeight)
  // console.log('real window height:', (window.innerHeight - taskbar.clientHeight) - 5)
  // console.log('real toast position:', ((window.innerHeight - taskbar.clientHeight) - 5) - ele.clientHeight)
}
