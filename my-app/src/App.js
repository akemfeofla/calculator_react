import React from 'react';
import './calculator/calculator.css';

function App() {
  return (
    <MainContainer>
      <InputBox />
      <Buttons>
        <OperatorBtn value={'+'}>+</OperatorBtn>
        <OperatorBtn value={'-'}>-</OperatorBtn>
        <OperatorBtn value={'*'}>*</OperatorBtn>
        <OperatorBtn value={'/'}>/</OperatorBtn>
        <NumberBtn value={7}>7</NumberBtn>
        <NumberBtn value={8}>8</NumberBtn>
        <NumberBtn value={9}>9</NumberBtn>
        <OperatorBtn value={'C'}>C</OperatorBtn>
        <NumberBtn value={4}>4</NumberBtn>
        <NumberBtn value={5}>5</NumberBtn>
        <NumberBtn value={6}>6</NumberBtn>
        <NumberBtn value={1}>1</NumberBtn>
        <NumberBtn value={2}>2</NumberBtn>
        <NumberBtn value={3}>3</NumberBtn>
        <NumberBtn value={0}>0</NumberBtn>
        <OperatorBtn value={'.'}>.</OperatorBtn>
        <OperatorBtn value={'='}>=</OperatorBtn>
      </Buttons>
    </MainContainer>
  
  //컴포넌트 생성
    const Welcome =(props)=>{
      return <h2>Hello, {props.name}</h2>
      
      // 컴포넌트 사용
      const App = ()=>{
        return <div>
          <Welcome name = '수영'/>
          <Welcome name = '수영'/>
          <Welcome name = '수영'/>
        </div>
      }
    }
  );
}

export default App;
