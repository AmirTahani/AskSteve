import React, { useState } from 'react';
import { StyleSheet, FlatList, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { searchRepo } from '../../redux/Modules/search';
import { Input, Button, Wrapper, EmptyList, Loading } from '../../Components/kit';
import Repo from "./Repo";

function Home({ search, searchRepo, navigation }) {
  const [repo, setRepo] = useState('');

  const handleSearch = () => {
    Keyboard.dismiss();
    searchRepo({ q: repo });
  };

  const navigateToCommits = (item) => {
    navigation.navigate('Commits', {
      repo: item
    })
  };

  return (
    <Wrapper style={styles.wrapper}>
      <Input
        placeholder="Search Repo"
        value={repo}
        onChangeText={setRepo}
      />
      <Button onPress={handleSearch}>
        Search
      </Button>
      {
        search.loading  ? <Loading/> : <>
          <FlatList
            data={search.data}
            ListEmptyComponent={EmptyList}
            renderItem={({ item }) => (
              <Repo
                repo={item}
                onPress={() => navigateToCommits(item)}
              />
            )}
            keyExtractor={item => item.node_id}
          />
        </>
      }

    </Wrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 12,
    marginVertical: 10
  }
});

export default connect(state => ({
  search: state.search
}), {
  searchRepo
})(Home);
