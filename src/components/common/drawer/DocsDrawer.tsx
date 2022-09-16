import React from 'react';
// import { useSelector } from 'react-redux';

import { Button } from 'antd';


import '../_common.scss';

interface Props {
  title?: string;
  action?: any;
  docs: any;
  close?: any;
}

/**
 * `Import: /src/components/common/drawer/DocsDrawer.tsx`
 */


const DocsDrawer: React.FC<Props> = ({ title, docs, close, action }) => {

  return (
    <section className="docs-drawer">
      <header className="docs-drawer-header">
        <p className="title">{title}</p>
      </header>
      <div className="docs-list">
        {docs.map((item: any, index: number) => {
          return (
            <div className="doc-wrapper" key={index}>
              <p className="name">{item.file.original_file_name}</p>
              <Button type="text">
                View
              </Button>
            </div>
          );
        })}
      </div>
      <div className="button-wrapper">
        <Button type="text" onClick={close}>
          Close
        </Button>
      </div>
    </section>
  );
};

export default DocsDrawer;
