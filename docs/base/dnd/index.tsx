import * as React from 'react';

export default () => {
  function dragstartHandler(ev: React.DragEvent<HTMLParagraphElement>) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer!.setData('text/plain', (ev.target as any).id);
    ev.dataTransfer.dropEffect = 'copy';
  }

  function dragOverHandler(ev: React.DragEvent<HTMLParagraphElement>) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
  }

  function dropHandler(ev: React.DragEvent<HTMLParagraphElement>) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData('text/plain');
    const targetNode = document.getElementById(data)!.cloneNode(true);
    (ev.target as HTMLParagraphElement).appendChild(targetNode);
  }

  return (
    <div>
      <p id="p1" draggable onDragStart={dragstartHandler}>
        This element is draggable.
      </p>
      <p
        id="target"
        style={{ border: '1px solid red' }}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        Drop Zone
      </p>
    </div>
  );
};
