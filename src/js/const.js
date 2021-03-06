export const AppRoute = {
  CATALOG: { url: "/", name: "Каталог" },
  CART: { url: "/cart", name: "Оформляем" },
};
export const PromoCodeNames = {
  GITARAHIT: "GITARAHIT",
  SUPERGITARA: "SUPERGITARA",
  GITARA2020: "GITARA2020",
};

export const PromoCodesInfo = {
  [PromoCodeNames.GITARAHIT]: {
    discountPercentage: 10,
    maxPercentageOfTheOrder: null,
    discountAmount: null,
  },
  [PromoCodeNames.SUPERGITARA]: {
    discountPercentage: null,
    maxPercentageOfTheOrder: null,
    discountAmount: 700,
  },
  [PromoCodeNames.GITARA2020]: {
    discountPercentage: null,
    maxPercentageOfTheOrder: 30,
    discountAmount: 3500,
  },
};

export const QUANTITY_STRINGS_OPTIONS = [4, 6, 7, 12];
export const RATING_STAR_COUNT = [1, 2, 3, 4, 5];

export const PaginationData = {
  COUNT_CARDS_ON_PAGES: 9,
  MAX_VISIBLE_PAGES: 7,
  MIN_VISIBLE_PAGES: 3,
  PAGES_BEFORE_CUTTING: 2,
};

export const GUITARS_DATA = [
  {
    type: "acoustic",
    nameType: "акустическая гитара",
    nameGroup: "Акустические гитары",
    quantityStrings: [6, 7, 12],
  },
  {
    type: "electro",
    nameType: "электрогитара",
    nameGroup: "Электрогитары",
    quantityStrings: [4, 6, 7],
  },
  {
    type: "ukulele",
    nameType: "укулеле",
    nameGroup: "Укулеле",
    quantityStrings: [4],
  },
];

export const CATALOG = [
  {
    vendorCode: "SO757575",
    name: "Честер Bass",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 15,
    countStrings: 7,
    price: 17500,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "TK129049",
    name: "СURT Z300",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 9,
    countStrings: 7,
    price: 29500,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "RO111111",
    name: "Roman LX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 21,
    countStrings: 4,
    price: 6800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "TK436457",
    name: "	СURT T300",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 15,
    countStrings: 6,
    price: 30000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "DI192138",
    name: "Dania Super",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 5,
    countStrings: 7,
    price: 3500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "SO934345",
    name: "Честер WX",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 17,
    countStrings: 6,
    price: 15300,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "DI082347",
    name: "Dania VX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 5,
    countStrings: 4,
    price: 2200,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "SO135646",
    name: "Честер Plus",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 27,
    countStrings: 4,
    price: 30000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "VO154751",
    name: "Виолана 300",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 3,
    countStrings: 7,
    price: 1700,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "TK244556",
    name: "СURT Clasic",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 20,
    countStrings: 4,
    price: 23000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "TK134663",
    name: "СURT Z250",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 19,
    countStrings: 4,
    price: 18700,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "SO123212",
    name: "Честер 7X",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 30,
    countStrings: 7,
    price: 35000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "SO123234",
    name: "Честер 6V",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 28,
    countStrings: 6,
    price: 14900,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "VO519510",
    name: "Виолана Mix",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 7,
    countStrings: 6,
    price: 7600,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "VO457369",
    name: "Виолана 250x",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 19,
    countStrings: 6,
    price: 6500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "FB625903",
    name: "Фабио Лайт",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 26,
    countStrings: 7,
    price: 12000,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "FB576948",
    name: "Фабио L100",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 31,
    countStrings: 7,
    price: 9900,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU012032",
    name: "Liana Z200",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 28,
    countStrings: 12,
    price: 8900,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU546853",
    name: "Liana Z100",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 34,
    countStrings: 12,
    price: 10500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU458283",
    name: "Liana Z300",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 9,
    countStrings: 6,
    price: 13300,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "RO324341",
    name: "Roman RX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 37,
    countStrings: 4,
    price: 4800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "RO214235",
    name: "Roman TX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 5,
    countStrings: 4,
    price: 1900,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI132414",
    name: "Dania U100",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 23,
    countStrings: 4,
    price: 25000,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI934754",
    name: "Dania WR",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 3,
    countStrings: 4,
    price: 3800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI034292",
    name: "Dania LE",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 10,
    countStrings: 4,
    price: 4100,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "MI193214",
    name: "Mirana V10",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 14,
    countStrings: 4,
    price: 2700,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "VO043244",
    name: "Виолана Mini",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 29,
    countStrings: 4,
    price: 6700,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "SO857575",
    name: "Честер Bass",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 15,
    countStrings: 7,
    price: 17500,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "TK129149",
    name: "СURT Z300",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 9,
    countStrings: 7,
    price: 29500,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "RO111211",
    name: "Roman LX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 21,
    countStrings: 4,
    price: 6800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "TK425457",
    name: "	СURT T300",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 15,
    countStrings: 6,
    price: 30000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "DI191238",
    name: "Dania Super",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 5,
    countStrings: 7,
    price: 3500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "SO934745",
    name: "Честер WX",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 17,
    countStrings: 6,
    price: 15300,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "DI052347",
    name: "Dania VX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 5,
    countStrings: 4,
    price: 2200,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "SO135644",
    name: "Честер Plus",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 27,
    countStrings: 4,
    price: 30000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "VO354751",
    name: "Виолана 300",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 3,
    countStrings: 7,
    price: 1700,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "TK244526",
    name: "СURT Clasic",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 20,
    countStrings: 4,
    price: 23000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "TK135563",
    name: "СURT Z250",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 19,
    countStrings: 4,
    price: 18700,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "SO124112",
    name: "Честер 7X",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 30,
    countStrings: 7,
    price: 35000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "SO123114",
    name: "Честер 6V",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 28,
    countStrings: 6,
    price: 14900,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "VO599510",
    name: "Виолана Mix",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 7,
    countStrings: 6,
    price: 7600,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "VO455169",
    name: "Виолана 250x",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 19,
    countStrings: 6,
    price: 6500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "FB775903",
    name: "Фабио Лайт",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 26,
    countStrings: 7,
    price: 12000,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "FB565948",
    name: "Фабио L100",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 31,
    countStrings: 7,
    price: 9900,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU011332",
    name: "Liana Z200",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 28,
    countStrings: 12,
    price: 8900,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU544453",
    name: "Liana Z100",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 34,
    countStrings: 12,
    price: 10500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU459983",
    name: "Liana Z300",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 9,
    countStrings: 6,
    price: 13300,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "RO334341",
    name: "Roman RX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 37,
    countStrings: 4,
    price: 4800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "RO964235",
    name: "Roman TX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 5,
    countStrings: 4,
    price: 1900,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI772414",
    name: "Dania U100",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 23,
    countStrings: 4,
    price: 25000,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI925754",
    name: "Dania WR",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 3,
    countStrings: 4,
    price: 3800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI036692",
    name: "Dania LE",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 10,
    countStrings: 4,
    price: 4100,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "MI193884",
    name: "Mirana V10",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 14,
    countStrings: 4,
    price: 2700,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "VO055244",
    name: "Виолана Mini",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 29,
    countStrings: 4,
    price: 6700,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "SO763575",
    name: "Честер Bass",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 15,
    countStrings: 7,
    price: 17500,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "TK175049",
    name: "СURT Z300",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 9,
    countStrings: 7,
    price: 29500,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "RO113211",
    name: "Roman LX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 21,
    countStrings: 4,
    price: 6800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "TK435457",
    name: "	СURT T300",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 15,
    countStrings: 6,
    price: 30000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "DI163138",
    name: "Dania Super",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 5,
    countStrings: 7,
    price: 3500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "SO954345",
    name: "Честер WX",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 17,
    countStrings: 6,
    price: 15300,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "DI088847",
    name: "Dania VX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 5,
    countStrings: 4,
    price: 2200,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "SO135996",
    name: "Честер Plus",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 27,
    countStrings: 4,
    price: 30000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "VO154756",
    name: "Виолана 300",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 3,
    countStrings: 7,
    price: 1700,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "TK244522",
    name: "СURT Clasic",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 20,
    countStrings: 4,
    price: 23000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "TK114663",
    name: "СURT Z250",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 19,
    countStrings: 4,
    price: 18700,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "SO125512",
    name: "Честер 7X",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 30,
    countStrings: 7,
    price: 35000,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "SO122234",
    name: "Честер 6V",
    type: GUITARS_DATA[1].type,
    nameType: GUITARS_DATA[1].nameType,
    popularity: 28,
    countStrings: 6,
    price: 14900,
    img: "electro",
    imgMin: "electro-min",
  },
  {
    vendorCode: "VO515510",
    name: "Виолана Mix",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 7,
    countStrings: 6,
    price: 7600,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "VO457377",
    name: "Виолана 250x",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 19,
    countStrings: 6,
    price: 6500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "FB625900",
    name: "Фабио Лайт",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 26,
    countStrings: 7,
    price: 12000,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "FB576911",
    name: "Фабио L100",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 31,
    countStrings: 7,
    price: 9900,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU012041",
    name: "Liana Z200",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 28,
    countStrings: 12,
    price: 8900,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU546852",
    name: "Liana Z100",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 34,
    countStrings: 12,
    price: 10500,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "LU458266",
    name: "Liana Z300",
    type: GUITARS_DATA[0].type,
    nameType: GUITARS_DATA[0].nameType,
    popularity: 9,
    countStrings: 6,
    price: 13300,
    img: "acoustic",
    imgMin: "acoustic-min",
  },
  {
    vendorCode: "RO324317",
    name: "Roman RX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 37,
    countStrings: 4,
    price: 4800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "RO214294",
    name: "Roman TX",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 5,
    countStrings: 4,
    price: 1900,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI132422",
    name: "Dania U100",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 23,
    countStrings: 4,
    price: 25000,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI934777",
    name: "Dania WR",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 3,
    countStrings: 4,
    price: 3800,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
  {
    vendorCode: "DI034244",
    name: "Dania LE",
    type: GUITARS_DATA[2].type,
    nameType: GUITARS_DATA[2].nameType,
    popularity: 10,
    countStrings: 4,
    price: 4100,
    img: "ukulele",
    imgMin: "ukulele-min",
  },
];
