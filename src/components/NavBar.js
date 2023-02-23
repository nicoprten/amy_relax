import React from 'react';

export const NavBar = () => {

    function scrollLink(e){
        let target = e.target.innerHTML.toLowerCase();
        let targetFixed = target.replace(' ', '-');
        targetFixed = targetFixed === 'logo' ? 'home' : targetFixed;
        // console.log(newTarget);
        document.getElementById(targetFixed).scrollIntoView();
    }

  return (
    <div className='flex justify-between bg-brown p-4'>
        <p onClick={(e) => scrollLink(e)}>LOGO</p>
        <ul className='flex gap-2 list-none text-green'>
            <li><button onClick={(e) => scrollLink(e)}>SOBRE MI</button></li>
            <li><button onClick={(e) => scrollLink(e)}>MASAJES</button></li>
            <li><button onClick={(e) => scrollLink(e)}>TURNOS</button></li>
            <li><button onClick={(e) => scrollLink(e)}>CONTACTO</button></li>
        </ul>
    </div>
  )
}
