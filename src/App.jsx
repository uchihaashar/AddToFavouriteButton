import React, { useState } from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
const App = () => {

  const data = [
    {image : "https://c4.wallpaperflare.com/wallpaper/1017/1020/1002/anime-one-piece-monkey-d-luffy-wallpaper-preview.jpg", Name : "Portugal D Ace", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/26/331/805/one-piece-anime-monkey-d-luffy-wallpaper-preview.jpg", Name : "Monkey D Luffy", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/542/661/246/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg", Name : "Roronoa Zoro", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/887/246/347/anime-one-piece-sanji-one-piece-wallpaper-preview.jpg", Name : "Vinsmoke Sanji", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/805/247/731/gold-d-roger-one-piece-pirate-king-amanomoon-wallpaper-preview.jpg", Name : "Gol D Roger", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/558/187/788/anime-one-piece-man-red-hair-wallpaper-preview.jpg", Name : "Akagami No Shanks", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/246/949/281/one-piece-dracule-mihawk-hd-wallpaper-preview.jpg", Name : "Dracule Mihawk", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/946/577/204/anime-one-piece-rayleigh-silvers-wallpaper-preview.jpg", Name : "Silvers Rayleigh", animeName : "One Piece", added : false},
    {image : "https://c4.wallpaperflare.com/wallpaper/684/483/608/anime-one-piece-sabo-one-piece-wallpaper-preview.jpg", Name : "Sabo", animeName : "One Piece", added : false},
  ];

  const [animeData, setAnimeData] = useState(data);
  const handleClick =(index)=>{
  setAnimeData((prev)=>{

    return prev.map((item, itemIndex)=>{
      if(itemIndex===index)return {...item, added: !item.added}
      return item;
    })
  })
  }

  return (
   <>
   <div className='w-full h-screen bg-zinc-300'>
    <Navbar data={animeData} />
   <div className='px-20 flex gap-10 flex-wrap'>
  {animeData.map((obj, index)=>(
    <Card  data={obj} handleClick={handleClick} index={index} key={index} />
  ))}


   </div>
   </div>
   </>
  )
}

export default App