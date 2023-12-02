import React, { useRef, useEffect, useState, useCallback } from 'react';

const StackAnimation = ({ commands }) => {
  const canvasRef = useRef(null);
  // const stack = [1, 2, 3, 4, 5]; // 예시로 사용할 스택 데이터
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stackHeight = 30; // 각 스택 요소의 높이
    const stackWidth = 30; // 요소 너비
    const stackBaseY = 10;
    const stackSpacing = 5; // 스택 요소 간 간격

    const drawStack = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      console.log("stack size: " + stack.length);
      // 스택 그리기
      ctx.fillStyle = '#3498db';
      for (let i = 0; i < stack.length; i++) {
        console.log(stack[i]);
        const x = i * (stackWidth + stackSpacing);
        const y = stackBaseY;
        console.log(x, y);
        ctx.fillStyle = '#3498db';
        ctx.fillRect(x, y, stackWidth, stackHeight);
        ctx.font = '15px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText(stack[i], x + 10, y + 25);
      }
    };

    drawStack();
  }, [stack]);

  const stackPush = useCallback((element) => {
    setStack((prevStack) => [...prevStack, element]);
  }, []);

  const stackPop = useCallback(() => {
    setStack((prevStack) => {
      const newStack = [...prevStack];
      newStack.pop();
      return newStack;
    });
  }, []);

  useEffect(() => {
    setStack([]);
    for (let i = 0; i < commands.length; i++) {
      console.log("cmd " + i);
      const e = commands[i];
      setTimeout(() => {
        if (e.cmd === 0) stackPop();
        if (e.cmd === 1) stackPush(e.el);
      }, i * 300);
    }
  }, [commands]);

  return (
    <canvas ref={canvasRef} width={500} height={200} />
  );
};

export default StackAnimation;
