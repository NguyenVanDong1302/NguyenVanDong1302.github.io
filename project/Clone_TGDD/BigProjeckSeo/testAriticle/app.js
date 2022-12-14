var description = " Lorem ipsum dolor sit amet, consectetur adipisicing elit.[img] Eos nobis possimus officia. Officia fugiat, voluptatem tenetur soluta quas harum et numquam similique sit nostrum labore libero. Alias ut ullam reprehenderit! "


// var htmls = description.map(()=>{
// })


var arrDescription = description.find(() => {
   return '[img]'
})

console.log(arrDescription);

// console.log(arrDescription);