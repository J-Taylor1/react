import React from 'react';

function End ({index, clearList}) {
    return (
    <div>
        <button onClick={() => clearList(index)}>Remove All</button>
    </div>
    );
}

export default End;