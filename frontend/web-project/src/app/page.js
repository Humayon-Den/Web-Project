import Link from 'next/link';
import React from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import MostPopular from './components/MostPopular';



export default function Home() {
  return (


    <div className=" flex h-screen  w-screen  bg-[url('/home.jpg')] bg-cover ">

      <div className=' flex justify-center mt-[5%]  mb-[5%] ml-[8%] mr-[8%] rounded-3xl items-center overflow-hidden'>

        {/* left div */}

        <div className="w-1/2 h-[100%] bg-zinc-900   m-auto ">

          <nav className="flex justify-center pb-2 mt-[20px] ml-[30px] mr-[30px] gap-9">
            <a href="/home" className="text-white">Home</a>
            <a href="#" className="text-white">Explore</a>
            <a href="/mostPopular" className="text-white">Most Popular</a>
            <a href="#" className="text-white">Watch2gether</a>
          </nav>

          <div className="text-center  ml-[30px] mr-[30px] mt-10">
            <img src="/logo.png" alt="downlod" className="mx-auto rounded-3xl mb-4  w-[50%]" />
            {/* <h1 className="text-4xl font-bold ml-[30px] mr-[30px]">anicrush</h1> */}
          </div>
          <div className="relative  ml-[65px] mt-12">
            <input type="text" placeholder="Search anime" className="w-[83%] p-3 rounded-full bg-gray-800 text-white" />
            <i className="fas fa-search absolute top-3 right-4 text-gray-500"></i>
          </div>
          <p className="mt-8 text-gray-500 font-sans text-sm ml-[65px] mr-[69px]">
            <strong className='text-gray-300'>Suggestion:</strong> Dandadan, Overflow (Uncensored), Blue Lock Season 2, Re:ZERO - Starting Life in Another World-, Jujutsu Kaisen 2nd Season, Bleach, Solo Leveling, Bleach: Thousand-Year Blood War - The Conflict, Jujutsu Kaisen (TV), The Eminence in Shadow
          </p>
          {/* <button   className=" w-[50%] py-3 bg-purple-600 rounded-full text-white text-lg ml-[140px] mt-14">Enter Anicrush </button> inset arrow */}

          <Link href={"/home"} className=" w-[50%] py-3 bg-purple-600 rounded-full text-white text-lg ml-[140px] mt-14">Enter Anicrush</Link>

          <div className="flex justify-center items-center mt-14 mx-[50px] gap-4">
            <p className="text-center  text-gray-500 ">35.8k <br /> Shares</p>
            <Link href={"https://t.me/share/url?url=https%3A%2F%2Fanicrush.to%2F&text=Anicrush%20-%20Watch%20Anime%20Online%20Free&to="} className='w-32 h-8 bg-blue-500 rounded-full' target='_blank'> <img src="/telegram.png" alt="Loading" className=" h-[80%] w-[20%] mx-[39%] mt-1" /> </Link>

            <Link href={"https://twitter.com/intent/tweet?text=Anicrush%20-%20Watch%20Anime%20Online%20Free&url=https%3A%2F%2Fanicrush.to%2F"} className='w-12 h-8 bg-white rounded-full' target='_blank'> <img src="/twitter.png" alt="Loading" className=" h-[] w-[40%] ml-[30%]  mt-2" /> </Link>
            <Link href={"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Ftitle%3DAnicrush%2B-%2BWatch%2BAnime%2BOnline%2BFree%26url%3Dhttps%253A%252F%252Fanicrush.to%252F"} className='w-12 h-8 bg-[#FF5700] rounded-full' target='_blank'> <img src="/reddit.png" alt="Loading" className=" h-[] w-[40%] ml-[30%]  mt-2 " /> </Link>
            <Link href={"https://web.facebook.com/sharer.php?t=Anicrush+-+Watch+Anime+Online+Free&u=https%3A%2F%2Fanicrush.to%2F&_rdc=1&_rdr#"} className='w-12 h-8 bg-blue-600 rounded-full' target='_blank'> <img src="/facebook.svg" alt="Loading" className=" h-[] w-[40%] ml-[30%]  mt-2  fill-white stroke-white" /> </Link>
            <Link href={""} className='w-12 h-8 bg-green-500 rounded-full' target='_blank'> <img src="/share.png" alt="Loading" className=" h-[] w-[40%] ml-[30%]  mt-2" /> </Link>




            {/* <img src="/reddit.png" alt="Loading" className=" h-[5%] w-[5%] " />
            <img src="/share.png" alt="Loading" className=" h-[5%] w-[5%] " /> */}
            {/* <img src="twitter.jpg" alt="Loading" className="mx-auto mb-4 h-[5%] w-[10%] rounded-full" /> */}

          </div>

        </div>


        {/* right div */}

        <div className="w-1/2 h-[100%] p-10  overflow-auto scrollbar-none bg-zinc-800  text-sm ">


          <p className="mb-6 ml-[10px] mr-[10px] text-gray-400">Like Death Note, do you have an Anime Note filled with all the titles you'd love to see, but the only missing piece is a free anime site that is free and safe?</p>

          <p className="mb-6 ml-[10px] mr-[10px] text-gray-400">Take out the note, as you've found that site, here, at AniCrush! Welcome to our anime haven, where all your anime dreams come true, at no cost to you and with utmost safety. Just like the world of Sword Art Online, but without the fear of getting trapped! </p>

          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">AniCrush - Where Love for Anime Blooms</h2>
          <p className="mb-6 ml-[10px] mr-[10px] text-gray-400"> AniCrush is where you can watch anime for free without ads, immersing yourself in the universe of your favorite shows uninterrupted – much like the fluid action scenes in Cowboy Bebop. What can be better than hours of anime without any knock on the door, no ads in the middle, no lag, and no buffering? A seamless stream of anime goodness awaits you at AniCrush, where your anime-loving heart will surely bloom. </p>

          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px] ">Thousands of Titles, All for Free</h2>

          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400'>
            Is AniCrush free? Absolutely! Dozens of thousands of anime titles from classics like Neon Genesis Evangelion to the latest hits are waiting ahead. No strings attached, no sign-up, no hidden fees all you'll find here is pure anime bliss.</p>

          <p className="mb-6 ml-[10px] mr-[10px] text-gray-400">But, Safety First!</p>

          <p className="mb-6 ml-[10px] mr-[10px] text-gray-400">Is AniCrush safe? You bet! Just like the impenetrable barrier spells in Blue Exorcist, we've got your safety covered. Is it legal? A sure set! Rest assured, our platform operates within the legal boundaries, allowing you to enjoy your anime adventure worry-free. So, sit back, relax, and let the vibrant world of AniCrush unfold before you, much like the opening scenes of your favorite anime.</p>

          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">Unlike Your Crush, We Truly Care and We Show It Clear!
          </h2>

          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400'>Just as Inuyasha protects Kagome, we're here to shield you from the woes of poor anime streaming experiences and deliver the best of the best in anime entertainment.</p>

          <ul className="list-disc pl-5 space-y-2 text-violet-400 text-lg">

            <li>Extensive Content Library:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>AniCrush's library is as extensive as the world of Hunter x Hunter, filled with diverse genres that cater to every anime lover's taste. From the action-packed adventures of Fullmetal Alchemist to the magical realms of Madoka Magica, our library is a testament to the rich tapestry of anime.</p>

            <li>Friendly UI & UX:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Navigating AniCrush is as smooth and straightforward as a scroll through the picturesque landscapes in Spirited Away. Our user-friendly interface ensures that you easily find your desired anime titles with just a few clicks, providing an enjoyable and hassle-free user experience.</p>

            <li>No Sign-Up:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Much like the simple joys of flying on Kiki's broomstick in Kiki's Delivery Service, accessing AniCrush's vast library requires no sign-up or registration. We value your freedom and want you to dive straight into the world of anime without any hassle.</p>

            <li>HD Quality:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Experience the vivid colors and intricate details of your favorite anime worlds in HD quality, just as the animators intended. Each frame is as clear and sharp as Kirito's sword in Sword Art Online, ensuring you don't miss a single detail.</p>

            <li>No Ads:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'> Ads can be as annoying as Team Rocket in Pokémon, but worry not! AniCrush is a no-ad zone, allowing you to enjoy your anime uninterrupted. No more pesky ads to ruin the moment, just pure, unadulterated anime bliss.</p>

            <li>SUB and DUB:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'> Whether you prefer the original Japanese voice acting with subtitles or the dubbed version in your language, AniCrush has got you covered. Just like how Goku can transform into different forms, AniCrush caters to your preferences, offering both SUB and DUB options for most titles.</p>

            <li>Fast Loading Speed:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>AniCrush fast loading speed is akin to the lightning-fast reflexes of Levi Ackerman in Attack on Titan. We understand the importance of not missing a single moment, and our platform ensures you won't have to wait to immerse yourself in your favorite anime world.</p>

            <li>Device Compatibility:</li>
            <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Just like the adaptability of the characters in My Hero Academia, AniCrush is compatible with a wide range of devices. Whether you're on a desktop, tablet, or mobile, our platform is optimized to provide you with the best anime streaming experience, anytime, anywhere.</p>
          </ul>

          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">How to Watch Free Anime on AniCrush?</h2>
          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Its as easy as setting off on a quest in an RPG! Simply visit AniCrush.com, browse through our extensive anime library, pick your desired title, and hit play. No sign-ups, no logins. Just pure anime goodness at your fingertips.</p>

          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">How to Download Anime on AniCrush?</h2>
          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>While we currently do not support direct downloads, don’t sweat it! You can stream your favorite anime titles directly on our platform, ensuring that you have access to your desired content anytime, anywhere, just like how a Poké Ball ensures you always have your trusted Pokémon by your side. But if you need to download it to watch offline later, hold tight, the feature will be added real soon!</p>



          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">How Is AniCrush Compared to Other Free Anime Streaming Sites?</h2>
          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>How Is AniCrush Compared to Other Free Anime Streaming Sites?
            In the world of free anime streaming sites, with big names like 9anime, aniwatch, and zoro sailing alongside, AniCrush has learned from their mistakes and adopted their best features. We're confident that we stand shoulder to shoulder with these giants, if not on a pedestal above them. With our user-friendly interface, extensive library, and top-notch streaming quality, we're sure that once you embark on the AniCrush journey, you'll never want to set sail with another crew!</p>

          <h2 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">The Best Anime to Watch Online for Free on AniCrush:</h2>

          <h3 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">Action Anime</h3>

          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>If you're a fan of heart-pounding excitement and adrenaline-pumping scenes, check out these action-packed anime titles on AniCrush:</p>


          <ul className="list-disc pl-5 space-y-2 text-violet-400 text-lg">

            <li>Attack on Titan:<p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Witness humanity's struggle for survival against the gigantic and mysterious Titans.</p></li>

            <li>Fullmetal Alchemist Brotherhood:<p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'> Follow the alchemical journey of the Elric brothers as they seek the Philosopher's Stone.</p></li>

            <li>Naruto:<p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Join Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.</p></li>
          </ul>

          <h3 className="text-lg font-bold mb-4 ml-[10px] mr-[10px]">Adventure Anime</h3>

          <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>For those who crave epic quests and thrilling explorations, dive into these adventure-filled anime:</p>


          <ul className="list-disc pl-5 space-y-2 text-violet-400 text-lg">

            <li>One Piece: <p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Embark on a sea voyage with Monkey D. Luffy and his crew in search of the legendary One Piece treasure.</p></li>

            <li>Hunter x Hunter:<p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Experience the trials and tribulations of Gon Freecss as he aims to become a Hunter and find his missing father.</p></li>

            <li>Sword Art Online:<p className='mb-6 ml-[10px] mr-[10px] text-gray-400 text-sm'>Step into the virtual world of Aincrad, where players must clear all 100 floors to escape.</p></li>
          </ul>

        </div>
      </div>
    </div >


  );
};
