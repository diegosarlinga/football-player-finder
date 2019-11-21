import React from 'react';
import './Content.scss';

interface ContentProps {
  title: string;
  className?: string;
}
const Content: React.FC<ContentProps> = (props) => {
  return (
    <div className={props.className}>
      <h2 className="Content-header text-center bg-primary text-white">
        {props.title}
      </h2>
      <div className="content container-fluid Content-body">
        {props.children}
      </div>
    </div>
  );
}

export default Content;
