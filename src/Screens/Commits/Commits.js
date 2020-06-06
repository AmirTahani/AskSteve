import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { EmptyList, Loading, Wrapper } from '../../Components/kit';
import { loadCommits } from '../../redux/Modules/commits';
import Commit from './Commit';
import { FlatList } from 'react-native';

function Commits({ loadCommits, route, commits }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    loadCommits({ owner: route.params.repo.owner.login, repo: route.params.repo.name, page: 1 });
  }, []);


  const handleLoadMore = () => {
    if (!commits.loading && !commits.reachedLastPage) {
      setPage(page + 1);
      loadCommits({ owner: route.params.repo.owner.login, repo: route.params.repo.name, page: page + 1 });
    }
  };
  return (
    <Wrapper>
      {
        commits.loading && !commits.loaded ? <Loading/> : <FlatList
          onEndReached={handleLoadMore}
          ListEmptyComponent={EmptyList}
          data={commits.data}
          renderItem={({ item }) => (
            <Commit
              commit={item}
            />
          )}
          keyExtractor={item => item.node_id}
        />
      }
    </Wrapper>
  );
}

export default connect(state => ({
  commits: state.commits
}), { loadCommits })(Commits);
