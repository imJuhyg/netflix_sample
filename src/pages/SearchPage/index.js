import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce'

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  /*
  * useLocation()으로 현재 경로의 pathname, params를 알 수 있다.
  * URLSearchParams를 이용하면 경로의 파라미터 부분을 잘라서 얻을 수 있다.
  * ex) ?q=spider_man => query.get("q") => "spider_man"
  */
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  const searchTerms = useQuery().get("q");
  const debouncedSearchTerms = useDebounce(searchTerms, 500);
  console.log("debouncedSearchTerms:", debouncedSearchTerms);

  useEffect(() => {
    if (debouncedSearchTerms) {
      fetchSearchMovie(debouncedSearchTerms);
    }
  }, [debouncedSearchTerms]);

  const fetchSearchMovie = async (debouncedSearchTerms) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${debouncedSearchTerms}`);
      setSearchResults(request.data.results);

    } catch (error) {
      console.log("error: ", error);
    }
  }

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster">
                  <img
                    src={movieImageUrl} alt="movie image"
                    className="movie__poster"
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 검색어 "{debouncedSearchTerms}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    )
  }


  return renderSearchResults();
}
