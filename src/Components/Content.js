import React from 'react';

const Content = () => {
    const imageOne = 'https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YnJlYWtmYXN0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80';
    const imageTwo = 'https://wallpapershome.com/images/pages/pic_v/16604.jpg';
    return (
        <>
        <div className="menu-card">
            <img src={imageOne} className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">egg muffin</h2>
                <p className="mb-2">Cripsy, Delicoius and nutritiuos</p>
                <span>$16</span>
            </div>
        </div>
        <div className="menu-card">
            <img src={imageTwo} className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">The Hell Burger</h2>
                <p className="mb-2">Hot, Spice, Cripsy, and Delicoius</p>
                <span>$17</span>
            </div>
        </div>
        </>
    )
}

export default Content;
