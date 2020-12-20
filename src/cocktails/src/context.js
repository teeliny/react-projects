import React, { useState, useContext, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('ca');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strCategory } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            alcoholic: strAlcoholic,
            glass: strGlass,
            category: strCategory
          }
        })
        setCocktails(newCocktails);
        // setLoading(false);
      }
      else {
        setCocktails([]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [searchTerm])

  useEffect(() => {
    fetchDrinks();
  },[fetchDrinks, searchTerm])

  return <AppContext.Provider value={{
    loading,
    setSearchTerm,
    cocktails,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
