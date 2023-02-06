# HTML
## slide
* <b>document.getElementById('id').scrollLeft</b>  
scrollLeft는 페이지의 가로 스크롤 위치를 구하거나, 설정할 수 있다. 처음 상태에서는 scrollLeft가 0이며, 오른쪽으로 일정 부분 스크롤했을 때 그 만큼 픽셀이 늘어난다. scrollLeft를 set할 때 컨텐츠의 최대 길이를 벗어나게 설정해도 바깥 영역으로 벗어나지 않는다. 
* <b>window.innerWidth</b>  
window.innerWidth는 현재 보여지는 페이지의 가로 길이에 해당한다. 즉, 엘리먼트의 scrollLeft 값에서 innerWidth만큼 더하면 컨텐츠의 다음 영역까지 보여줄 수 있도록 표시할 수 있다.

# CSS
## animation css
* <b>transition</b>  
transition속성은 애니메이션의 속도를 조절하는 용도로 사용된다. 만약 css의 배경값을 흰색에서 검정색으로 변경하고자 할 경우 트랜지션을 설정해주지 않으면 변화가 즉시 일어난다.  
트랜지션은 딜레이를 설정하여 언제 애니메이션을 시작할지, 트랜지션 대상 CSS 프로퍼티는 어떤 것인지, 트랜지션을 얼마나 지속할지,   
* transition-property: (대상 css 속성, 기본값은 all, 트랜지션 대상이 될 수 없는 CSS프로퍼티도 있음)width, background-color  
* transition-duration: (대상 css 속성의 트랜지션 지속값)2s, 2s (ms, s)
* transition-timing-function:   
ease - 기본값이며 느리게 시작하여 점점 빨라졌다가 느려지면서 종료한다.  
linear - 시작부터 종료까지 등속운동한다.  
ease-in - 느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속운동한다.  
ease-out - 일정한 속도의 등속으로 시작해서 점점 느려지며 종료한다.  
ease-in-out - ease와 비슷하게 느리게 시작하여 느려지면서 종료한다.  
* transition-delay: 트랜지션이 실제로 시작하기 전에 대기하는 시간을 설정한다. (ms, s)  
* 한 줄로 transition을 정의하는 방법: transition-duration은 반드시 지정해야 한다.  
transition: property, [duration], timing-function, delay  
  
* <b>transform</b>  
transform속성은 요소를 회전하거나, 확대/축소하거나, 형태를 변형할 수 있다.  
* rotate: 요소를 회전시킬 수 있다. 음수는 반시계 방향으로 회전시킨다.(deg)  
rotate(angle) - 중심점을 기준으로 회전시킨다.
rotateX(angle) - X축 기준으로 회전시킨다(위 아래로 뒤집어지는 효과).  
rotateY(angle) - Y축 기준으로 회전시킨다(옆으로 뒤집어지는 효과).  
* translate: 요소를 이동시킬 수 있다. 음수는 왼쪽으로 이동시킨다.
translateX(50px) - 오른쪽으로 50px 만큼 이동시킨다.
translateY(50px) - 아래쪽으로 50px 만큼 이동시킨다.  
translate(50px, 50%) - 오른쪽 50px, 아래쪽 50% 이동시킨다.  
* scale: 요소를 확대 또는 축소시킬 수 있다. 1보다 큰 수는 확대, 1보다 작은 수는 축소이다.  
scale(2.0) - 가로/세로를 2배 확대시킨다.
scaleX(2.0) - 가로를 2배 확대시킨다.  
scaleY(2.0) - 세로를 2배 확대시킨다.  
* skew: 요소를 비틀수 있다.
skewX(30deg) - 가로 방향으로 30도 비튼다.  
skewY(30deg) - 세로 방향으로 30도 비튼다.  
skew(30deg, 60deg) - 가로 방향 30도, 세로 방향 60도로 비튼다.   
  
## slider / slider__arrow-left
* <b>slider</b>  
<b>position: relative</b>  
position: relative의 용도는 자신 요소의 현재 위치를 기준으로 상대 위치를 지정하여 배치하기 위해 사용한다.  
css속성 중 top, left, right, bottom. z-index 속성들은 position이 static인 상태(position의 기본값)에서는 지정해도 위치가 변하지 않는데, relative 또는 fixed 상태일 때 해당 속성들의 기준점에서 얼마만큼 떨어진 위치를 지정할 수가 있다.  
relative의 기준점은 자기 자신 요소이며, fixed의 기준점은 브라우저 화면(윈도우)기준이다.   
  
* <b>slider__arrow-left</b>  
<b>position: absolute</b>    
absolute 속성의 기준점은 상위 요소의 배치 기준으로 설정된다. 상위 요소가 position: static이 아닌 첫 번째 상위 요소의 배치 기준을 기준점으로 잡지만, 그러한 요소가 없다면 DOM트리 최상위에 있는 body요소가 배치 기준이 된다. 보통의 사용 용도는 부모 요소를 기준점으로 잡아 top, left, right, bottom을 설정하기 위함이다.  
즉, 부모 요소인 slider의 relative 속성은 자식 요소의 기준점을 같도록 하기 위해 설정했다고 볼 수 있다.  
  
<b>background-clip: content-box</b>
border-box 속성은 border css가 적용되어 있을 때 해당 border 영역을 포함하여 안쪽 영역까지 배경을 채운다.  
padding-box 속성은 padding css가 적용되어 있을 때 해당 padding 영역을 포함하여 안쪽 영역까지 배경을 채운다.
content-box 속성은 border, padding 영역을 제외하고 내용에 해당하는 영역만 배경을 채운다.  
  
<b>box-sizing: border-box</b>
css의 엘리먼트 크기를 지정하는 width, height를 사용할 때 border 또는 padding, margin 값을 제외하고 실제 컨텐츠 크기만을 지정하기 때문에 정확한 크기를 지정하기 어렵다.  
<b>box-sizing: border-box</b> 속성을 사용하면 border 또는 padding, margin값을 모두 합산하여 컨텐츠 크기를 지정할 수 있다.  
  
* <b>row__posters</b>
<b>overflow-x / overflow-y</b>
박스(div)가 담는 컨텐츠의 내용이 박스 크기보다 클 때 화면에 어떻게 표시할 지 지정하는 속성이다. overflow속성이 없을 경우(또는 overflow 속성이 visible일 경우) 내용이 박스 밖으로 밀려나와도 그대로 보여준다.  
hidden 속성 값은 밀려난 내용을 잘라버린다.  
scroll 속성 값은 박스 크기 내에서 잘린 부분에 대해 스크롤링 가능하게 한다. 기본적으로 텍습트나 이미지같은 인라인 요소들은 가로로 공간이 부족할 경우 자동으로 줄바꿈 처리가 되기 때문에 가로 스크롤링을 원한다면 white-space: nowrap;을 지정하면 된다.  
  
* <b>scroll-behavior: smooth</b>  
동일한 화면의 컨텐츠에서 다른 컨텐츠로 넘어갈 때 스크롤 처리를 부드럽게 해준다.
