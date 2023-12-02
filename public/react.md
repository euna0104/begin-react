### 01. 리액트는 어쩌다 만들어졌을까?
1. 리액트는 Virtual DOM을 사용해서 만들었다.
2. Virtual DOM은 그냥 JS 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM을 보여주는 것 보다 속도가 훨씬 빠르다.
3. 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해서 렌더링한다.
4. 그리고 나서 실제 브라우저에 보여지고 있는 DOM과 비교를 한 후, 차이가 있는 곳을 감지하여 이를 실제 DOM에 패치시켜준다.

### 03. 나의 첫번째 리액트 컴포넌트
1. 컴포넌트는 일종의 UI조각이다. 그리고, 쉽게 재사용 할 수 있다.
2. public/index.html 내부에 
```
<div id="root"></div> 
```
를 찾아볼 수 있다. 리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부테 렌더링 되는 것이다.
3. 리액트 컴포넌트에서는 XML 형식의 값을 반환해줄 수 있는데 이를 JSX라고 부른다.

### 04. JSX의 기본 규칙 알아보기
1. JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 로 감싸서 보여준다.
2. JSX에서 태그에 style과 CSS class를 설정하는 방법은 HTML 에서 설정하는 방법과 다르다.
인라인 스타일은 객체 형태로 작성을 해야 하며, background-color 처럼 -로 구분되어 있는 이름들은 backgroundColor처럼 camelCase 형태로
작성해주어야 한다.
3. CSS class 를 설정 할 때에는 class=가 아닌 className= 으로 설정을 해주어야 한다.
4. 주석은 ```{/* 이런 형태 */}```로 작성한다.

### 05. props 를 통해 컴포넌트에게 값 전달하기
1. 우리가 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용한다.
2. 컴포넌트에게 전달되는 props는 파라미터를 통해 조회할 수 있다.
3. props는 객체 형태로 전달되며, 만약 ```name``` 값을 조회하고 싶다면 ```props.name```을 조회하면 된다.
4. 함수의 파라미터에서 비구조화 할당 (혹인 구조 분해) 문법을 사용하면 조금 더 코드를 간결하게 작성할 수 있다.
```
function Hello({ color, name }) {
    return <div style={{ color }}> 안녕하세요 {name}</div>
}
```
5. 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 ```defaultProps``` 라는 값을 설정한다.
```
Hello.defaultProps = {
    name: '이름없음'
}
```
6. 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, ```props.children```을 조회하면 된다. 
ex) 내부의 내용이 보여지게 하기 위해서는 Wrapper 에서 ```props.children``` 을 렌더링해주어야 한다.
```
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px'
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}
```