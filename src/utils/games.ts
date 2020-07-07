export interface Game {
  id: number
  title: string
  teaser: string
  description: string
  rating: number
  category: string[]
  age: string
  cover: string
  screenshots: string[]
  backgroundColor: string
}

const games: Game[] = [
  {
    id: 1,
    title: 'The Witcher III',
    teaser: 'Some teaser',
    description: 'Some description. Some description. Some description',
    rating: 4.5,
    category: ['Action', 'RPG'],
    age: '12+',
    cover:
      'https://images.g2a.com/newlayout/323x433/1x1x0/6c3371cf8bb0/59128878ae653afb9e493389',
    screenshots: [
      'https://images.gog-statics.com/0590c43c5c436bfc4c116f44a3d9f14bed3dd93505afb439c25a5075c20aefaa_product_card_v2_mobile_slider_639.jpg',
      'https://data3.origin.com/content/dam/originx/web/app/games/witcher/the-witcher-wild-hunt/screenshots/the-witcher-3-wild-hunt/71696_screenhi_930x524_en_US_04_%5E_2014-11-05-12-00-11_98f7a55bc17b8ba5a60d6dfeaff00a537727b397.jpg',
    ],
    backgroundColor: '#824571',
  },
  {
    id: 2,
    title: 'The Witcher III',
    teaser: 'Some teaser',
    description: 'Some description. Some description. Some description',
    rating: 4.5,
    category: ['Action', 'RPG'],
    age: '12+',
    cover:
      'https://images.g2a.com/newlayout/323x433/1x1x0/6c3371cf8bb0/59128878ae653afb9e493389',
    screenshots: [
      'https://images.gog-statics.com/0590c43c5c436bfc4c116f44a3d9f14bed3dd93505afb439c25a5075c20aefaa_product_card_v2_mobile_slider_639.jpg',
      'https://data3.origin.com/content/dam/originx/web/app/games/witcher/the-witcher-wild-hunt/screenshots/the-witcher-3-wild-hunt/71696_screenhi_930x524_en_US_04_%5E_2014-11-05-12-00-11_98f7a55bc17b8ba5a60d6dfeaff00a537727b397.jpg',
    ],
    backgroundColor: '#824571',
  },
]

export default games
