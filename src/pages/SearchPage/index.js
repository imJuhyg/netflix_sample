import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';

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

  useEffect(() => {
    if (searchTerms) {
      fetchSearchMovie(searchTerms);
    }
  }, [searchTerms]);

  const fetchSearchMovie = async (searchTerms) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerms}`);
      setSearchResults(request.data.results);

    } catch (error) {
      console.log("error: ", error);
    }
  }


  

  return (
    <div>

    </div>
  )
}
