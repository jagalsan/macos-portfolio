export const Icons = {
    SEARCH: 'search',
    DISK: 'disk',
    WRITE: 'write',
    FILE: 'file',
    X: 'x',
    IN: 'in',
    IG: 'ig'
  } as const;
  
  // Convert object values to a type
  export type Icon = typeof Icons[keyof typeof Icons];
  