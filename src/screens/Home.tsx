import React, { useState, useRef } from 'react'
import { StatusBar, FlatList } from 'react-native'
import styled from 'styled-components/native'

import categories from '../utils/categories'
import games, { Game } from '../utils/games'
import Text from '@components/Text'

const Home: React.FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const gamesRef = useRef()

  const GameItem = (game: Game) => {
    return (
      <SingleGame>
        <GameCover source={{ uri: game.cover }} />
        <GameInfo style={{ backgroundColor: game.backgroundColor }}>
          <GameImage source={{ uri: game.cover }} />
          <GameTitle>
            <Text medium bold>
              {game.title}
            </Text>
            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
      </SingleGame>
    )
  }

  const changeCategory = (category: string) => {
    // @ts-ignore
    gamesRef.current.scrollToOffset({ x: 0, y: 0 })
    setSelectedCategory(category)
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Text large>
          Hello{' '}
          <Text large bold>
            World!
          </Text>
          {'\n'}
          <Text large bold>
            Best games for Today
          </Text>
        </Text>
        <Avatar source={require('../../assets/favicon.png')} />
      </Header>

      <Categories horizontal>
        {categories.map((category, index) => (
          <Category key={index} onPress={() => changeCategory(category)}>
            <CategoryName selected={selectedCategory === category}>
              {category}
            </CategoryName>
            {selectedCategory === category && <CategoryDot />}
          </Category>
        ))}
      </Categories>

      <Games
        data={games.filter(
          (game) =>
            game.category.includes(selectedCategory) ||
            selectedCategory === 'All'
        )}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => GameItem(item.item)}
        ref={gamesRef}
      />
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`

interface CategoryNameProps {
  selected?: boolean
}

const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? '#919ee5' : '#9a9a9a')};
  font-weight: ${(props) => (props.selected ? '700' : '500')};
`

const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
`

const Games = styled(FlatList as new () => FlatList<Game>)`
  margin-top: 32px;
  flex: 1;
`

const SingleGame = styled.TouchableOpacity`
  margin-bottom: 32px;
`

const GameCover = styled.Image`
  height: 300px;
  width: 100%;
`

const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`

const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 8px;
`

const GameTitle = styled.View`
  margin: 0 24px;
`

export default Home
