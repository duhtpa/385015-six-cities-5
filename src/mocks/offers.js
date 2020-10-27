const ITEMS = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`
];

const REVIEWS = [
  `Lorem ipsum dolor sit amet, consectetuer adipiscing elit`,
  `Aenean commodo ligula eget dolor`,
  `Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
  `Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`,
  `Nulla consequat massa quis enim`,
  `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu`,
  `Donec sodales sagittis magna.`
];

const TITLES = [
  `Lorem ipsum dolor sit amet, consectetuer adipiscing elit`,
  `Aenean commodo ligula eget dolor`,
  `Aenean massa. Cum sociis natoque penatibus`,
  `Donec quam felis, ultricies nec, pellentesque eu.`,
  `Nulla consequat massa quis enim`,
  `Donec pede justo, fringilla vel, arcu`,
  `Donec sodales sagittis magna.`
];

const PHOTOS = [
  `../img/room.jpg`,
  `../img/apartment-01.jpg`,
  `../img/apartment-02.jpg`,
  `../img/apartment-03.jpg`,
  `../img/room.jpg`,
  `../img/apartment-01.jpg`,
  `../img/apartment-02.jpg`,
  `../img/apartment-03.jpg`,
];

const DESCRIPTIONS = [
  `Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc`,
  `Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.`,
  `Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.`
];

const TypePlace = [
  {
    name: `Apartment`,
    type: `apartment`,
  },
  {
    name: `Hotel`,
    type: `hotel`,
  },
  {
    name: `House`,
    type: `house`,
  },
  {
    name: `Private Room`,
    type: `room`,
  },
];

const USERS = [
  {
    avatar: `./img/avatar-max.jpg`,
    name: `Alex`
  },
  {
    avatar: `./img/avatar-angelina.jpg`,
    name: `Angelina`
  },
  {
    avatar: `./img/avatar-max.jpg`,
    name: `Max`
  },
  {
    avatar: `./img/avatar-angelina.jpg`,
    name: `Anna`
  },
];

const LOCATIONS = [
  {
    city: `Brussels`,
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
  },
  {
    city: `Amsterdam`,
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
  },
  {
    city: `Amsterdam`,
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
  },
  {
    city: `Amsterdam`,
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
  },
];

const Count = {
  BEDROOMS: 4,
  GUESTS_MAX: 6,
  GUESTS_MIN: 2,
  ITEMS_MAX: ITEMS.length - 1,
  ITEMS_MIN: 2,
  OFFERS: 4,
  PHOTOS: 6,
  PRICE_MAX: 150,
  PRICE_MIN: 50,
  RATING: 4,
  REVIEWS: 10,
  PERCENT_STEP: 20,
};

const getRandom = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getPhotoLibrary = (count) => {
  const photos = [];

  for (let i = 0; i < count; i++) {
    photos.push(PHOTOS[getRandom(0, Count.PHOTOS - 1)]);
  }

  return photos;
};

const getOfferItems = (count) => {
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push(ITEMS[getRandom(0, ITEMS.length - 1)]);
  }

  return items;
};

const getOfferOwner = () => {
  const user = USERS[getRandom(0, USERS.length - 1)];

  const owner = {
    avatar: user.avatar,
    name: user.name,
  };

  return owner;
};

const getDate = () => {
  const daysGap = getRandom(-100, 1);
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const getOfferReviews = (count) => {
  const reviews = [];

  for (let i = 0; i < count; i++) {
    const user = USERS[getRandom(0, USERS.length - 1)];

    const review = {
      avatar: user.avatar,
      date: getDate(),
      name: user.name,
      rating: getRandom(0, Count.RATING) * 20 + `%`,
      text: REVIEWS[getRandom(0, REVIEWS.length - 1)],
    };

    reviews.push(review);
  }

  return reviews;
};

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generateOffers = () => {
  const count = Count.OFFERS;
  const offers = [];

  for (let i = 0; i < count; i++) {
    const offer = {
      bedroomsCount: getRandom(1, Count.BEDROOMS),
      description: DESCRIPTIONS[getRandom(0, DESCRIPTIONS.length - 1)],
      favorite: getRandom(),
      guestsCount: getRandom(Count.GUESTS_MIN, Count.GUESTS_MAX),
      id: generateId(),
      items: getOfferItems(getRandom(Count.ITEMS_MIN, Count.ITEMS_MAX)),
      owner: getOfferOwner(),
      photos: getPhotoLibrary(getRandom(1, Count.PHOTOS - 1)),
      premium: getRandom(),
      price: getRandom(Count.PRICE_MIN, Count.PRICE_MAX),
      rating: `${getRandom(0, Count.RATING)}.${getRandom(0, 9)}`,
      ratingInPercent: getRandom(0, Count.RATING) * Count.PERCENT_STEP + `%`,
      reviews: getOfferReviews(getRandom(0, Count.REVIEWS - 1)),
      title: TITLES[getRandom(0, TITLES.length - 1)],
      typePlace: TypePlace[getRandom(0, TypePlace.length - 1)],
      location: LOCATIONS[i],
    };

    offers.push(offer);
  }

  return offers;
};

const offers = generateOffers();

export default offers;
