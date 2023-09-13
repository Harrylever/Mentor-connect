import { render } from '@testing-library/react';
import React from 'react';
import fs from 'fs';

const wrapper = ({ children }) => <div>{ children }</div>;

export default function CustomRenderView(ui, options) {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement('style');
  style.innerHTML = fs.readFileSync('src/test/index.css', 'utf8');
  document.head.appendChild(style);

  return view;
}

export * from '@testing-library/react';
export { CustomRenderView as render };
