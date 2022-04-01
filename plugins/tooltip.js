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
  let position, ePos = ele.getBoundingClientRect()
  if (ePos.left <= 0 && ePos.top >= 0 && window.innerHeight >= ePos.bottom && window.innerWidth >= ePos.right ||
        ePos.left >= 0 && ePos.top >= 0 && window.innerHeight >= ePos.bottom && window.innerWidth <= ePos.right) {
    ele.style.left = ((window.innerWidth - ele.clientWidth) / 2) + 'px'
    
    console.log('screen width:', window.innerWidth)
    console.log('element width:', ele.clientWidth)
    console.log('total free space screen:', (window.innerWidth - ele.clientWidth))
    console.log('left position calculated:', (window.innerWidth - ele.clientWidth) / 2)
    console.log('correct horizontal', ele.getBoundingClientRect())
  } else if (ePos.left >= 0 && ePos.top <= 0 && window.innerHeight >= ePos.bottom && window.innerWidth >= ePos.right ||
        ePos.left >= 0 && ePos.top >= 0 && window.innerHeight <= ePos.bottom && window.innerWidth >= ePos.right) {
    console.log('correct vertical', ele.getBoundingClientRect())
    let taskbar = document.querySelector('.taskbar')
    console.log('taskbar:', taskbar)
    // position = 'top', 'bottom'
  }
}