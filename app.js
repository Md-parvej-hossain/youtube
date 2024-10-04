const loadCatagories = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.categories))
    .catch(error => console.log(error));
};
const loadVideio = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displeyVidous(data.videos))
    .catch(error => console.log(error));
};
const displeyVidous = videos => {
  const vidosContent = document.getElementById('vidos');
  videos.forEach(video => {
    console.log(video);
    const card = document.createElement('div');
    // const damo = {
    //   category_id: '1003',
    //   video_id: 'aaai',
    //   thumbnail: 'https://i.ibb.co/kc8CCFs/30-rock.png',
    //   title: '30 Rock',
    //   authors: [
    //     {
    //       profile_picture: 'https://i.ibb.co/YZN9rQZ/tina.jpg',
    //       profile_name: 'Tina Fey',
    //       verified: false,
    //     },
    //   ],
    //   others: {
    //     views: '4.5K',
    //     posted_date: '14800',
    //   },
    //   description:
    //     "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines.",
    // };
    card.classList = 'card card-compact ';
    card.innerHTML = `
    <figure class ="h-[200px]">
    <img
      src=${video.thumbnail}
      class =" h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src =${
      video.authors[0].profile_picture
    }/>
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class=" flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified === true
        ? `<img class="w-5" src ="https://img.icons8.com/?size=96&id=91kLZWvmd4sg&format=png"/>`
        : ''
    }
    
    </div>
  

    <p></p>
    </div>
  </div>
    
    `;

    vidosContent.appendChild(card);
  });
};

const displayCatagories = categories => {
  const catagoresContiner = document.getElementById('catagores');
  categories.forEach(element => {
    const buttons = document.createElement('button');
    buttons.classList = 'btn';
    buttons.innerText = element.category;
    catagoresContiner.appendChild(buttons);
  });
};

loadCatagories();
loadVideio();
