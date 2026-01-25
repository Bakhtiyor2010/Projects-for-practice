export function initBooks() {
  const books = [
    {
      data: "winter",
      name: "The Book Eaters",
      author: "Sunyi Dean",
      description: "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.",
      src: "images/empty.png",
      alt: "empty",
    },
    {
      data: "winter",
      name: "Cackle",
      author: "Rachel Harrison",
      description: "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",
      src: "images/harrison.png",
      alt: "harrison",
    },
    {
      data: "winter",
      name: "Dante: Poet of the Secular World",
      author: "Erich Auerbach",
      description: "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
      src: "images/dante.png",
      alt: "dante",
    },
    {
      data: "winter",
      name: "The Last Queen",
      author: "Clive Irving",
      description: "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",
      src: "images/queen.png",
      alt: "queen",
    },
    {
      data: "spring",
      name: "The Body",
      author: "Stephen King",
      description: "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
      src: "images/king.png",
      alt: "king",
    },
    {
      data: "spring",
      name: "Carry: A Memoir of Survival on Stolen Land",
      author: "Toni Jenson",
      description: "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
      src: "images/carry.png",
      alt: "carry",
    },
    {
      data: "spring",
      name: "Days of Distraction",
      author: "Alexandra Chang",
      description: "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
      src: "images/chang.png",
      alt: "chang",
    },
    {
      data: "spring",
      name: "Dominicana",
      author: "Angie Cruz",
      description: "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.",
      src: "images/gruz.png",
      alt: "gruz",
    },
    {
      data: "summer",
      name: "Crude: A Memoir",
      author: "Pablo Fajardo & ​​Sophie Tardy-Joubert",
      description: "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people",
      src: "images/memuar.png",
      alt: "memuar",
    },
    {
      data: "summer",
      name: "Let My People Go Surfing",
      author: "Yvon Chouinard",
      description: "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.",
      src: "images/choirnad.png",
      alt: "choirnad",
    },
    {
      data: "summer",
      name: "The Octopus Museum: Poems",
      author: "Brenda Shaughnessy",
      description: "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.",
      src: "images/poems.png",
      alt: "poems",
    },
    {
      data: "summer",
      name: "Shark Dialogues: A Novel",
      author: "Kiana Davenport",
      description: "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.",
      src: "images/kiana.png",
      alt: "kiana",
    },
    {
      data: "autumn",
      name: "Casual Conversation",
      author: "Renia White",
      description: "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. ",
      src: "images/white.png",
      alt: "white",
    },
    {
      data: "autumn",
      name: "The Great Fire",
      author: "Lou Ureneck",
      description: "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide",
      src: "images/urenech.png",
      alt: "urenech",
    },
    {
      data: "autumn",
      name: "Rickey: The Life and Legend",
      author: "Howard Bryant",
      description: "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
      src: "images/rickey.png",
      alt: "rickey",
    },
    {
      data: "autumn",
      name: "Slug: And Other Stories",
      author: "Megan Milks",
      description: "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.",
      src: "images/slug.png",
      alt: "slug",
    },
  ];

  class Book {
    constructor(data, name, author, description, src, alt, parentSelector) {
      this.data = data;
      this.name = name;
      this.author = author;
      this.description = description;
      this.src = src;
      this.alt = alt;
      this.parentSelector = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      
      element.classList.add("book");
      element.setAttribute("data-season", this.data);

      element.innerHTML = `
                <h1 class="title-1">Staff Picks</h1>
                <div class="line-title"><div></div></div>
                <h1 class="title-2">${this.name} <br> by ${this.author}</h1>
                <p class="description">${this.description}</p>
                <button>Buy</button>
                <img src="${this.src}" alt="${this.alt}">
            `;

      this.parentSelector.append(element);
    }
  }

  books.forEach((book) => {
    const { data, name, author, description, src, alt } = book;
    new Book( data, name, author, description, src, alt, ".book-collection" ).render();
  });
}