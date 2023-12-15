
```html
<div id="div" style="position:relative;width:100px;height:100px;background-color: red"></div>

<script>
function drag(){
  let dragging = false
  let position = null
  let divBox = document.querySelector('#div')
  divBox.addEventListener('mousedown',function(e){
    dragging = true
    position = [e.clientX, e.clientY]
  })

  document.addEventListener('mousemove', function(e){
    if(dragging === false) return null
    const x = e.clientX
    const y = e.clientY
    const deltaX = x - position[0]
    const deltaY = y - position[1]
    let left = parseInt(divBox.style.left || 0)
    let top = parseInt(divBox.style.top || 0)
    if(left <= 0 )left = 0 // 左边区域限制
    if(top <= 0 )top = 0 // 头部区域限制
    divBox.style.left = left + deltaX + 'px'
    divBox.style.top = top + deltaY + 'px'
    position = [x, y]
  })
  document.addEventListener('mouseup', function(e){
    dragging = false
  })
}
```