import React, { useEffect, useState } from 'react';
import Shortcut, { ShortcutProps } from '../shortcut/ShortCut';

interface ShortcutListProps {
  shortcuts: ShortcutProps[];
}

const ShortcutList: React.FC<ShortcutListProps> = ({ shortcuts }) => {
  return (
    <div style={{ width: '90vw', height: '0', zIndex: 1 }}>
      {shortcuts.map((shortcut, index) => (
        <Shortcut
          key={index}
          icon={shortcut.icon}
          title={shortcut.title}
          onClick={shortcut.onClick}
          top={shortcut.top}
          left={shortcut.left}
          style={{ top: shortcut.top, left: shortcut.left }}
        />
      ))}
    </div>
  );
};

export default ShortcutList;
