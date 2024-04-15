import React, { useState } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeContent = (index) => {
    setActiveIndex(index);

    const contents = document.querySelectorAll('.content');
    contents.forEach((content, i) => {
      content.style.display = i === index ? 'block' : 'none';
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    dots[index].classList.add('active');
  };

  return (
    <div>
      <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>Content 1</div>
      <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>Content 2</div>
      <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>Content 3</div>

      <a href="#" className="dot" onClick={() => changeContent(0)}>Dot 1</a>
      <a href="#" className="dot" onClick={() => changeContent(1)}>Dot 2</a>
      <a href="#" className="dot" onClick={() => changeContent(2)}>Dot 3</a>
    </div>
  );
}

export default Slider;
