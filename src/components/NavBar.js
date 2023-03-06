import React from 'react';

export const NavBar = () => {

    // function scrollLink(e){
    //     let target = e.target.innerHTML.toLowerCase();
    //     let targetFixed = target.replace(' ', '-');
    //     targetFixed = targetFixed === 'logo' ? 'home' : targetFixed;
    //     document.getElementById(targetFixed).scrollIntoView();
    // }

  return (
    <div className='flex justify-center bg-brown p-4'>
        <p className='absolute left-0 pl-2' onClick={(e) => scrollLink(e)}>LOGO</p>
        <ul className='flex gap-10 list-none text-green'>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>SOBRE MI</button></li>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>MASAJES</button></li>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>TURNOS</button></li>
            {/* <li><button onClick={(e) => scrollLink(e)}>CONTACTO</button></li> */}
        </ul>
    </div>
  )
}
