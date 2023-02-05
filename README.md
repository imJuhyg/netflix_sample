## Row.css

### slider / slider__arrow-left
* <b>slider</b>  
<b>position: relative</b>  
position: relative의 용도는 자신 요소의 현재 위치를 기준으로 상대 위치를 지정하여 배치하기 위해 사용한다.  
css속성 중 top, left, right, bottom. z-index 속성들은 position이 static인 상태(position의 기본값)에서는 지정해도 위치가 변하지 않는데, relative 또는 fixed 상태일 때 해당 속성들의 기준점에서 얼마만큼 떨어진 위치를 지정할 수가 있다.  
relative의 기준점은 자기 자신 요소이며, fixed의 기준점은 브라우저 화면(윈도우)기준이다.  
* <b>slider__arrow-left</b>  
<b>position: absolute</b>    
absolute 속성의 기준점은 상위 요소의 배치 기준으로 설정된다. 상위 요소가 position: static이 아닌 첫 번째 상위 요소의 배치 기준을 기준점으로 잡지만, 그러한 요소가 없다면 DOM트리 최상위에 있는 body요소가 배치 기준이 된다. 보통의 사용 용도는 부모 요소를 기준점으로 잡아 top, left, right, bottom을 설정하기 위함이다.  
즉, 부모 요소인 slider의 relative 속성은 자식 요소의 기준점을 같도록 하기 위해 설정했다고 볼 수 있다.
